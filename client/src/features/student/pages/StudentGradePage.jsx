import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import { useFetch } from "../../../common/hooks/useFetch";
import { apiClient } from "../../../common/api/apiClient";

export const StudentGradePage = () => {
  const { data: asignatureData } = useFetch("/api/courses");
  const { data: periodData } = useFetch("/api/periods");

  const asignature = asignatureData || [];
  const period = periodData || [];

  const [selectedAsignature, setSelectedAsignature] = useState("");
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [showTable, setShowTable] = useState(false);
  const [loadFilters, setLoadFilters] = useState(false);
  const [load, setLoad] = useState(false);
  const [grades, setGrades] = useState([]);
  const { store } = useAuth();
  const token = store.access_token;

  useEffect(() => {
    if (period.length > 0 && asignature.length > 0) {
      setLoadFilters(true);
    }
  }, [period, asignature]);

  const handleSearch = () => {
    if (selectedAsignature && selectedPeriod) {
      setShowTable(true);
      students();
    }
  };

  const students = async () => {
    try {
      const responseData = await apiClient.get("/api/student/grades");
      console.log(responseData);
      const filtered = responseData.filter((item) => {
        return (
          item.course === selectedAsignature &&
          item.period === parseInt(selectedPeriod)
        );
      });
      setGrades(filtered);
      setLoad(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container table-responsive my-5">
      {loadFilters ? (
        <div className="row">
          <div className="col-2">
            <select
              className="form-select"
              aria-label="Selecciona una opción"
              value={selectedAsignature}
              onChange={(e) => setSelectedAsignature(e.target.value)}
            >
              <option value="">Selecciona Materia</option>
              {asignature.map((asignature) => (
                <option key={asignature.id} value={asignature.name}>
                  {asignature.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-2">
            <select
              className="form-select"
              aria-label="Selecciona una opción"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="">Selecciona Periodo</option>
              {period.map((periodos, i) => (
                <option key={i} value={i + 1}>
                  {periodos} Bimestre
                </option>
              ))}
            </select>
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-success px-4"
              onClick={handleSearch}
            >
              Buscar
            </button>
          </div>
          {load
            ? showTable && (
                <table className="col-12 table table-striped table-bordered text-center mt-5">
                  <thead className="table-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Participación en Clase (15%)</th>
                      <th scope="col">Tareas (20%)</th>
                      <th scope="col">Exámen Parcial (30%)</th>
                      <th scope="col">Exámen Final (35%)</th>
                      <th scope="col">Promedio Final</th>
                    </tr>
                  </thead>
                  <tbody>
                    {grades.map((item, index) => (
                      <tr key={item.id}>
                        <th scope="row">{index + 1}</th>
                        <td>{item.participation}</td>
                        <td>{item.homework}</td>
                        <td>{item.midterm}</td>
                        <td>{item.final_exam}</td>
                        <td>{item.average}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            : ""}
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
