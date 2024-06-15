import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Assessment } from "../models/assessment.model.js";
import { Student } from "../models/student.model.js";
import { Fellow } from "../models/fellow.model.js";
// import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
const addAssessment = asyncHandler(async (req, res) => {
    const { listening, numeracy, speaking, literacy, reading } = req.body;
    const studentId = req.params.studentId; // student ID from URL parameter

    // Validate input
    if (![listening, numeracy, speaking, literacy, reading].every((field) => typeof field === 'number')) {
        throw new ApiError(400, "Listening, numeracy, speaking, literacy, and reading must be numbers");
    }

    // Check if the student exists
    const student = await Student.findById(studentId);
    if (!student) {
        throw new ApiError(404, "Student not found");
    }

    // Populate fellow field using student's fellow
    const fellowId = student.fellow;

    // Calculate total
    const total = listening + numeracy + speaking + literacy + reading;

    // Determine category based on total
    let category;
    if (total <= 10) {
        category = 'A';
    } else if (total <= 20) {
        category = 'B';
    } else if (total <= 35) {
        category = 'C';
    } else {
        category = 'D';
    }

    // Create assessment object
    const assessment = await Assessment.create({
        fellow: fellowId,
        student: studentId,
        listening,
        numeracy,
        speaking,
        literacy,
        reading,
        total,
    });

    if (!assessment) {
        throw new ApiError(500, "Failed to add assessment");
    }

    // Update the student's category based on the total score
    student.category = category;
    await student.save();

    return res.status(201).json(
        new ApiResponse(200, assessment, "Assessment added successfully")
    );
});

export {addAssessment};