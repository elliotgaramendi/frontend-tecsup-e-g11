import { useState } from "react";

const AppointmentsForm = () => {

  const [appointmentForm, setAppointmentForm] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    síntomas: ''
  });

  const handleInput = (e) => {
    setAppointmentForm({
      ...appointmentForm,
      [e.target.id]: e.target.value
    })
  };

  return (
    <div className="d-flex flex-column gap-3">
      <h3 className="text-center m-0">🐶 Crear Cita🐶</h3>
      <form className="text-dark">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="mascota"
            placeholder="Nombre de la mascota"
            onInput={handleInput}
          />
          <label htmlFor="mascota">Nombre de la mascota</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="propietario"
            placeholder="Nombre del propietario"
            onInput={handleInput}
          />
          <label htmlFor="propietario">Nombre del propietario</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="date"
            className="form-control"
            id="fecha"
            placeholder="Fecha"
            onInput={handleInput}
          />
          <label htmlFor="fecha">Fecha</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="time"
            className="form-control"
            id="hora"
            placeholder="Hora"
            onInput={handleInput}
          />
          <label htmlFor="hora">Hora</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
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