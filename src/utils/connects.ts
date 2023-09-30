import mongoose from "mongoose";
import config from "config";

async function connect() {
  try {
    await mongoose.connect(<string>config.get<number>("dbUri"));
    console.log("DB connected");
  } catch (error) {
    console.log("Could not connect to db");
    process.exit(1);
  }
}

export default connect;
