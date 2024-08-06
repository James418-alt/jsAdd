import { clear } from "console";
import { connect } from "mongoose";

export const dbConfig = async () => {
  const url = process.env.LIVE_URL as string;
  await connect(url).then(() => {
    clear();
    console.log("Serevr Up!");
  });
};
