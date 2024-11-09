
import { useState } from 'react';
// import { passengers } from "../../data/passengers";
// import { drivers } from "../../data/drivers";
// //import { districts } from "../../data/districts";
// import { schools } from "../../data/schools";
// import { travels } from "../../data/travels";
import PropTypes from "prop-types";

const AdminCards = ({data, data2, data3, data4}) => { 
  const [selectedCard, setSelectedCard] = useState(null);

  const renderCardContent = () => { 
    if(selectedCard == null) {
      return <p className="text-danger"> Error: {"Sin informaciòn"}</p>;
    } else {
    return data.map(i=> (
      <div key={i.id} className="card mb-3">
        <div className="card-body">
        <h5 className="card-title"> {i.fullName} </h5>
        <h3> {i.fullName} </h3>
        </div>
        </div>
    ));
  }};

    return (
      <div className="container mt-4">
        <div className="btn-group mb-4" role="group">
          <button type="button" style={{ backgroundColor: '#34759c' }} onClick={() => setSelectedCard(data)}>Drivers</button>
          <button type="button" style={{ backgroundColor: '#2a7f62' }} onClick={() => setSelectedCard(data2)}>Schools</button>
          <button type="button" style={{ backgroundColor: '#c4cf03' }} onClick={() => setSelectedCard(data3)}>Passengers</button>
          <button type="button" style={{ backgroundColor: '#33c4ff' }} onClick={() => setSelectedCard(data4)}>Travels</button>
        </div>
        <div className="card-content">
          {renderCardContent()}
        </div>
      </div>
    );
  };

  AdminCards.propTypes = {
    data: PropTypes.array, data2: PropTypes.array, data3: PropTypes.array, data4: PropTypes.array,
  };

export default AdminCards;
















    
//     switch (selectedCard) {
//       case 'passengers':
//         return passengers.map(passenger => (
//           <div key={passenger.id}>
//             <h3>{passenger.name}</h3>
//             <p>Dirección: {passenger.adress}</p>
//             <p>Distrito: {passenger.district}</p>
//           </div>
//         ));
//       case 'drivers':
//         return drivers.map(driver => (
//           <div key={driver.id}>
//             <h3>Nombre: {driver.name}</h3>
//             <p>Experiencia: {driver.experience}</p>
//           </div>
//         ));
      
//       case 'schools':
//         return schools.map(school => (
//           <div key={school.id}>
//             <h3>Escuela: {school.name}</h3>
//           </div>
//         ));

//       case 'travels':
//         return travels.map(travel => (
//           <div key={travel.id}>
//             <p>Hora: {travel.hour}</p>
//             <p>Capacidad: {travel.capacity}</p>
//             <p>Estado: {travel.state}</p>
//           </div>
//         ));
        
//       default:
//         return <p style={{ color: 'red' }}>No se encontraron datos para {selectedCard}</p>;
//     }
//   };

  
// };

