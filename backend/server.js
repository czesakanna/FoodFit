const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3010;

// Import Meals model and routes
const mealsRoutes = require("./routes/mealsRoutes"); // Adjust the path as needed
const ingredientsRoutes = require("./routes/ingredientRoutes");
const userRoutes = require("./routes/userRoutes");
const activitiesRoutes = require("./routes/activitiesRoutes");
const usersActivitiesRoutes = require("./routes/usersActivitiesRoutes");
const usersMealsRoutes = require("./routes/usersMealsRoutes");
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mount routes
app.use("/api/meals", mealsRoutes);
app.use("/api/ingredients", ingredientsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/activities", activitiesRoutes);
app.use("/api/user-activities", usersActivitiesRoutes);
app.use("/api/user-meals", usersMealsRoutes);

// Database connection
const CONNECTION_STRING =
    "mongodb+srv://admin:admin123@cluster0.lyyxbjg.mongodb.net/";
const DATABASENAME = "parameters";
mongoose.connect(CONNECTION_STRING + DATABASENAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.once("open", () => {
    console.log(`Database connected: ${CONNECTION_STRING}`);
});
db.on("error", (err) => {
    console.error(`Connection error: ${err}`);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});