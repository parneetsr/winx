// Name: Heer Kacchia
// Date: 26 June, 2026
// Description: This component displays a form that allows the admin to add a new student.

export default function AddStudentForm({ onSubmit, errors }) {
  return (
<form style={styles.form} onSubmit={onSubmit}>
<h2>Add New Student</h2>
 
      {/* First Name */}
<input name="firstName" placeholder="First Name" style={styles.input} />
      {errors?.firstName && <p style={styles.error}>{errors.firstName}</p>}
 
      {/* Last Name */}
<input name="lastName" placeholder="Last Name" style={styles.input} />
      {errors?.lastName && <p style={styles.error}>{errors.lastName}</p>}
 
      {/* Date of Birth */}
<input name="dob" placeholder="Date of Birth (YYYY-MM-DD)" style={styles.input} />
      {errors?.dob && <p style={styles.error}>{errors.dob}</p>}
 
      {/* Grade */}
<input name="grade" placeholder="Grade (1-12)" style={styles.input} />
      {errors?.grade && <p style={styles.error}>{errors.grade}</p>}
       <button type="submit" style={styles.button}>Add Student</button>
</form>
  );
}
 
const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #aaa",
    fontSize: "14px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#1E3A8A",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  error: {
    color: "red",
    fontSize: "13px",
    margin: "0",
  },
};



