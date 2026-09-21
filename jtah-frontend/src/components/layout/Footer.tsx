export function Footer() {
  return (
    <footer
      className="px-6 py-8"
      style={{ borderTop: '1px solid var(--border)' }}
    >
      <p className="type-caption">
        &copy; {new Date().getFullYear()} JTAH Foundation
      </p>
    </footer>
  );
}
