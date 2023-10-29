import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function AdminPage({ children }) {
  const user = useSelector(state => state.user.userInfo);
  if (user.type === "Admin" ) return children;
  return <Navigate to="/" replace={true} />;
}

export default AdminPage;  