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
          <div className="flex gap-4">
            <Link to={"/signup"}>Sign Up</Link>
            <Link to={"/login"}>login</Link>
          </div>
        )}
        {user && (
          <div>
            <span>{user.email}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </section>
    </nav>
  );
}
