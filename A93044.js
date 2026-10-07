/*
    STUDENT GRADING SYSTEM

    Description:
    This program allows a user to enter the names and marks
    of students. It calculates the grade for each student,
    determines whether the student passed or failed, and
    displays the results.

    How to run:
    1. Open the terminal.
    2. Navigate to the folder containing A93044.js.
    3. Run: node A93044.js

    How to use:
    Follow the instructions displayed in the terminal.
    Enter the number of students, then enter each student's
    name and marks.
*/


const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Function 1: Calculate the grade
function calculateGrade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "F";
    }
}


// Function 2: Determine whether the student passed
function checkResult(marks) {
    if (marks >= 50) {
        return "PASS";
    } else {
        return "FAIL";
    }
}


// Function 3: Display a student's result
function displayResult(name, marks) {
    let grade = calculateGrade(marks);
    let result = checkResult(marks);

    console.log("\n------------------------------");
    console.log("Student: " + name);
    console.log("Marks: " + marks);
    console.log("Grade: " + grade);
    console.log("Result: " + result);
    console.log("------------------------------");
}


// Get the number of students
rl.question("Enter the number of students: ", function(numberOfStudents) {

    numberOfStudents = Number(numberOfStudents);

    let count = 0;


    // Loop through each student
    function enterStudent() {

        if (count < numberOfStudents) {

            rl.question("\nEnter student name: ", function(name) {

                rl.question("Enter marks for " + name + ": ", function(markInput) {

                    let marks = Number(markInput);

                    displayResult(name, marks);

                    count++;

                    enterStudent();
                });
            });

        } else {

            console.log("\n================================");
            console.log("     STUDENT GRADING SYSTEM");
            console.log("       PROCESS COMPLETED");
            console.log("================================");

            rl.close();
        }
    }


    enterStudent();

});