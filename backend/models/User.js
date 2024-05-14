const { Schema, model } = require("mongoose");
const { UsersActivitiesSchema } = require("./UsersActivities");
const { UsersMealsSchema } = require("./UsersMeals");

const userSchema = new Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    activities: [UsersActivitiesSchema],
    meals: [UsersMealsSchema],
    caloricDemand: {
        type: Number,
        required:true,
    }
});

const User = model("user", userSchema);

module.exports = User;
