import Footer from "./layouts/Footer";
import Home from "./pages/Home";
const App = () => {
  return (
    <>
      <div className="container vh-90">
        <div style={{ minHeight: "300px" }}>
          <Home />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
