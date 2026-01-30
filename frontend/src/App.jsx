import ActionButton from "./ActionButton";
import CreatePage from "./CreatePage";
import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import VisaDetail from "./VisaDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="parent-action">
                <ActionButton type="Create New" />
              </div>
              <VisaDetail />
            </>
          }
        ></Route>
        <Route path="/create" element={<CreatePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
