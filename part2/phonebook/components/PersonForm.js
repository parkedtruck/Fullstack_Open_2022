
const PersonForm = ({persons, addPerson, newName, handleNameChange, 
    handleNumberChange, newNumber, }) => {

    return(
    <form onSubmit={addPerson}>
        <h2>Add a contact</h2>
        <div>name: {" "}<input 
                value={newName}
                onChange={handleNameChange}/>
        </div>
        <div>number: {" "} <input 
                value={newNumber}
                onChange={handleNumberChange}/>
        </div>
        <div><button type="submit">add</button></div>
      </form>
    )
}

export default PersonForm
