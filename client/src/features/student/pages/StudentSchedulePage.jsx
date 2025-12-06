import { useFetch } from "../../../common/hooks/useFetch";

export const StudentSchedulePage = () => {
  const { data, loading } = useFetch("/api/student/schedule");
  const schedule = data || [];

  return (
    <div className="container table-responsive my-5">
      {!loading ? (
        <div className="row">
          <h1 className="fs-2 p-0">Mi horario:</h1>
          <table className="col-12 table table-striped table-bordered text-center mt-5 schedule-table">
            <thead className="table-light">
              <tr>
                <th scope="col">HORAS</th>
                <th scope="col">LUNES</th>
                <th scope="col">MARTES</th>
                <th scope="col">MIERCOLES</th>
                <th scope="col">JUEVES</th>
                <th scope="col">VIERNES</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((bloque, index) => (
                <tr key={index}>
                  <th scope="row">{bloque.bloque}</th>
                  <td>{bloque.Lunes}</td>
                  <td>{bloque.Martes}</td>
                  <td>{bloque.Miércoles}</td>
                  <td>{bloque.Jueves}</td>
                  <td>{bloque.Viernes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div
          className="spinner-border position-absolute top-50 start-50 translate-middle"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};
