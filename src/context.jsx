import { createContext, useContext, useEffect } from "react";
import useFetch from "./hooks/use-fetch";
import { getCurrentUser } from "./db/apiAuth";

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
  // Getting the details from the getCurrentUser
  const { data: user, loading, fn: fetchUser } = useFetch(getCurrentUser);

  const isAuthenticated = user?.role === "authenticated";

  useEffect(() => {
    fetchUser();
  }, [])

  return (
  // Passing all the values so that we can use them whereever we want
  <UrlContext.Provider value={{ user, fetchUser, loading, isAuthenticated }}>
    {children}
  </UrlContext.Provider>);
};


export const UrlState = () => {
  return useContext(UrlContext);
}

export default UrlProvider;