import AboutUsPages from "../pages/AboutUsPages";
import AccessuaresPage from "../pages/AccessoriesPage";
import BeautyPage from "../pages/BeautyPage";
import BlogPage from "../pages/BlogPage";
import ContactsPage from "../pages/ContactsPage";
import MenPage from "../pages/MenPage";
import WomenPage from "../pages/WomenPage";

export const mainRoutes = [
  {
    id: 1,
    name: "About Us",
    path: "about",
    exact: "exact",
    component: <AboutUsPages />,
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
    name: "Men",
    path: "men",
    exact: "exact",
    component: <MenPage />,
  },
  {
    id: 4,
    name: "Beauty",
    path: "beauty",
    exact: "exact",
    component: <BeautyPage />,
  },
  {
    id: 5,
    name: "Accessories",
    path: "accessories",
    exact: "exact",
    component: <AccessuaresPage />,
  },
  {
    id: 6,
    name: "Blog",
    path: "blog",
    exact: "exact",
    component: <BlogPage />,
  },
  {
    id: 7,
    name: "Contacts",
    path: "contacts",
    exact: "exact",
    component: <ContactsPage />,
  },
];
export default mainRoutes;
