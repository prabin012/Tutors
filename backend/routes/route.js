import express from "express";
import { Login, Register, TeacherLogin, TeacherReg } from "../controller/auth.js";

const route = express();

route.post('/user/register', Register);
route.post('/user/teacher', TeacherReg);
route.post('/user/login', Login);
route.post('/user/teacherlogin', TeacherLogin);


export default route