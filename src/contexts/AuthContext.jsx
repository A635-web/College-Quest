import { createContext, useContext, useReducer } from "react";
import { useEffect } from "react";
import axios from "axios";
axios.defaults.withCredentials = true;
const BASE_URL ="https://college-quest-1.onrender.com/api/v1";
const AuthContext = createContext();
const initialState = {
  user: null,
  isAuthenticated: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { ...state, user: action.payload, isAuthenticated: true };
    case "logout":
      return { ...state, user: null, isAuthenticated: false };
    default:
      throw new Error("Unknown action");
  }
}

function AuthProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    reducer,
    initialState,
    (initial) => {
      const storedUser = localStorage.getItem("user");
      const storedIsAuthenticated =
        localStorage.getItem("isAuthenticated") === "true";
      return storedUser
        ? {
            user: JSON.parse(storedUser),
            isAuthenticated: storedIsAuthenticated,
          }
        : initial;
    }
  );

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("isAuthenticated", isAuthenticated.toString());
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("isAuthenticated");
    }
  }, [user, isAuthenticated]);

  const signup = async (values) => {
    try {
      const res = await axios({
        method: "POST",
        url: "https://college-quest-1.onrender.com/api/v1/user/signup",
        data: values,
        withCredentials: "true",
      });
      console.log(res.data);
      dispatch({ type: "login", payload: res.data.user });
      return res;
    } catch (err) {
      console.log(err.response);
    }
  };
  const login = async (values) => {
    const { email, password } = values;
    try {
      const res = await axios({
        method: "POST",
        url: `${BASE_URL}/user/signin`,
        data: {
          email,
          password,
        },
        withCredentials: "true",
      });
      dispatch({ type: "login", payload: res.data.user });
      return res;
    } catch (err) {
      console.log(err.response);
    }
  };
  const logout = async () => {
    try {
      const res = await axios({
        method: "GET",
        url: `${BASE_URL}/user/signout`,
        withCredentials: "true",
      });
      dispatch({ type: "logout" });
      return res;
    } catch (err) {
      console.log(err.response);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, signup }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined)
    throw new Error("AuthContext was used outside AuthProvider");

  return context;
}

export { AuthProvider, useAuth };
