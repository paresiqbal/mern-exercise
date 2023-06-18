// React
import { useState } from "react";

import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const [error, setError] = useState(null);
  const { dispatch } = useWorkoutsContext();

  const submitForm = async (e) => {
    e.preventDefault();

    // post the object of workout
    const workout = { title, load, reps };
    const response = await fetch("http://localhost:3001/workouts/", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    // check the status
    if (!response) {
      setError(json.error);
    }
    if (response.ok) {
      // set all form to empety
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("New Workout addded");

      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form onSubmit={submitForm} className="flex flex-col gap-2">
      <h3 className="text-3xl font-bold py-2">Add New Workout</h3>
      <div className="flex flex-col">
        <label htmlFor="title" className="font-semibold">
          Exercise Titile:
        </label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="border hover:outline-teal-500 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="load" className="font-semibold">
          Load (Kg):
        </label>
        <input
          type="number"
          name="load"
          id="load"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
          className="border hover:outline-teal-500 rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="reps" className="font-semibold">
          Reps:
        </label>
        <input
          type="number"
          name="reps"
          id="reps"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
          className="border hover:outline-teal-500 rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-teal-500 active:bg-teal-600 py-2 font-bold text-white rounded-md"
      >
        Add Workout
      </button>
      {error && <div>{error}</div>}
    </form>
  );
}
