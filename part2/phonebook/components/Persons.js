import Person from './Person'

const Persons = ({ persons }) => {
    return(
    <><h2>Numbers</h2><div>
      <ul>
        {persons.map((person, index) => //index will self-increment
          <Person key={index} name={person.name} number={person.number} />
        )}
      </ul>
    </div></>
    )
  }

  export default Persons
