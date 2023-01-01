import GradeController from "./grade/controller.js";

GradeController.createStudent("John Doe").then((student) => {
  console.log(student);
});
