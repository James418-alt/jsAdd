import { Document } from "mongoose";

interface iData {
  instruction: string;
  answer: string;
  output: string;
  example: string;
  question: string;
  url: string;
  tag: string[];
  usecase: string[];
}
export interface iDataData extends iData, Document {}
