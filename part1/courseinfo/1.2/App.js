const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <div>
      <p>{props.part[0].name} {props.part[0].execises}</p>
      <p>{props.part[1].name} {props.part[1].execises}</p>
      <p>{props.part[2].name} {props.part[2].execises}</p>
    </div>
  )
}

const Total = (props) => {
  return(
    <div>
      <p>Number of exercises {props.part[0].execises+props.part[1].execises+props.part[2].execises}</p>
    </div>
  )
}


const App = () => {
  const course_info = {
    course: 'Half Stack application development',
    part: [
      {
        name: 'Fundamentals of React',
        execises: 10
      },
      {
        name: 'Using props to pass data',
        execises: 7
      },
      {
        name: 'State of a component',
        execises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course_info.course} />
      <Content part={course_info.part}/>
      <Total part={course_info.part}/> 
    </div>
  )
}

export default App
