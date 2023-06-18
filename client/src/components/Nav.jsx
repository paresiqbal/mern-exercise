// Rrd
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="flex p-4">
      <Link
        to={"/"}
        className="border-2 py-2 px-10 rounded-md  font-bold hover:border-green-500"
      >
        Workout
      </Link>
    </div>
  );
}
