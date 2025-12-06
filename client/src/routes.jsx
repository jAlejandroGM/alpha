import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// Auth Features
import {
  LoginPage,
  RoleSelectionPage,
  StudentRegisterPage,
  TeacherRegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  AuthLayout,
} from "./features/auth";

// Admin Features
import {
  AdminLoginPage,
  AdminLayout,
  AdminProfilePage,
  AllGradesPage,
  AllAsistancePage,
  TeacherManagementPage,
  RegistrationRequestPage,
} from "./features/admin";

// Student Features
import {
  StudentLayout,
  StudentProfilePage,
  StudentSchedulePage,
  StudentGradePage,
} from "./features/student";

// Teacher Features
import {
  TeacherLayout,
  TeacherProfilePage,
  GradeEntryPage,
  AssistanceEntryPage,
  TeacherSchedulePage,
} from "./features/teacher";

// Common
import PrivateRoute from "./common/components/PrivateRoute";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" errorElement={<h1>Not found!</h1>}>
      <Route path="/login/admin" element={<AdminLoginPage />} />

      <Route
        path="/"
        element={<AuthLayout />}
        errorElement={<h1>Not found!</h1>}
      >
        <Route path="/" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
        <Route path="/signup" element={<RoleSelectionPage />} />
        <Route path="/signup/student" element={<StudentRegisterPage />} />
        <Route path="/signup/teacher" element={<TeacherRegisterPage />} />
      </Route>

      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route path="/admin/dashboard/profile" element={<AdminProfilePage />} />
        <Route
          path="/admin/dashboard/students/grades"
          element={<AllGradesPage />}
        />
        <Route
          path="/admin/dashboard/students/attendance"
          element={<AllAsistancePage />}
        />
        <Route
          path="/admin/dashboard/teachers"
          element={<TeacherManagementPage />}
        />
        <Route
          path="/admin/dashboard/requests"
          element={<RegistrationRequestPage />}
        />
      </Route>

      <Route
        path="/teacher/dashboard"
        element={
          <PrivateRoute>
            <TeacherLayout />
          </PrivateRoute>
        }
      >
        <Route
          path="/teacher/dashboard/profile"
          element={<TeacherProfilePage />}
        />
        <Route
          path="/teacher/dashboard/students/grades"
          element={<GradeEntryPage />}
        />
        <Route
          path="/teacher/dashboard/students/attendance"
          element={<AssistanceEntryPage />}
        />
        <Route
          path="/teacher/dashboard/schedule"
          element={<TeacherSchedulePage />}
        />
      </Route>

      <Route
        path="/student/dashboard"
        element={
          <PrivateRoute>
            <StudentLayout />
          </PrivateRoute>
        }
      >
        <Route
          path="/student/dashboard/profile"
          element={<StudentProfilePage />}
        />
        <Route
          path="/student/dashboard/grades"
          element={<StudentGradePage />}
        />
        <Route
          path="/student/dashboard/schedule"
          element={<StudentSchedulePage />}
        />
      </Route>
    </Route>
  )
);
