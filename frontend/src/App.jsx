import ActionButton from "./components/ActionButton";
import CreatePage from "./pages/CreatePage";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import VisaDetail from "./components/VisaDetail";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create" element={<CreatePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
