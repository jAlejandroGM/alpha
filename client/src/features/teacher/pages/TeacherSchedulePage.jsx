import { useFetch } from "../../../common/hooks/useFetch";

export const TeacherSchedulePage = () => {
  const { data: user, loading: load, error } = useFetch("/api/profile");

  if (error) {
    return (
      <div className="alert alert-danger m-5" role="alert">
        Error al cargar el horario: {error.message}
      </div>
    );
  }

  return (
    <div className="container table-responsive my-5">
      {!load && user ? (
        <div className="row">
          <table className="col-12 table table-striped table-bordered text-center mt-5">
            <thead className="table-light">
              <tr>
                <th scope="col">HORARIOS</th>
                <th scope="col">LUNES</th>
                <th scope="col">MARTES</th>
                <th scope="col">MIERCOLES</th>
                <th scope="col">JUEVES</th>
                <th scope="col">VIERNES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">07:00 - 09:00 </th>
                <td>{user.teacher?.courses?.[0]?.name}</td>
                <td></td>
                <td>{user.teacher?.courses?.[0]?.name}</td>
                <td>{user.teacher?.courses?.[0]?.name}</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">09:00 - 11:00</th>
                <td>{user.teacher?.courses?.[0]?.name}</td>
                <td>{user.teacher?.courses?.[0]?.name}</td>
                <td></td>
                <td>{user.teacher?.courses?.[0]?.name}</td>
                <td></td>
              </tr>
              <tr>
                <th scope="row">11:00 - 13:00</th>
                <td></td>
                <td>{user.teacher?.courses?.[0]?.name}</td>
                <td>{user.teacher?.courses?.[0]?.name}</td>
                <td></td>
                <td>{user.teacher?.courses?.[0]?.name}</td>
              </tr>
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
