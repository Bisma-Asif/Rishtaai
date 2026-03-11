import { createBrowserRouter } from "react-router";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import AIMatches from "./pages/AIMatches";
import Chat from "./pages/Chat";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Landing,
  },
  {
    path: "/signup",
    Component: SignUp,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    path: "/profile",
    Component: Profile,
  },
  {
    path: "/explore",
    Component: Explore,
  },
  {
    path: "/ai-matches",
    Component: AIMatches,
  },
  {
    path: "/chat",
    Component: Chat,
  },
  {
    path: "/settings",
    Component: Settings,
  },
]);
