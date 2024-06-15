import mongoose,{Schema} from "mongoose";

const fellowSchema = new Schema(
    {
        fellowName: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        avatar: {
            type: String, // cloudinary url
            required: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required']
        },
        refreshToken: {
            type: String
        }
    }, 
    {
        timestamps: true
    }
)

export const Fellow = mongoose.model("Fellow", fellowSchema)