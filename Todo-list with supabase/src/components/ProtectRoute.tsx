import { useEffect } from 'react';
import { Navigate } from 'react-router';
import { useAuthStore } from '../store/supabase';
import Loading from './Loading';

function ProtectRoute({ children }: any) {
  const { fetchUserSession, user } = useAuthStore();
  useEffect(() => {
    fetchUserSession();
  }, [fetchUserSession]);

  if (user === undefined) {
    return <Loading />;
  }

  return <>{user ? <>{children}</> : <Navigate to="/sign" />}</>;
}

export default ProtectRoute;
