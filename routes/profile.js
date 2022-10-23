const express = require("express")
const {User} = require("../models/User")
const auth = require("../middlewares/auth")
const _ = require("lodash")

const router = express.Router()

router.get("/", auth, async (req,res)=>{
    try{
        const user = await User.findById(req.payload._id)
        if (!user) return res.status(400).send("error is profile")
        res.status(200).send(_.pick(user,["_id","name","email","biz"]))
    }catch (error){
        res.status(400).send("error in get profile")
    }
})



module.exports = router;