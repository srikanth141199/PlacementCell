import { Student } from "../models/studentSchema.js";

// render home page
export const homePage = async function (req, res) {
  const students = await Student.find({});
  return res.render('home', { students });
};
