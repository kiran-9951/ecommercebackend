
const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Signup = async (req, res) => {
    try {

        const { username, email, password } = req.body
        if (!username || !email || !password) {
            return res.status(404).json({ message: "please provide all details" })
        }

        const existuser = await Users.findOne({ email: email })

        if (existuser) {
            return res.status(401).json({ message: "user alredy exist" })
        }
        const hashpassword = await bcrypt.hash(password, 12)
        console.log(hashpassword)

        const user = new Users({
            username: username,
            email: email,
            password: hashpassword
        })

        await user.save()
        res.status(201).json({ message: "signuped successfully", status: "success", user: user })


    }
    catch (error) {
        console.log("catch error ", error)
        res.status(505).json({ message: "internal server error" })

    }
}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(404).json({ message: "please provide all details" })
        }

        const user = await Users.findOne({ email: email })
        if (!user) {
            return res.status(401).json({ message: "wrong credentials" })
        }

        const ismatch = await bcrypt.compare(req.body.password, user.password);
        if (!ismatch) {
            return res.status(401).json({ message: "wrong credentials" });
        }

        const accessToken = jwt.sign({
            id: user.id,
            username:user.username,
            isAdmin: user.isAdmin
        }, "secretKey123", { expiresIn: "100d" })

        res.status(201).json({ message: "loggedin successfully ",token:accessToken, status: "success", user: user })

    }
    catch (error) {
        console.log("catch errror: ", error)
        res.status(505).json({ message: "internal server error", error: error })
    }
}

module.exports = { Signup, Login }
