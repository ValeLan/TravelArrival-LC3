import PropTypes from "prop-types";
import { useNavigate } from 'react-router-dom';
import "./Admin.css"

const AdminCards = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="btn-group mb-4" role="group">
        <button
          type="button"
          style={{ backgroundColor: "#34759c" }}
          onClick={() => navigate("/admin-driver")}
        >
          Driver
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#2a7f62" }}
        >
          Schools
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#c4cf03" }}
        >
          Passengers
        </button>
        <button
          type="button"
          style={{ backgroundColor: "#33c4ff" }}
        >
          Travels
        </button>
      </div>
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