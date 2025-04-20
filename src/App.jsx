import { createContext, useContext, useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/footer/Footer";
import Navber from "./components/navber/navber";
import Router from "./routes/router";
import { api } from "./db/api";
import Loading from "./components/loading/loading";

const AuthContext = createContext();

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [profData, setProfData] = useState({});

  const checkAuth = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${api}/authorizeDonor`, {
        method: "GET",
        credentials: "include", // Important for httpOnly cookies
      });

      const data = await res.json();
      setIsAuth(data.auth); // Should be true or false
    } catch (error) {
      console.error("Authorization error:", error);
      setIsAuth(false); // Fallback if error
    } finally {
      setIsLoading(false);
    }
  };

  const profileGet = async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${api}/donor/profile`, {
        method: "GET",
        credentials: "include", // Important for httpOnly cookies
      });

      const data = await res.json();
      setProfData(data.donor); // Should be true or false
    } catch (error) {
      console.error("Authorization error:", error);
      setIsAuth(false); // Fallback if error
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    profileGet();
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuth, profData }}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Navber />
          <Router />
          <Footer />
        </>
      )}
    </AuthContext.Provider>
  );
}

// Hook to use Auth anywhere
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("ServerError");
  }
  return context;
};

export default App;
