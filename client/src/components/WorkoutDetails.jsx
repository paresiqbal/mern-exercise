export default function WorkoutDetails({ workout }) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold text-3xl">Workout's</h1>
      <div className="p-4 shadow-md rounded-md border">
        <h4 className="text-xl font-bold text-teal-600 pb-2 hover:underline">
          {workout.title}
        </h4>
        <div className="font-semibold">
          <p>Load (Kg): {workout.load}</p>
          <p>Reps: {workout.reps}</p>
          <p>{workout.createdAt}</p>
        </div>
      </div>
    </div>
  );
}
