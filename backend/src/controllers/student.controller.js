import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Student } from "../models/student.model.js";
import { Fellow } from "../models/fellow.model.js";
// import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const registerStudent = asyncHandler(async (req, res) => {
    const { studentName, class: studentClass } = req.body;
    const fellowId = req.params.id; // fellow ID from URL parameter

    // Validation - not empty
    if (!studentName || !studentClass) {
        throw new ApiError(400, "Student name and class are required");
    }

    // Ensure studentClass is a number and within the allowed range
    const validClasses = [1, 2, 3, 4, 5];
    if (!validClasses.includes(studentClass)) {
        throw new ApiError(400, `Class must be one of the following values: ${validClasses.join(", ")}`);
    }

    // Check if the fellow exists
    const fellow = await Fellow.findById(fellowId);
    if (!fellow) {
        throw new ApiError(404, "Fellow not found");
    }

    // Create student object - create entry in db
    const student = await Student.create({
        studentName,
        class: studentClass,
        fellow: fellowId,
    });

    const createdStudent = await Student.findById(student._id).populate('fellow', '-password -refreshToken');

    if (!createdStudent) {
        throw new ApiError(500, "Something went wrong while registering the student");
    }

    return res.status(201).json(
        new ApiResponse(200, createdStudent, "Student registered successfully")
    );
});


const allStudents = asyncHandler(async (req, res) => {
    const fellowId = req.params.id; // assuming fellow id is received as url param

    // Check if the fellow exists
    const fellow = await Fellow.findById(fellowId);
    if (!fellow) {
        throw new ApiError(404, "Fellow not found");
    }

    // Fetch all students associated with the fellowId
    const students = await Student.find({ fellow: fellowId });

    if (!students) {
        throw new ApiError(500, "Something went wrong while fetching the students");
    }

    return res.status(200).json(
        new ApiResponse(200, students, "Students fetched successfully")
    );
});

const getStudentsByClassAndFellow = asyncHandler(async (req, res) => {
    const { class: studentClass } = req.body;
    const fellowId = req.params.fellowId; // fellow ID from URL parameter

    // Validate the student class parameter
    const studentClassNumber = parseInt(studentClass, 10); // Convert the class param to a number
    if (isNaN(studentClassNumber) || studentClassNumber < 1 || studentClassNumber > 5) {
        throw new ApiError(400, "Invalid student class parameter. Must be a number between 1 and 5.");
    }

    // Validate the fellow ID parameter
    if (!fellowId) {
        throw new ApiError(400, "Fellow ID is required.");
    }

    // Retrieve students belonging to the given class and fellow
    const students = await Student.find({ class: studentClassNumber, fellow: fellowId });

    if (!students || students.length === 0) {
        throw new ApiError(404, "No students found for the given class and fellow");
    }

    return res.status(200).json(
        new ApiResponse(200, students, "Students retrieved successfully")
    );
});


export { registerStudent, allStudents, getStudentsByClassAndFellow };