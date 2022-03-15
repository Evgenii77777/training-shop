import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutUsPages from "./pages/AboutUsPages";
import AccessuaresPage from "./pages/AccessoriesPage";
import BeautyPage from "./pages/BeautyPage";
import BlogPage from "./pages/BlogPage";
import ContactsPage from "./pages/ContactsPage";
import HomePage from "./pages/HomePage";
import MenPage from "./pages/MenPage";
import ProductPage from "./pages/ProductPage";
import WomenPage from "./pages/WomenPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div data-test-id="app">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPages />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/beauty" element={<BeautyPage />} />
          <Route path="/accessories" element={<AccessuaresPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/women/:id" element={<ProductPage />} />
          <Route path="/men/:id" element={<ProductPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
