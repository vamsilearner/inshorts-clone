import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import NewsPage from "./components/NewsPage/NewsPage";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
