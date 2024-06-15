import mongoose, { Schema } from "mongoose";

const studentSchema = new Schema(
    {
        studentName: {
            type: String,
            required: true,
        },
        avatar: {
            type: String, // cloudinary url
        },
        fellow: {
            type: Schema.Types.ObjectId,
            ref: "Fellow",
        },
        isSlow: {
            type: Boolean,
            default: false,
        },
        category: {
            type: String,
            enum: ['A', 'B', 'C', 'D'],
        },
        class: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
        }
    },
    {
        timestamps: true
    }
)

export const Student = mongoose.model("Student", studentSchema);