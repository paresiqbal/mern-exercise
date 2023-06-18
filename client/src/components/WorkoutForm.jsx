import { useState } from "react";

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");

  const [error, setError] = useState(null);

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
    }
  };

  return (
    <form onSubmit={submitForm}>
      <h3>Add new Workout</h3>
      <div>
        <label htmlFor="title">Exercise Titile:</label>
        <input
          type="text"
          name="title"
          id="title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div>
        <label htmlFor="load">Load (Kg):</label>
        <input
          type="number"
          name="load"
          id="load"
          onChange={(e) => setLoad(e.target.value)}
          value={load}
        />
      </div>
      <div>
        <label htmlFor="reps">Reps:</label>
        <input
          type="number"
          name="reps"
          id="reps"
          onChange={(e) => setReps(e.target.value)}
          value={reps}
        />
      </div>
      <button type="submit">Add Workout</button>
    </form>
  );
}
