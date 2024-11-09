import { useState } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import "./Admin.css"


const AdminCards = ({ data, data2, data3, data4 }) => { 
  const [selectedCard, setSelectedCard] = useState(null);

  // Objeto de configuración de cada tarjeta
  const cardConfig = {
    data: { title: "Conductores", subtitle: "Esta es una lista de los conductores", content: data },
    data2: { title: "Escuelas", subtitle: "Esta es una lista de las escuelas", content: data2 },
    data3: { title: "Pasajeros", subtitle: "Esta es una lista de los pasajeros", content: data3 },
    data4: { title: "Viajes", subtitle: "Esta es una lista de los viajes", content: data4 },
  };

  const renderCardContent = () => {
    if (!selectedCard) {
      return <p className="text-danger">Error: {"Sin información"}</p>;
    } return selectedCard.map(i => (
      <div key={i.id} className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">{i.fullName}</h5>
          <p>{i.description || "Información adicional"}</p>
        </div>
      </div>
    ));
  };

  return (
    <div>
      <div className="btn-group mb-4" role="group">
        <button type="button" style={{ backgroundColor: '#34759c' }} onClick={() => setSelectedCard(cardConfig.data.content)}>Drivers</button>
        <button type="button" style={{ backgroundColor: '#2a7f62' }} onClick={() => setSelectedCard(cardConfig.data2.content)}>Schools</button>
        <button type="button" style={{ backgroundColor: '#c4cf03' }} onClick={() => setSelectedCard(cardConfig.data3.content)}>Passengers</button>
        <button type="button" style={{ backgroundColor: '#33c4ff' }} onClick={() => setSelectedCard(cardConfig.data4.content)}>Travels</button>
      </div>

      {selectedCard && (
        <div className="card" style={{ width: '18rem' }}>
          <div className="card-body">
            <h5 className="card-title">{Object.values(cardConfig).find(config => config.content === selectedCard).title}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {Object.values(cardConfig).find(config => config.content === selectedCard).subtitle}
            </h6>
            <p className="card-text">{renderCardContent()}</p>
            <Link to="./admin" className="card-link">Atrás</Link>
          </div>
        </div>
      )}
    </div>
  );
};

AdminCards.propTypes = {
  data: PropTypes.array, 
  data2: PropTypes.array, 
  data3: PropTypes.array, 
  data4: PropTypes.array,
};

export default AdminCards;
