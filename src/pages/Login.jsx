import AuthLayout from "layouts/AuthLayout";
import { Link } from "react-router-dom";
import React from "react";

const Login = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col w-full justify-center items-center">
        <h2 className="m-3 text-center text-3xl font-extrabold text-gray-900">
          Inicia sesión en tu cuenta
        </h2>
        <form className="mt-8">
          <div>
            <input
              className="appearance-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500"
              type="email"
              placeholder="nombre@inst.com"
              required
            />
            <input
              className="appearance-none px-3 py-2 border border-gray-300 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500"
              type="password"
              required
            />
          </div>
          <div className="flex justify-between">
            <div>
              <label htmlFor="recuerdame">
                <input type="checkbox" name="recuerdame" />
                Recuérdame
              </label>
            </div>
            <div>
              <Link to="/">¿Olvidaste tu contraseña?</Link>
            </div>
          </div>
          <div>
            <Link to="/admin">
              <button type="submit">Iniciar sesión</button>
            </Link>
          </div>
          <div>O</div>
          <div>
            <button>Continúa con Google</button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default Login;
