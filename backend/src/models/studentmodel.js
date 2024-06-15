import mongoose,{Schema} from "mongoose";

const studentSchema = new Schema(
    {
        studentName: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        marks: {
            
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        coverImage: {
            type: String, // cloudinary url
        },
    },
    {
        timestamps: true
    }
)