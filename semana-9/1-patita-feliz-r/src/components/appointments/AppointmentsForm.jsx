import { useState } from "react";

const AppointmentsForm = ({ appointments, setAppointments }) => {

  const [appointmentForm, setAppointmentForm] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: ''
  });

  const handleInput = (e) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.id]: e.target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([
      ...appointments,
      appointmentForm
    ]);
  };

  return (
    <div className="col-md-6 d-flex flex-column gap-3">
      <h3 className="text-center m-0">🐶 Crear Cita 🐶</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control bg-transparent text-light"
            id="mascota"
            placeholder="Nombre de la mascota"
            onInput={handleInput}
          />
          <label htmlFor="mascota">Nombre de la mascota</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control bg-transparent text-light"
            id="propietario"
            placeholder="Nombre del propietario"
            onInput={handleInput}
          />
          <label htmlFor="propietario">Nombre del propietario</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control bg-transparent text-light"
            id="fecha"
            placeholder="Fecha"
            onInput={handleInput}
          />
          <label htmlFor="fecha">Fecha</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="time"
            className="form-control bg-transparent text-light"
            id="hora"
            placeholder="Hora"
            onInput={handleInput}
          />
          <label htmlFor="hora">Hora</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control bg-transparent text-light"
            id="síntomas"
            placeholder="Síntomas"
            onInput={handleInput}
          />
          <label htmlFor="síntomas">Síntomas</label>
        </div>
        <button className="btn btn-info w-100 fw-bold">Crear</button>
      </form>
    </div>
  );
};

export default AppointmentsForm;