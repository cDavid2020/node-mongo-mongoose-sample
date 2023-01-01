import GradeController from "./grade/controller.js";

GradeController.createStudent("John Doe")
  .then((student) => {
    GradeController.addScore(student._id, {
      type: "HW",
      name: "HW 1",
      earned: 15,
      possible: 15,
    });
  })
  .then(() => {
    console.log("Done");
  })
  .catch((err) => {
    console.error(err.message);
  });
