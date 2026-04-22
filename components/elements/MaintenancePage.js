export default function MaintenancePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "#0b162b",
        color: "#ffffff",
      }}
    >
      <div style={{ maxWidth: "640px", textAlign: "center" }}>
        <h1 style={{ marginBottom: "12px" }}>Something went wrong</h1>
        <p style={{ marginBottom: "8px", opacity: 0.9 }}>
          Our info service is currently unavailable.
        </p>
        <p style={{ margin: 0, opacity: 0.75 }}>
          The site is temporarily down for maintenance. Please try again later.
        </p>
      </div>
    </main>
  );
}
