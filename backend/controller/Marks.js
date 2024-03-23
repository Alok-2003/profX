import ErrorHandler from "../error/error.js";
import StudentMarks from "../models/MarksSchema.js";

export const sendStudentMarks = async (req, res, next) => {
  const { Name, UID, Section, MarksOneSub, MarksSecSub, MarksThirSub } =
    req.body;
  if (
    !Name ||
    !UID ||
    !Section ||
    !MarksOneSub ||
    !MarksSecSub ||
    !MarksThirSub
  ) {
    return next(new ErrorHandler("Please fill full details of student!", 400));
  }
  try {
    await StudentMarks.create({
      // Pass an object containing the fields
      Name,
      UID,
      Section,
      MarksOneSub,
      MarksSecSub,
      MarksThirSub,
    });
    res.status(200).json({
      success: true,
      message: "Student data saved in database Successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(","), 400));
    }
    return next(error);
  }
};
export const receiveStudentMarks = async (req, res, next) => {
  try {
    const data = await StudentMarks.find();
    res.status(200).json(data);
  } catch (error) {
    return next(error);
  }
};
