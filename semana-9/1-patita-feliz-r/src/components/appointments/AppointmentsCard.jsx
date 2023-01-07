const AppointmentsCard = ({ appointment }) => {
  const { mascota, propietario, fecha, hora, sintomas } = appointment;
  return (
    <li className="list-group-item list-group-item-action" aria-current="true">
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1"><span className="fw-bold">Mascota:</span> {mascota}</h5>
        <small>📆 {fecha} ⌛ {hora}</small>
      </div>
      <p className="mb-1"><span className="fw-bold">Síntomas:</span> {sintomas}</p>
      <small><span className="fw-bold">Propietario:</span> {propietario}</small>
      <div className="d-flex gap-1">
        <a
          href={`https://api.whatsapp.com/send?phone=51963640765&text=Confirmo cita: Mascota: ${mascota}, Propietario: ${propietario}, Fecha: ${fecha}, Hora: ${hora} Síntomas: ${sintomas}`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          Confirmar
        </a>
        <button className="btn btn-danger btn-sm">
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default AppointmentsCard;