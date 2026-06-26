import StudentCard from "./StudentCard";

export default function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>
      {students.map((s, index) => (
        <StudentCard key={index} student={s} />
      ))}
    </div>
  );
}
