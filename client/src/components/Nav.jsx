// Rrd
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex p-6 shadow-md justify-between items-center">
      <Link to={"/"} className="font-bold text-xl">
        Workout
      </Link>
      <section className="outline outline-teal-500 p-2 rounded-md hover:bg-teal-400 font-bold hover:text-white">
        <Link to={"/signup"}>Sign Up</Link>
      </section>
    </div>
  );
}
