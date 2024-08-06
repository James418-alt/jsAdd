import { model, models, Schema } from "mongoose";
import { iDataData } from "../interface";

const questionModel = new Schema<iDataData>(
  {
    instruction: { type: String, required: true },
    answer: { type: String, required: true },
    output: { type: String, required: true },
    example: { type: String, required: true },
    question: { type: String, required: true },
    url: { type: String, required: true },
    tag: { type: [], required: true },
    usecase: { type: [], required: true },
  },
  { timestamps: true }
);

const myQModel =
  models.questions || model<iDataData>("questions", questionModel);

export default myQModel;
