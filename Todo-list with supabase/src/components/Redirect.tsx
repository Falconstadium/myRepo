import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuthStore } from '../store/supabase';

const RedirectIfAuthenticated = ({ children }: any) => {
  const { user } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    // If the user exists and the component is mounted,
    // navigate away from this route.
    if (user) {
      navigate('/', { replace: true });
    }
  }, [user, navigate]);

  return <>{children}</>;
};

export default RedirectIfAuthenticated;
