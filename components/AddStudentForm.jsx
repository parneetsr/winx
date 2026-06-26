export default function AddStudentForm({ onSubmit }) {
  return (
    <form style={styles.form} onSubmit={onSubmit}>
      <h2>Add New Student</h2>

      <input name="firstName" placeholder="First Name" style={styles.input} />
      <input name="lastName" placeholder="Last Name" style={styles.input} />
      <input name="dob" placeholder="Date of Birth (YYYY-MM-DD)" style={styles.input} />
      <input name="grade" placeholder="Grade" style={styles.input} />

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
  },
  button: {
    padding: "10px",
    backgroundColor: "#1E3A8A",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
