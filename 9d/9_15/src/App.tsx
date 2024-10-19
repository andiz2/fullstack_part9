
interface HeaderProps {
    name: String;
  }
  
  interface Content {
    name: String;
    exerciseCount: number;
  }
  
  interface Total{
    total: number;
  }
  
  const Header = (props: HeaderProps) => {
    return <h1>{props.name}</h1>;
  }
  
  const Content = (props: Content) => {
    return <p>{props.name} {props.exerciseCount} </p>;
  }
  
  const Total = (props: Total) => {
    return <p>Number of total exercises {props.total}</p>;
  }
  
  const App = () => {
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
         <Header name={courseName} />
         <Content name = {courseParts[0].name} exerciseCount = {courseParts[0].exerciseCount} />
         <Content name = {courseParts[1].name} exerciseCount = {courseParts[1].exerciseCount} />
         <Content name = {courseParts[2].name} exerciseCount = {courseParts[2].exerciseCount} />
         <Total  total = {totalExercises}/>
      </div>
    );
  };
  
  export default App;