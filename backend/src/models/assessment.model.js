import mongoose,{Schema} from "mongoose";

const assessmentSchema = new Schema(
    {
        fellow: {
            type: Schema.Types.ObjectId,
            ref: "Fellow",
            required: true
        },
        student: {
            type: Schema.Types.ObjectId,
            ref: "Student",
            required: true
        },
        assessmentDate: {
            type: Date,
            required: true
        },
        listening: {
            type: Number,
            default: 0
        },
        numeracy: {
            type: Number,
            default: 0
        },
        speaking: {
            type: Number,
            default: 0
        },
        literacy: {
            type: Number,
            default: 0
        },
        reading: {
            type: Number,
            default: 0
        },
        total: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

export const Assessment = mongoose.model("Assessment", assessmentSchema)