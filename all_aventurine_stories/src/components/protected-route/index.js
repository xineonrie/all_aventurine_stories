import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import authService from '../../utils/authService';

const ProtectedRoute = ({ element: Component }) => {
  let location = useLocation();

  return authService.getAuth() ? (
    <Component />
  ) : (
    <Navigate to="/error-game" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
