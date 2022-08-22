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
import PublicRoute from "./PublicRoute";




function App() {
  return (
    <Router>
      <AuthProvider>
      <Layout>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route path="/signup" element={<SignUp />} />
            <Route exact path="/login" element={<Login />}/>
          </Route>
          <Route exact path="/logout" element={<Login />} />
          <Route element={<PrivateRoute />} > 
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/quiz/:id" element={<Quiz />} />
            <Route exact path="/result/:id" element={<Result />} />
          </Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
