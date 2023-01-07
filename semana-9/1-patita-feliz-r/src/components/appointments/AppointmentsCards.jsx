import AppointmentsCard from "./AppointmentsCard";

const AppointmentsCards = ({ appointments }) => {
  return (
    <div className="col-md-6 d-flex flex-column gap-3">
      <h3 className="text-center m-0">🐱 Citas 🐱</h3>
      <ul className="list-group">
        {appointments.map((element, index) => {
          return (
            <AppointmentsCard
              key={index}
              appointment={element}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default AppointmentsCards;