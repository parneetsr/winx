//Ayotomiwa Bakare
import StudentCard from "./StudentCard";
 
type Student = {
  firstName: string;
  lastName: string;
  dob: string;
  grade: string;
};
 
export default function StudentList({ students }: { students: Student[] }) {
  return (
    <div>
      <h2>Student List</h2>
      {students.map((s, index) => (
        <StudentCard key={index} student={s} />
      ))}
    </div>
  );
}
