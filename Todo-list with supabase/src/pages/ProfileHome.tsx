import { useNavigate } from 'react-router';
import { useAuthStore } from '../store/supabase';

function ProfileHome() {
  const { user, signOut } = useAuthStore();
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
    <div className="min-h-dvh bg-neutral-950 text-neutral-100 text-sm grid place-content-center place-items-center gap-4 font-main">
      <p>{user?.user_metadata?.full_name}</p>
      <p>{user?.email}</p>
      <button
        type="button"
        onClick={handleSignOut}
        className=" flex items-center gap-1 capitalize text-nowrap font-medium text-sm bg-neutral-300 hover:bg-neutral-400 text-red-700 rounded py-2 px-2 cursor-pointer transition-colors duration-300">
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

export default ProfileHome;
