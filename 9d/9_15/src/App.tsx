
interface HeaderProps {
    name: String;
  }
  
  interface Content {
    name: String;
    exerciseCount: number;
  }

  interface ContentArr{
    content: Content[];
  }
  
  interface Total{
    total: number;
  }
  
  const Header = (props: HeaderProps) => {
    return <h1>{props.name}</h1>;
  }
  
  const ContentArr = (props: ContentArr) => {
    return (
    <div>
        {props.content.map((part) => (
            <p>
                {part.name} {part.exerciseCount}
            </p>
        ))}
        
    </div>
  )};
  
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
         <ContentArr content = {courseParts}
         />
         <Total  total = {totalExercises}/>
      </div>
    );
  };
  
  export default App;