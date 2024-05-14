
const express = require("express");
const { ConnectionStates } = require("mongoose");
const router = express.Router();
const User = require("../models/User");

// POST /api/users dodawanie użytkownika do bazy - rejestracja
router.post("/", async (req, res) => {
    const newUser = new User(req.body);
    try {
        const user = await newUser.save();
        if (!user) throw new Error("Something went wrong saving the Todo");
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            error: "An error occurred while fetching products",
        });
    }
});
router.get('/:userName/caloricDemand',async (req,res)=>{
    const userName = req.params.userName;

    try {
        const user = await User.findOne({userName});

        if(!user){
            return res.status(404).json({error: "user not found"})
        }

       return res.json({caloricDemand:user.caloricDemand})
    }catch(err){
        res.status(500);
    }
})
router.patch('/:userName',async (req,res)=>{
    const userName = req.params.userName;
    const {caloricDemand} = req.body;

    try{
       const updatedUser = await User.findOneAndUpdate({userName},{caloricDemand},{new: true})

       if(!updatedUser){
        return res.status(404).json({error:"User not found"})
       }

       return res.status(200).json(updatedUser)

    }catch(err){

        res.status(505).json({error:"Server error"})
    }

})

module.exports = router;
