import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export const useAuthRedirect = () => {
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

  const handleAuthAction = (callback?: () => void) => {
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      callback?.();
    }
  };

  return { handleAuthAction, isAuthenticated, user };
};