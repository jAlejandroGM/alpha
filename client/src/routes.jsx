import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Auth Features
import { Login } from "./features/auth/pages/Login";
import { Admin as AdminLogin } from "./features/admin/pages/AdminLogin";
import { Signup } from "./features/auth/pages/ChangeSingup";
import { StudenSignup } from "./features/auth/pages/StudentSignup";
import { TeacherSignup } from "./features/auth/pages/TeacherSignup";
import SolicitarToken from "./features/auth/pages/SolicitarToken";
import { NuevaContrasena } from "./features/auth/pages/NuevaContrasena";
import { LoginLayout } from "./features/auth/pages/LoginLayout";
import { SignupLayout } from "./features/auth/pages/SignupLayout";

// Admin Features
import { AdminDashboardLayout } from "./features/admin/pages/AdminDashboardLayout";
import { AdminProfile } from "./features/admin/pages/AdminProfile";
import { AdminAlumnosNotas } from "./features/admin/pages/AdminAlumnosNotas";
import { AdminAlumnosAsistencia } from "./features/admin/pages/AdminAlumnosAsistencia";
import { AdminProfesores } from "./features/admin/pages/AdminProfesores";
import { AdminSolicitudes } from "./features/admin/pages/AdminSolicitudes";

// Student Features
import { AlumnosDashboardLayout } from "./features/student/pages/AlumnosDashboardLayout";
import { AlumnosProfile } from "./features/student/pages/AlumnosProfile";
import { AlumnosNotas } from "./features/student/pages/AlumnosNotas";
import { AlumnosHorario } from "./features/student/pages/AlumnosHorario";

// Teacher Features
import { ProfesoresDashboardLayout } from "./features/teacher/pages/ProfesoresDashboardLayout";
import { ProfesoresProfile } from "./features/teacher/pages/ProfesoresProfile";
import { ProfesoresAlumnosNotas } from "./features/teacher/pages/ProfesoresAlumnosNotas";
import { ProfesoresAlumnosAsistencia } from "./features/teacher/pages/ProfesoresAlumnosAsistencia";
import { ProfesoresHorario } from "./features/teacher/pages/ProfesoresHorario";

// Common
import PrivateRoute from "./common/components/PrivateRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<h1>Not found!</h1>}>
      <Route path="/login/admin" element={<AdminLogin />} />

      <Route
        path="/"
        element={<LoginLayout />}
        errorElement={<h1>Not found!</h1>}
      >
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<SolicitarToken />} />
        <Route path="/reset-password/:token" element={<NuevaContrasena />} />
      </Route>

      <Route path="/signup" element={<SignupLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/alumno" element={<StudenSignup />} />
        <Route path="/signup/profesor" element={<TeacherSignup />} />
      </Route>

      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <AdminDashboardLayout />
          </PrivateRoute>
        }
      >
        <Route path="/admin/dashboard/profile" element={<AdminProfile />} />
        <Route
          path="/admin/dashboard/alumnos/notas"
          element={<AdminAlumnosNotas />}
        />
        <Route
          path="/admin/dashboard/alumnos/asistencia"
          element={<AdminAlumnosAsistencia />}
        />
        <Route
          path="/admin/dashboard/profesores"
          element={<AdminProfesores />}
        />
        <Route
          path="/admin/dashboard/solicitudes"
          element={<AdminSolicitudes />}
        />
      </Route>

      <Route
        path="/teacher/dashboard"
        element={
          <PrivateRoute>
            <ProfesoresDashboardLayout />
          </PrivateRoute>
        }
      >
        <Route
          path="/teacher/dashboard/profile"
          element={<ProfesoresProfile />}
        />
        <Route
          path="/teacher/dashboard/alumnos/notas"
          element={<ProfesoresAlumnosNotas />}
        />
        <Route
          path="/teacher/dashboard/alumnos/asistencia"
          element={<ProfesoresAlumnosAsistencia />}
        />
        <Route
          path="/teacher/dashboard/horario"
          element={<ProfesoresHorario />}
        />
      </Route>

      <Route
        path="/student/dashboard"
        element={
          <PrivateRoute>
            <AlumnosDashboardLayout />
          </PrivateRoute>
        }
      >
        <Route path="/student/dashboard/profile" element={<AlumnosProfile />} />
        <Route path="/student/dashboard/notas" element={<AlumnosNotas />} />
        <Route path="/student/dashboard/horario" element={<AlumnosHorario />} />
      </Route>
    </Route>
  )
);
