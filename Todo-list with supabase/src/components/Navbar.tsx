import ProfilePage from './HomeNav';

function Navbar() {
  return (
    <header className="py-3 px-4">
      <nav className="max-w-3xl mx-auto flex items-center justify-between">
        <h3>Todox</h3>
        <ProfilePage />
      </nav>
    </header>
  );
}

export default Navbar;
