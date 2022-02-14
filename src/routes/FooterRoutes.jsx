import AboutUsPages from "../pages/AboutUsPages";
import AccessuaresPage from "../pages/AccessoriesPage";
import BeautyPage from "../pages/BeautyPage";
import BlogPage from "../pages/BlogPage";
import ContactsPage from "../pages/ContactsPage";
import HomePage from "../pages/HomePage";
import MenPage from "../pages/MenPage";
import WomenPage from "../pages/WomenPage";

export const categories = [
  {
    id: 1,
    name: "Men",
    path: "men",
    exact: "exact",
    component: <MenPage />,
  },
  {
    id: 2,
    name: "Women",
    path: "women",
    exact: "exact",
    component: <WomenPage />,
  },
  {
    id: 3,
    name: "Accessories",
    path: "accessories",
    exact: "exact",
    component: <AccessuaresPage />,
  },
  {
    id: 4,
    name: "Beauty",
    path: "beauty",
    exact: "exact",
    component: <BeautyPage />,
  },
];

export const infornation = [
  {
    id: 1,
    name: "About Us",
    path: "about",
    exact: "exact",
    component: <AboutUsPages />,
  },
  {
    id: 2,
    name: "Contact Us",
    path: "contacts",
    exact: "exact",
    component: <ContactsPage />,
  },
  {
    id: 3,
    name: "Blog",
    path: "blog",
    exact: "exact",
    component: <BlogPage />,
  },
  {
    id: 4,
    name: "FAQs",
    path: "faqs",
    exact: "exact",
    component: <HomePage />,
  },
];
