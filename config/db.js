import mongoose from "mongoose";

// Connect to MongoDB using mongoose.connect for simplicity
const connectDatabase = async (database = "mongodb://localhost:27017/express-mongo-post-management") => {
  console.log("database", "database", database);
    let result = await mongoose.connect(database)
        .then((res) => {
          console.log("res")
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.error("Database connection failed:", err.message);
            // process.exit(1);  // Exit the application if DB connection fails
        });
        // console.log(object.keys(result), result);
        return result;

};


export default connectDatabase;
