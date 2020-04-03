import React, {useState} from 'react'

export default function NewCountry(props) {
  const [newCountry, setNewCountry] = useState("");

  const addCountry = (e) => {
    e.preventDefault();
    
    const country = {
      id: 3,
      name: newCountry
    }

    setNewCountry("");
    
    props.onAdd(country)
  }

  const countryChangeHandler = (e) => {
    setNewCountry(e.target.value);
  }


  return (
    <div className="new-country">
      <form onSubmit={addCountry}>
        <input type="text" placeholder="Add New Country" onChange={countryChangeHandler} />
        <button>Add Country</button>
      </form>
    </div>
  )
}
