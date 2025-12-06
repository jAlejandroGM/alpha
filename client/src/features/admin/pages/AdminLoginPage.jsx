import { useNavigate } from "react-router-dom";
import imageHomeAdmin from "../../../assets/img/login.jpg";
import { useState } from "react";
import { useAuth } from "../../../context/AuthProvider";
import { apiClient } from "../../../common/api/apiClient";

export const AdminLoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setMsg("Completa los campos correctamente.");
      return;
    } else setMsg("");

    try {
      const data = await apiClient.post("/api/login/admin", {
        email,
        password,
      });
      login(data.access_token, data.user);
      navigate("/admin/dashboard/profile");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setMsg("Credenciales inválidas");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-signup-form position-absolute top-50 start-50 translate-middle border rounded-3 p-3 p-md-4">
        <form className="login-width mx-auto" onSubmit={handleOnSubmit}>
          <h1 className="text-center mb-4">Administrador</h1>
          <div className="d-flex flex-column gap-3 mb-4">
            <div>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Correo electrónico"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          {msg && (
            <div
              className="alert alert-danger d-flex justify-content-center align-items-center py-1 mb-3 gap-2"
              role="alert"
            >
              <i className="ri-error-warning-line"></i>
              <div>{msg}</div>
            </div>
          )}
          <button type="submit" className="btn btn-dark w-100">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};
