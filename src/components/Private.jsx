import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function Private({ children }) {
//   const { user } = useUserContext();
  const user = useSelector(state => state.user);
  if (user.isUserAvailable === true ) return children;
  return <Navigate to="/" replace={true} />;
}

export default Private;  