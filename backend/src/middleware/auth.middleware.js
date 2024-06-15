import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { Admin } from "../models/admin.model.js";
import { Fellow } from "../models/fellow.model.js";

export const verifyFellowJWT = asyncHandler(async (req, _, next) => {
  try {
    const accessToken =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!accessToken) {
      throw new ApiError(401, "Unauthorized Request");
    }

    const decodedToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );

    const fellow = await Fellow.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!fellow) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.fellow = fellow;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Access Token");
  }
});

export const verifyAdminJWT = asyncHandler(async (req, _, next) => {
  try {
    const accessToken =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer ", "");

    if (!accessToken) {
      throw new ApiError(401, "Unauthorized Request");
    }

    const decodedToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );

    const admin = await Admin.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );

    if (!admin) {
      throw new ApiError(401, "Invalid Access Token");
    }

    req.admin = admin;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid Access Token");
  }
});