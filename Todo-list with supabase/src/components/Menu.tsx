import { Link, useNavigate } from 'react-router';
import { useAuthStore } from '../store/supabase';

function Menu() {
  const { signOut } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/sign');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="absolute top-12 right-0 lg:-right-6 mx-auto animate-fade bg-neutral-400 text-neutral-900 grid gap-1 place-items-center py-2 rounded w-36 h-auto">
      <Link
        to={'/profile'}
        className="flex items-center justify-center gap-1 hover:bg-neutral-200 w-full py-0.5 cursor-pointer transition-colors duration-300">
        <span className="text-sm font-medium">Profile</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-circle-user-icon lucide-circle-user">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="10" r="3" />
          <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" />
        </svg>
      </Link>
      <button
        type="button"
        onClick={handleSignOut}
        className=" flex items-center justify-center gap-1 capitalize text-nowrap font-medium text-sm hover:bg-neutral-200 text-red-700 w-full py-0.5 cursor-pointer transition-colors duration-300">
        sign out
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-log-out-icon lucide-log-out">
          <path d="m16 17 5-5-5-5" />
          <path d="M21 12H9" />
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
        </svg>
      </button>
    </div>
  );
}

export default Menu;
