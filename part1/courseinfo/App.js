const Header = (header) => {
  return <h1>{header.course}</h1>;
}

const Element = (content) => {
  return (
    <p>
      {content.name} {content.exercise}
    </p>
  )
}

const Content = (content) => {
  return (
    <div>
      <Element
        part={content.elements[0].name}
        exercise={content.elements[0].exercises}
      />
      <Element
        part={content.elements[1].name}
        exercise={content.elements[1].exercises}
      />
      <Element
        part={content.elements[2].name}
        exercise={content.elements[2].exercises}
      />
    </div>
  )
}

const Total = (total) => {
  return (
    <p>
      Number of exercises{" "}
      {total.parts[0].exercises +
        total.parts[1].exercises +
        total.parts[2].exercises}
    </p>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    elements: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.elements} />
      <Total parts={course.elements} />
    </div>
  )
}

export default App;
