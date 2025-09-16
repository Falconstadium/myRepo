import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthStore } from '../store/supabase';
import Loading from './Loading';

function ProfilePage() {
  const { user, loading, fetchUserSession } = useAuthStore();
  const navigate = useNavigate();

  const handleProfileLink = () => {
    navigate('/profile');
  };

  useEffect(() => {
    fetchUserSession();
  }, [fetchUserSession]);

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return (
      <div className="relative">
        <button type="button" onClick={handleProfileLink}>
          {user.user_metadata.avatar_url ? (
            <img
              src={user.user_metadata.avatar_url}
              alt="profile-pic"
              className="size-8 rounded-full"
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-user-round-icon lucide-user-round">
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
          )}
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>Please sign in to view your profile.</p>
    </div>
  );
}

export default ProfilePage;
