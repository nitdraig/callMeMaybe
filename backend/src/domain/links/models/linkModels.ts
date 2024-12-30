import mongoose, { Schema, Document } from "mongoose";

export interface ILink extends Document {
  userId: string;
  url: string;
  createdAt: Date;
}

const LinkSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

LinkSchema.index({ userId: 1 });

const LinkModel = mongoose.model<ILink>("Link", LinkSchema);

export default LinkModel;
