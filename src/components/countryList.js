import React, {useState} from 'react';
import Country from "./country";
import NewCountry from "./newCountry"

export default function CountryList(props) {
  const[countries, setCountries] = useState(
    [
      {id: 1, name: "Togo"},
      {id: 2, name: "Ghana"}
    ]
  )

  const onAddNewCountry = (country) => {
    setCountries(prevData => prevData.concat(country));

  }
  return (
    <div>
     <h2>{props.appTitle}</h2>
      <NewCountry onAdd={onAddNewCountry} />
      <Country countries={countries} />
    </div>
  )
}
