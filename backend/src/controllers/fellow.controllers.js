import { asyncHandler } from "../utils/asyncHandler.js";
import {ApiError} from "../utils/ApiError.js";
import { Fellow } from "../models/fellow.model.js";
// import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";


const generateAccessAndRefereshTokens = async(fellowId) =>{
    try {
        const fellow = await Fellow.findById(fellowId)
        const accessToken = fellow.generateAccessToken()
        const refreshToken = fellow.generateRefreshToken()

        fellow.refreshToken = refreshToken
        await fellow.save({ validateBeforeSave: false })

        return {accessToken, refreshToken}


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerFellow = asyncHandler( async (req, res) => {
    // get fellow details from frontend
    // validation - not empty
    // check if fellow already exists: fellowName, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create fellow object - create entry in db
    // remove password and refresh token field from response
    // check for fellow creation
    // return res


    const {email, fellowName, password } = req.body
    //console.log("email: ", email);

    if (
        [email, fellowName, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    const existedfellow = await Fellow.findOne({
        $or: [{ email }]
    })

    if (existedfellow) {
        throw new ApiError(409, "fellow with email or fellowName already exists")
    }
    //console.log(req.files);

   

    const fellow = await Fellow.create({
        email, 
        password,
        fellowName
    })

    const createdfellow = await Fellow.findById(fellow._id).select(
        "-password -refreshToken"
    )

    if (!createdfellow) {
        throw new ApiError(500, "Something went wrong while registering the fellow")
    }

    return res.status(201).json(
        new ApiResponse(200, createdfellow, "fellow registered Successfully")
    )

} )

const loginFellow = asyncHandler(async (req, res) =>{
    // req body -> data
    // fellowName or email
    //find the fellow
    //password check
    //access and referesh token
    //send cookie

    const {email, fellowName, password} = req.body;
    console.log(email);

    if (!fellowName && !email) {
        throw new ApiError(400, "fellowName or email is required")
    }
    
    // Here is an alternative of above code based on logic discussed in video:
    // if (!(fellowName || email)) {
    //     throw new ApiError(400, "fellowName or email is required")
        
    // }

    const fellow = await Fellow.findOne({
        $or: [{email}]
    })

    if (!fellow) {
        throw new ApiError(404, "fellow does not exist")
    }

   const isPasswordValid = await fellow.isPasswordCorrect(password)

   if (!isPasswordValid) {
    throw new ApiError(401, "Invalid fellow credentials")
    }

   const {accessToken, refreshToken} = await generateAccessAndRefereshTokens(fellow._id)

    const loggedInFellow = await Fellow.findById(fellow._id).select("-password -refreshToken")

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(
            200, 
            {
                fellow: loggedInFellow, accessToken, refreshToken
            },
            "Fellow logged In Successfully"
        )
    )

})

const logoutFellow = asyncHandler(async(req, res) => {
    await Fellow.findByIdAndUpdate(
        req.fellow._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "Fellow logged Out"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const fellow = await Fellow.findById(decodedToken?._id)
    
        if (!fellow) {
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if (incomingRefreshToken !== fellow?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
            
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefereshTokens(fellow._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }

})

export {
    registerFellow,
    loginFellow,
    logoutFellow,
    refreshAccessToken,
}