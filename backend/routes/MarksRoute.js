import express from "express";
import { receiveStudentMarks, sendStudentMarks } from "../controller/Marks.js";

const router = express.Router();

router.post("/send", sendStudentMarks);

router.get("/receive", receiveStudentMarks);

export default router;

// {
//     "Name": "alok",
//     "UID": "zxcvbnmklo",
//     "Section": "123",
//     "MarksOneSub": "90",
//     "MarksSecSub": "91",
//     "MarksThirSub": "92"
//   }
