import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";



function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <About /> */}
      <Quiz />
    </Layout>
  );
}

export default App;
