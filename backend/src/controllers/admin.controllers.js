import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { Admin } from "../models/admin.model.js";
import { Fellow } from "../models/fellow.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

const generateAccessAndRefreshTokens = async (adminId) => {
    try {
        const admin = await Admin.findById(adminId);
        const accessToken = admin.generateAccessToken();
        const refreshToken = admin.generateRefreshToken();

        admin.refreshToken = refreshToken;
        await admin.save({ validateBeforeSave: false });

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(
            500,
            "Something went wrong while generating refresh and access tokens"
        );
    }
};

const registerAdmin = asyncHandler(async (req, res) => {

    const { adminName, email, password } = req.body;

    if (
        [adminName, email, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All Fields are required");
    }

    const existingAdmin = await Admin.findOne({
        $or: [{ email }],
    });

    if (existingAdmin) {
        throw new ApiError(409, "Adming with email already exists");
    }

    const admin = await Admin.create({
        adminName,
        email,
        password,
    });

    // pass whatever you do not want
    const createdAdmin = await Admin.findById(admin._id).select(
        "-password -refreshToken"
    );

    if (!createdAdmin) {
        throw new ApiError(500, "Somerthing went wrong while registering the admin");
    }

    return res
        .status(201)
        .json(new ApiResponse(200, createdAdmin, "Admin registered successfully"));
});

const loginAdmin = asyncHandler(async (req, res) => {
    const { email, adminName, password } = req.body;
    if (!(email || adminName)) {
        throw new ApiError(400, "Email or Adminname required");
    }

    if (!password) {
        throw new ApiError(400, "Password is required");
    }

    const admin = await Admin.findOne({
        $or: [{ email }],
    });

    if (!admin) {
        throw new ApiError(409, "Admin does not exist");
    }

    // methods created by us on Admin schema our accesible on our object
    // and not on the mongodb Admin schema
    const isPasswordValid = await admin.isPasswordCorrect(password);
    if (!isPasswordValid) {
        throw new ApiError(401, "Invalid Admin Credentials");
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
        admin._id
    );

    // Admin.refreshToken = refreshToken;
    // choose to get new Admin or change the current object
    // whatever you seem fit based on performane
    const loggedInAdmin = await Admin.findById(admin._id).select(
        "-password -refreshToken"
    );

    // cookie options
    // httpOnly : makes the cookies only modifiable by the Admin
    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    admin: loggedInAdmin,
                    accessToken,
                    refreshToken,
                },
                "Admin logged In Succesfully"
            )
        );
});

const logoutAdmin = asyncHandler(async (req, res) => {
    await Admin.findByIdAndUpdate(
        req.admin._id,
        {
            $set: {
                refreshToken: undefined,
            },
        },
        {
            // this will ensure the response Admin returned is the updated Admin
            new: true,
        }
    );

    const options = {
        httpOnly: true,
        secure: true,
    };

    return res
        .status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "Admin Logged Out Succesfully"));
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken =
        req.cookies.refreshToken || req.body.refreshToken;

    if (!incomingRefreshToken) {
        throw new ApiError(401, "Unauthorized Request");
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        );

        const admin = await Admin.findById(decodedToken?._id);

        if (!admin) {
            throw new ApiError(401, "Invalid Refresh Token");
        }

        if (incomingRefreshToken !== admin?.refreshToken) {
            throw new ApiError(401, "Refresh Token is expired or used");
        }

        const { accessToken, refreshToken } =
            await generateAccessAndRefreshTokens(admin._id);

        const options = {
            httpOnly: true,
            secure: true,
        };

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    {
                        accessToken,
                        refreshToken,
                    },
                    "Access Token Refreshed successfully"
                )
            );
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token");
    }
});

const getAllFellows = asyncHandler(async (req, res) => {
    // Retrieve all fellows from the database
    const fellows = await Fellow.find().select('-password -refreshToken'); // Exclude sensitive fields

    if (!fellows || fellows.length === 0) {
        throw new ApiError(404, "No fellows found");
    }

    return res.status(200).json(
        new ApiResponse(200, fellows, "Fellows retrieved successfully")
    );
});

const getTotalNumberOfStudents = asyncHandler(async (req, res) => {
    // Retrieve the total number of students from the database
    const totalStudents = await Student.countDocuments();

    return res.status(200).json(
        new ApiResponse(200, { totalStudents }, "Total number of students retrieved successfully")
    );
});

const getStudentsCountByCategory = asyncHandler(async (req, res) => {
    // Aggregation pipeline to group students by category and count them
    const categoryCounts = await Student.aggregate([
        {
            $group: {
                _id: "$category",
                count: { $sum: 1 }
            }
        }
    ]);

    const formattedCounts = categoryCounts.reduce((acc, category) => {
        acc[category._id] = category.count;
        return acc;
    }, {});

    return res.status(200).json(
        new ApiResponse(200, formattedCounts, "Number of students by category retrieved successfully")
    );
});



export {
    registerAdmin,
    loginAdmin,
    logoutAdmin,
    refreshAccessToken,
    getAllFellows,
    getTotalNumberOfStudents,
    getStudentsCountByCategory,
};