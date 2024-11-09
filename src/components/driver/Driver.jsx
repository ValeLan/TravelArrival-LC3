import PropTypes from "prop-types"
import DriverItem from "./DriverItem";
import { Row} from "react-bootstrap";
import "./driver.css"

const Driver = ({ data, isLoading }) => {
  if (isLoading) return <p>Cargando datos...</p>;

  return (
    <div className="text-center d-flex flex-column container-driver">
      <div className="title-container text-center mb-5">
        <h1 className="pb-5">
          Mis viajes
        </h1>
      </div>
      <Row>
      {data == null ? <p>No hay viajes</p> : data?.map((i) => (
        <DriverItem id={i.id} hour={i.hour} capacity={i.capacity} state={i.state} school={i.school} driver={i.driver} district={i.distict} passenger={i.passenger} />
      ))}
      </Row>
    </div>
  );
};

Driver.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Driver;
