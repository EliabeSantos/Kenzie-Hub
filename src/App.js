import Routes from "./routes";
import Header from "./components/shared/header";
import Footer from "./components/shared/footer";

function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes />
        <Footer />
      </main>
    </div>
  );
}
export default App;
