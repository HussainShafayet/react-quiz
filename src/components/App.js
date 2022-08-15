import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";




function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
          <Route exact path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>}/>
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<Login />} />
          <Route exact path="/quiz" element={
          <PrivateRoute>
            <Quiz />
          </PrivateRoute>}/>
          <Route exact path="/result" element={
            <PrivateRoute>
              <Result />
            </PrivateRoute>} />
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
