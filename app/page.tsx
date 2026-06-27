// Name: Heer Kacchia
// Date: 26,June 2026
// Description: Main page for New Generation High School Student Portal.This file connects all components together and manages the student list.

"use client";
 
// useState lets us store data that updates the screen when it changes
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import StudentList from "../components/StudentList";
import AddStudentForm from "../components/AddStudentForm"; 
import initialStudents from "../data/students.json";
import { validateStudentData } from "../utils/validation";
 
export default function Home() {
  const [students, setStudents] = useState(initialStudents);
  const [errors, setErrors] = useState({});
 
  // This function runs when the user clicks "Add Student"
  function handleAddStudent(event) {
  // Stop the page from refreshing (default form behaviour)
    event.preventDefault();
    // Read each field value from the form using its "name" attribute
    const form = event.target;
    const newStudent = {

      firstName: form.firstName.value,
      lastName:  form.lastName.value,
      dob:       form.dob.value,
      grade:     form.grade.value,
    };
 
    // Run Person A's validation to check if the data is correct
    const result = validateStudentData(newStudent);
 
    // If there are errors, show them and stop here — don't add the student
    if (!result.isValid) {

      setErrors(result.errors);
      return;
    }
 
    // No errors — clear old error messages
    setErrors({});
 
    // Add the new student to the list
    const [students, setStudents] = useState<Student[]>(initialStudents as Student[]);
 
    // Clear the form fields after a successful submission
    form.reset();
  }
 
  // What gets displayed on the screen
  return (
<main>
 
      {/* Top navigation bar */}
<Navbar />
 
      {/* Main content area — centred with a max width */}
<div style={styles.container}>
 
        {/* Show all students — we pass the students array down as a prop */}
<StudentList students={students} />
 
        {/* Show the add-student form — we pass the submit handler and errors as props */}
<AddStudentForm onSubmit={handleAddStudent} errors={errors} />
 
      </div>

      {/* Bottom footer */}
<Footer />
    </main>
  );
}
 
// Basic layout styles

const styles = {
  container: {
    maxWidth: "800px", 
    margin: "0 auto",   
    padding: "20px",

  },

};
 
