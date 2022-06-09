const Header = ({ name }) => <h2> {name} </h2>

const Total =({ parts }) => {
  console.log(parts);
  const total = parts.reduce((acc, curr) => acc + curr.exercises, 0)
  return (
    <div>
      <b>total of {total} exercises</b>
    </div>
  )
}

const Part = ({ part }) => {
  
  return (
    <div>
      <p>{part.name} {part.exercises}</p>
    </div>
  )
}

const Parts = ({ course }) => {
  return(
    <div>
      {course.parts.map(part =>
          <Part key={part.id} part={part} />
      )}
    </div>
  )
   
}

const Content = ({ course }) => {
  return(
    <><Header name={course.name} />
      <Parts course={course} />
      <Total parts={course.parts} />
    </>
  )
}

const Course = ({ courses }) => {
  return(
    <>
      {courses.map(course =>
        <Content key={course.id} course={course} />
      )}
    </>
  )
}



export default Course
