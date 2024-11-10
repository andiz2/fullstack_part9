
interface HeaderProps {
    name: string;
  }
  
  interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }


  interface CoursePartBasic extends CoursePartExtended{
    kind: "basic"
  }

  interface CoursePartGroup extends CoursePartBase{
    groupProjectCount: number;
    kind: "group"
  }

  interface CoursePartBackground extends CoursePartExtended {
    backgroundMaterial: string;
    kind: "background"
  }

  interface CoursePartExtended extends CoursePartBase{
    description: string;
  }

  interface CourseSpecial extends CoursePartExtended {
    requirements: string[];
    kind: "special";
  }

  

  type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CourseSpecial;

  

  interface Total{
    total: number;
  }

  const Part = (part: CoursePart) => {
    switch(part.kind) {
      case "basic":
        return (
          <div>
            <p>
              <strong>{part.name} {part.exerciseCount} </strong>  <br />
              <i>{part.description}</i> 
            </p>
          </div>
        )
      case "group":
        return (
          <div>
            <p>
              <strong>{part.name} {part.exerciseCount} </strong><br />
             <i>project exercises: {part.groupProjectCount}</i></p>
          </div>
        )
      case "background":
        return (
          <div>
            <p>
              <strong>{part.name} {part.exerciseCount} </strong> <br />
              <i>{part.description}</i><br />
              submit to <a href={part.backgroundMaterial}>{part.backgroundMaterial}</a></p>
          </div>
        )
      case "special":
        return (
          <div>
            <p>
              <strong>{part.name} {part.exerciseCount} </strong> <br />
              <i>{part.description}</i>
              required skills: {part.requirements.join(", ")}</p>
          </div>
        )
      default :
      throw new Error(`Unhandled kind: ${JSON.stringify(part)}`);
    }
  }

  const Content = ({courseParts}: {courseParts: CoursePart[]}) => (
    <div>
      {courseParts.map(part => (
        <Part {...part} />
      ))}
    </div>
  );
  
  const Header = (props: HeaderProps) => {
    return <h1>{props.name}</h1>;
  }
  
  
  const Total = (props: Total) => {
    return <p>Number of total exercises {props.total}</p>;
  }
  
  const App = () => {
    const courseName = "Half Stack application development";
    const courseParts: CoursePart [] = [
      {
          name: "Fundamentals",
          exerciseCount: 10,
          description: "this is an awesome course part",
          kind: "basic"
      },
      {
          name: "Using props to pass data",
          exerciseCount: 7,
          groupProjectCount: 3,
          kind: "group"
        },
        {
          name: "Basics of type Narrowing",
          exerciseCount: 7,
          description: "How to go from unknown to string",
          kind: "basic"
        },
        {
          name: "Deeper type usage",
          exerciseCount: 14,
          description: "Confusing description",
          backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
          kind: "background"
        },
        {
          name: "TypeScript in frontend",
          exerciseCount: 10,
          description: "a hard part",
          kind: "basic",
        },
        {
          name: "Backend development",
          exerciseCount: 21,
          description: "Typing the backend",
          requirements: ["nodejs", "jest"],
          kind: "special"
        }
    ]
    const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

    return (
      <div>
         <Header name={courseName} />
         <Content courseParts = {courseParts}
         />
         <Total  total = {totalExercises}/>
      </div>
    );
  };
  
  export default App;