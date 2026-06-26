export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2024 New Generation High School</p>
      <p>123 Learning Ave, Calgary, AB</p>
    </footer>
  );
}

const styles = {
  footer: {
    marginTop: "40px",
    padding: "20px",
    backgroundColor: "#1E3A8A",
    color: "white",
    textAlign: "center",
  },
};
