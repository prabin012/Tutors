import { Teacher } from "../model/teacher.js";
import { User } from "../model/user.js";
import bcrypt from 'bcrypt'

// Register function
export const Register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const isUser = await User.findOne({ email });
        if (isUser) {
            return res.status(404).json({
                success: false,
                message: "User already exists...."
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashpashword = await bcrypt.hash(password, salt)
        await User.create({
            name: name,
            email: email,
            password: hashpashword,
        });
        res.status(201).json({
            message: "Register Successfully..",
            success: true,
            User,
        })
    } catch (error) {
        console.log("error", error)
    }
}

// Login function
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        // const users = await Teacher.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user cannot find !"
            })
        }
        const userpassword = await bcrypt.compare(password, user.password);
        if (!userpassword) {
            return res.status(401).json({
                success: false,
                message: "password dosn't match !"
            })
        }
        res.status(201).json({
            success: true,
            message: "successfull Login..",
            user
        })
    } catch (error) {
        console.log("error", error);
    }
}


//Teacher rigister

export const TeacherReg = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const isTeacher = await Teacher.findOne({ email });
        if (isTeacher) {
            return res.status(404).json({
                success: false,
                message: "Teacher already exists...."
            })
        }
        const salt = await bcrypt.genSalt(10)
        const hashpashword = await bcrypt.hash(password, salt)
        await Teacher.create({
            name: name,
            email: email,
            password:hashpashword,
        });
        res.status(201).json({
            message: "Register Successfully..",
            success: true,
           
        })
    } catch (error) {
        console.log("error", error)
    }
}

//TeacherLogin
export const TeacherLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Teacher.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "user cannot find !"
            })
        }
        const userpassword = await bcrypt.compare(password, user.password);
        if (!userpassword) {
            return res.status(401).json({
                success: false,
                message: "password dosn't match !"
            })
        }
        res.status(201).json({
            success: true,
            message: "successfull Login..",
            user
        })
    } catch (error) {
        console.log("error", error);
    }
}