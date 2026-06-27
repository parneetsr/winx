//Ayotomiwa Bakare
type Student = {
  firstName: string;
  lastName: string;
  dob: string;
  grade: string;
};
 
export default function StudentCard({ student }: { student: Student }) {
  return (
    <div style={styles.card}>
      <h3>{student.firstName} {student.lastName}</h3>
      <p><strong>Date of Birth:</strong> {student.dob}</p>
      <p><strong>Grade:</strong> {student.grade}</p>
    </div>
  );
}
 
const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "10px",
    backgroundColor: "#f9f9f9",
  },
};
