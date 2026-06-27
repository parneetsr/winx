"use client";
 
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StudentList from "@/components/StudentList";
import AddStudentForm from "@/components/AddStudentForm";
import studentsData from "@/data/students.json";
 
type Student = {
  firstName: string;
  lastName: string;
  dob: string;
  grade: string;
};
 
export default function Page() {
 // Force TypeScript to map the initial JSON to your expected type array
const [students, setStudents] = useState<Student[]>(studentsData as unknown as Student[]);
 
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    const form = new FormData(e.currentTarget);
 
    const newStudent: Student = {
      firstName: form.get("firstName") as string,
      lastName: form.get("lastName") as string,
      dob: form.get("dob") as string,
      grade: form.get("grade") as string,
    };
 
    if (!newStudent.firstName || !newStudent.lastName || !newStudent.dob || !newStudent.grade) {
      alert("Please fill in all fields.");
      return;
    }
 
    setStudents([...students, newStudent]);
    e.currentTarget.reset();
  };
}
