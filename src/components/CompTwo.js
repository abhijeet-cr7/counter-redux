import React from 'react';
import {Link} from 'react-router-dom';


const employee = {
  id : "ABC",
  name : "Anthony",
  salary : "$10",
  address : {
    street : "210 Washington Street",
    country : "Canada",
    province : "Ontario",
    zones : {
      id: "1",
      plantZone : "78",
      alienZone : "41"
    }
  }
}
export default function CompTwo() {
  const {name , id : employeeId, address} = employee;
  // aliasing the ids as per requirement
  const {street , country, province, zones} = address;
  const {plantZone , alienZone, id:zoneId} = zones;
  return <div>
    <h5>{employeeId}</h5>
    <h5>{name}</h5>
    <h5>{`The address is ${street}, ${country}, ${province}`}</h5>
    <h5>{`The zones are ${plantZone} and ${alienZone} and the id of the zone is ${zoneId}`}</h5>
    <Link to="/Three">Go to Comp Three</Link>
  </div>;
}
