// This For Protecting routes basically when the user is not logged in 
// he or see should not be able to access other pages like dashboard or anyother page

import { useNavigate } from "react-router-dom";
import { UrlState } from "../context";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

function RequireAuth({children}) {
  const navigate = useNavigate();

  const{loading, isAuthenticated} = UrlState();

  useEffect(() => {
    if (!isAuthenticated && loading===false) {
      navigate('/auth');
    }
  }, [isAuthenticated, loading])

  if(loading){
    return (
      <BarLoader width={"100%"} color="#3b82f6" />
    )
  }

  if(isAuthenticated) {
    return children;
  }
}

export default RequireAuth;