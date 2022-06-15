import { useState, useEffect } from 'react'
import Filter from "./components/Filter.js"
import Persons from "./components/Persons.js"
import PersonForm from "./components/PersonForm.js"


const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: 4032891686}]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [findName, setFindName] = useState('')
  
  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'people')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
    }
  

  const addPerson = (event) => {
    event.preventDefault()
    const newPerson = { name: newName, number: newNumber }

    setNewName('')
    setNewNumber('')

    const UniqueCheck = persons.find(person => person.name === newName)
    if (UniqueCheck) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(newPerson))
    }
  }
 
  const filterByName = (event) => {
    event.preventDefault()
    const search = event.target.value;
    setFindName(search);
    setPersons(
      persons.filter((person) => person.name.toLowerCase().includes(search))
    );
  }; 

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={findName} filterByName={filterByName} />
      <PersonForm persons={persons} addPerson={addPerson} newName={newName}
      newNumber={newNumber} handleNumberChange={handleNumberChange}
      handleNameChange={handleNameChange} />
      <Persons persons={persons} />
    </div>
  )
}

export default App
