import React from 'react'
import activeimage from "/pexels5.png";
 import '../styles/Listening.css'
function Listening() {

    const listening = [
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
      { car: "Toyota ModelX", year: 2021, money: 120000 },
    ];
  return (
    <div className='listening'>
      {listening.map((datalisten) => (
        <div className="activecard">
          <div className="activecard1">
            <div className="activecard12">
              <div>
                          <p>{datalisten.car }</p>
                          <p>{ datalisten.year}</p>
              </div>

                      <p>{ datalisten.money}/day</p>
            </div>
            <img src={activeimage} />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Listening