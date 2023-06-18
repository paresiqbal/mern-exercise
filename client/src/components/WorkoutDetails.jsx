export default function WorkoutDetails({ workout }) {
  const handleDelete = async () => {
    const response = await fetch(
      "http://localhost:3001/workouts/" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="p-4 shadow-md rounded-md border my-4">
        <div className="flex items-center justify-between">
          <h4 className="text-xl font-bold text-teal-600 pb-2 hover:underline">
            {workout.title}
          </h4>
          <span
            className="bg-red-500 active:bg-red-600 py-2 px-4 rounded-md text-white font-semibold"
            onClick={handleDelete}
          >
            Delete
          </span>
        </div>
        <div className="font-semibold">
          <p>Load (Kg): {workout.load}</p>
          <p>Reps: {workout.reps}</p>
          <p>{workout.createdAt}</p>
        </div>
      </div>
    </div>
  );
}
