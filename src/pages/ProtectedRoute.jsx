// React
import { useEffect } from 'react';

// React router
import { useNavigate } from 'react-router-dom';

// Hooks
import { useFakeAuth } from '../context/FakeAuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useFakeAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
}
