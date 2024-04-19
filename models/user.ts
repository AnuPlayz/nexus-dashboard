import { Document, Schema, model } from "mongoose"

export interface IUser extends Document {
    email: string
}

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
}, { timestamps: true })

export default model<IUser>("User", UserSchema)