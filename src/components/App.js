import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";



function App() {
  return (
    <Layout>
      {/* <Home /> */}
      {/* <About /> */}
      <Quiz />
      <Result />
    </Layout>
  );
}

export default App;
