export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.title}>New Generation High School</h1>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    padding: "20px",
    backgroundColor: "#1E3A8A",
    color: "white",
    textAlign: "center",
  },
  title: {
    margin: 0,
    fontSize: "24px",
    fontWeight: "bold",
  },
};
