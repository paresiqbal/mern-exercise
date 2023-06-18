// Rrd
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex p-6 shadow-md ">
      <Link to={"/"} className="font-bold text-xl">
        Workout
      </Link>
    </div>
  );
}
