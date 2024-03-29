import { Divider, Heading } from "@chakra-ui/react";
import { useContext, useEffect, useRef } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AuthChecker from "./components/AuthChecker";
import NavBar from "./components/NavBar";
import Redirect from "./components/Redirect";
import { Auth } from "./data/auth";
import NotFound from "./pages/404";

import Home from "./pages/Home";
import LoggedinHome from "./pages/LoggedinHome";
import { Login } from "./pages/Login";
import { NotAuthorized } from "./pages/NotAuthorized";
import { Query } from "./pages/Query";
import { SignUp } from "./pages/SignUp";
import { getBearerToken } from "./services/auth";
import "./App.css";
import TherapistBlogs from "./pages/therapist/Blogs";
import BlogForm from "./pages/therapist/BlogForm";

function App() {
  const { setAuth } = useContext(Auth);
  const [loading, setLoading] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    let token = getBearerToken();

    if (token) {
      setAuth(true);
      setLoading(false);
    } else {
      setAuth(false);
      setLoading(false);
    }
  }, [setAuth]);
  if (loading) {
    return <Heading>Loading...</Heading>;
  }
  return (
    <div className="App">
      <NavBar ref={ref}></NavBar>
      <Divider />

      <Routes>
        <Route
          path="/"
          element={
            <Redirect>
              <Home ref={ref} />
            </Redirect>
          }
        ></Route>
        {/* protected routes */}

        <Route
          path="/home"
          element={
            <AuthChecker>
              <LoggedinHome />
            </AuthChecker>
          }
        ></Route>
        <Route
          path="/blogs"
          element={
            <AuthChecker>
              <TherapistBlogs />
            </AuthChecker>
          }
        />
        <Route
          path="/blogs/add"
          element={
            <AuthChecker>
              <BlogForm />
            </AuthChecker>
          }
        />

        <Route path="/notAuthorized" element={<NotAuthorized />}></Route>
        {/*  */}
        <Route
          path="/login"
          element={
            <Redirect>
              <Login />
            </Redirect>
          }
        ></Route>
        <Route
          path="/signup"
          element={
            <Redirect>
              <SignUp />
            </Redirect>
          }
        ></Route>
        <Route
          path="/query"
          element={
            <Redirect>
              <Query />
            </Redirect>
          }
        ></Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
