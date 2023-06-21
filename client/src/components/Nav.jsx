// Rrd
import { Link } from "react-router-dom";

// hooks
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

export default function Nav() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleLogout = () => {
    logout();
  };
  return (
    <nav className="flex p-6 shadow-md justify-between items-center">
      <Link to={"/"} className="font-bold text-xl">
        Workout
      </Link>
      <section className="flex gap-4">
        {!user && (
          <div className="flex items-center gap-4">
            <Link
              to={"/signup"}
              className="text-white bg-teal-500 py-2 px-4 rounded-md active:bg-teal-600"
            >
              Sign Up
            </Link>
            <Link to={"/login"} className="font-bold">
              Login
            </Link>
          </div>
        )}
        {user && (
          <div className="flex gap-4">
            <span className="text-sm flex items-center justify-center">
              {user.email}
            </span>
            <button
              onClick={handleLogout}
              className="outline outline-1 outline-red-500 hover:outline-2 active:bg-red-500 py-2 px-4 rounded-md"
            >
              Logout
            </button>
          </div>
        )}
      </section>
    </nav>
  );
}
