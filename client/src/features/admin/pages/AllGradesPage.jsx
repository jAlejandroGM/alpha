import { useEffect, useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import { useFetch } from "../../../common/hooks/useFetch";

export const AllGradesPage = () => {
  const { store } = useAuth();
  const token = store.access_token;
  const { data: studentsData } = useFetch("/api/teacher/grades");
  const { data: asignatureData } = useFetch("/api/courses");
  const { data: periodsData } = useFetch("/api/periods");
  const { data: gradesData } = useFetch("/api/setup/grade_levels");

  const students = studentsData || [];
  const asignature = asignatureData || [];
  const period = periodsData || [];
  const grade = gradesData || [];

  return (
    <div className="container table-responsive my-5">
      <div className="row">
        <div className="col-2">
          <select className="form-select" aria-label="Selecciona una opción">
            <option value="">Selecciona Año</option>
            {grade.map((grade) => (
              <option key={grade.id} value={grade.id}>
                {grade.name}{" "}
              </option>
            ))}
          </select>
        </div>
        <div className="col-2">
          <select className="form-select" aria-label="Selecciona una opción">
            <option value="">Selecciona Materia</option>
            {asignature.map((asignature) => (
              <option key={asignature.id} value={asignature.id}>
                {asignature.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-2">
          <select className="form-select" aria-label="Selecciona una opción">
            <option value="">Selecciona Periodo</option>
            {period.map((periodos, i) => (
              <option key={i} value={periodos}>
                {periodos} Bimestre
              </option>
            ))}
          </select>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success px-4">
            Buscar
          </button>
        </div>
        <table className="col-12 table table-striped table-bordered text-center mt-5">
          <thead className="table-light">
            <tr>
              <th scope="col" className="admin-num">
                ID
              </th>
              <th scope="col" className="admin-lastname">
                Apellidos
              </th>
              <th scope="col" className="admin-firstname">
                Nombres
              </th>
              <th scope="col" className="admin-participacion">
                Part. Clase (15%)
              </th>
              <th scope="col" className="admin-tareas">
                Tareas (20%)
              </th>
              <th scope="col" className="admin-parcial">
                Ex. Parcial (30%)
              </th>
              <th scope="col" className="admin-final">
                Ex. Final (35%)
              </th>
              <th scope="col" className="admin-promedio">
                Prom. Final
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>John</td>
              <td>Doe</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
