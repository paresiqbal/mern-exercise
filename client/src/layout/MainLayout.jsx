// Rdd
import { Outlet } from "react-router-dom";

// Components
import Nav from "../components/Nav";

export default function MainLayout() {
  return (
    <div className="text-gray-800">
      <main>
        <Nav />
        <Outlet />
      </main>
    </div>
  );
}
