export function Nav() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5"
      style={{ borderBottom: '1px solid var(--border)' }}
    >
      <span className="type-label" style={{ color: 'var(--indigo-deep)' }}>
        JTAH Foundation
      </span>
      <nav aria-label="Primary" />
    </header>
  );
}
