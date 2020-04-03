import React from 'react';

export default function country(props) {
  console.log(props)
  return (
   
     <ul className="country-list">
     {props.countries.map(country => {
       return <li key={country.id}>{country.name}</li>;
     })}
   </ul>
  )
}
