import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "PROFESSOR_",
    })
    .then(() => {
      console.log("Connected to Database SuccessFully");
    })
    .catch((err) => {
      console.log(`Some error ocuured: ${err}`);
    });
};
