// React
import { useEffect, useState } from "react";

// Compoentns
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

// Context
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function Dashboard() {
  // const [workouts, setWorkouts] = useState(null);

  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch("http://localhost:3001/workouts");

        if (!response.ok) {
          // throw new Error(response.statusText);
          dispatch({ type: "SET_WORKOUTS", payload: json });
        }

        const json = await response.json();
      } catch (error) {
        console.error("Error fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="p-8 flex flex-col gap-10">
      <WorkoutForm />
      <div>
        <h1 className="text-3xl font-bold py-2">Workout's</h1>
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
    </div>
  );
}
