import AppointmentsCard from "./AppointmentsCard";

const AppointmentsCards = ({ appointments, setAppointments }) => {
  return (
    <div className="col-md-6 d-flex flex-column gap-3">
      <h3 className="text-center m-0">🐱 Citas 🐱</h3>
      <ul className="list-group">
        {
          appointments.length <= 0 ? (
            <li className="list-group-item list-group-item-action bg-transparent text-light text-center fw-bold" aria-current="true">
              No hay citas registradas
            </li>
          ) : (
            appointments.map((element, index) => {
              return (
                <AppointmentsCard
                  key={index}
                  index={index}
                  appointment={element}
                  appointments={appointments}
                  setAppointments={setAppointments}
                />
              );
            })
          )
        }
      </ul>
    </div>
  );
};

export default AppointmentsCards;