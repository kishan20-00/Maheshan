import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/addUser";
import ViewUsers from "./pages/ViewUser";
import AddCloth from "./pages/addClothes";
import ViewClothes from "./pages/AllClothes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          
      <Route path="/" element={<Register />} />
      <Route path="/viewuser" element={<ViewUsers />} />
      <Route path="/addcloth" element={<AddCloth />} />
      <Route path="/viewcloth" element={<ViewClothes />} />

      </Routes>
      </BrowserRouter>
  );
}

export default App;
