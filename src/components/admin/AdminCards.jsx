import { useState } from 'react';
import { passengers } from "../../data/passengers";
import { drivers } from "../../data/drivers";
import { districts } from "../../data/districts";
import { schools } from "../../data/schools";
import { travels } from "../../data/travels";


const AdminCards = () => { 
  const [selectedCard, setSelectedCard] = useState('drivers');

  const renderCardContent = () => {
    switch (selectedCard) {
      case 'passengers':
        return passengers.map(passenger => (
          <div key={passenger.id}>
            <h3>{passenger.name}</h3>
            <p>Dirección: {passenger.adress}</p>
            <p>Distrito: {passenger.district}</p>
          </div>
        ));
      case 'drivers':
        return drivers.map(driver => (
          <div key={driver.id}>
            <h3>Nombre: {driver.name}</h3>
            <p>Experiencia: {driver.experience}</p>
          </div>
        ));
      case 'districts':
        return districts.map(district => (
          <div key={district.id}>
            <p>Distrito: {district.name}</p>
          </div>
        ));
      case 'schools':
        return schools.map(school => (
          <div key={school.id}>
            <h3>Escuela: {school.name}</h3>
          </div>
        ));
      case 'travels':
        return travels.map(travel => (
          <div key={travel.id}>
            <p>Hora: {travel.hour}</p>
            <p>Capacidad: {travel.capacity}</p>
            <p>Estado: {travel.state}</p>
          </div>
        ));
      default:
        return <p style={{ color: 'red' }}>No se encontraron datos para {selectedCard}</p>;
    }
  };

  return (
    <div>
      <button type="button" style={{ backgroundColor: '#34759c' }} onClick={() => setSelectedCard('drivers')}>Drivers</button>
      <button type="button" style={{ backgroundColor: '#2a7f62' }} onClick={() => setSelectedCard('schools')}>Schools</button>
      <button type="button" style={{ backgroundColor: '#c4cf03' }} onClick={() => setSelectedCard('passengers')}>Passengers</button>
      <button type="button" style={{ backgroundColor: '#ff5733' }} onClick={() => setSelectedCard('districts')}>Districts</button>
      <button type="button" style={{ backgroundColor: '#33c4ff' }} onClick={() => setSelectedCard('travels')}>Travels</button>

      
      <div className="card-content">
        {renderCardContent()}
      </div>
    </div>
  );
};

export default AdminCards;
