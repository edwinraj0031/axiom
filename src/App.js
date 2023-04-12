import { HashRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
