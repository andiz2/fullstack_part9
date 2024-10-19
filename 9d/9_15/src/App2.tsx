
interface HeaderProps {
  name: String;
}

interface Content {
  parts: String;
  exerciseCount: String;
}

interface Total{
  total: number;
}

const Header = (props: HeaderProps) => {
  return <h1>props.name</h1>;
}

const Content = (props: Content) => {
  return <p>props.parts.name props.parts.exerciseCount </p>;
}

const Total = (props: Total) => {
  return 23;
}

const App2 = () => {
  const courseName = "Half Stack application development";
  const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  return (
    <div>
      <h1>{courseName}</h1>
      <p>
        {courseParts[0].name} {courseParts[0].exerciseCount}
      </p>
      <p>
        {courseParts[1].name} {courseParts[1].exerciseCount}
      </p>
      <p>
        {courseParts[2].name} {courseParts[2].exerciseCount}
      </p>
      <p>
        Number of exercises {totalExercises}
      </p>
    </div>
  );
};

export default App2;