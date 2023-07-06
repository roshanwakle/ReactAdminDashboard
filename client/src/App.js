import { BrowserRouter, Routes, Route } from "react-router-dom";
import { List } from "./Pages/lists/List";
import { Home } from "./Pages/home/HomePage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/hotels" index element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
