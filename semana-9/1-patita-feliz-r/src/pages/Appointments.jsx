import { useState } from "react";
import AppointmentsCards from "../components/appointments/AppointmentsCards";
import AppointmentsForm from "../components/appointments/AppointmentsForm";

const Appointments = () => {

  const [appointments, setAppointments] = useState([]);

  return (
    <section className="py-4">
      <div className="container">
        <AppointmentsForm
          appointments={appointments}
          setAppointments={setAppointments}
        />
        <AppointmentsCards
          appointments={appointments}
        />
      </div>
    </section>
  );
};

export default Appointments;