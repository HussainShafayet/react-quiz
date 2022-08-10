import "../styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";



function App() {
  return (
    <Layout>
      <Home />
      <About />
    </Layout>
  );
}

export default App;
