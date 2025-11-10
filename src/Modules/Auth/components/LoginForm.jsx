import React, { useState } from "react";
import InputForm from "../../../UI/InputForm";
import PForm from "../../../UI/PForm";
import Button from "../../../UI/Button";
import CheckBox from "../../../UI/CheckBoxForm";
import AForm from "../../../UI/AForm";

function UserIcon() {
  return (
    <img
      src="/images/UserIcon3.png"
      alt="User Icon"
      className="w-24 h-24 object-contain"
    />
  );
}

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrors({});

    try {
      const response = await fetch("http://127.0.0.1:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Inicio de sesión exitoso");
        localStorage.setItem("token", data.token); // Guarda el token
        setTimeout(() => {
          window.location.href = "/"; // redirige a la página principal
        }, 1000);
      } else if (response.status === 422) {
        setErrors(data.errors || {});
        setMessage("Corrige los errores del formulario.");
      } else {
        setMessage(data.message || "Credenciales incorrectas.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error de conexión con el servidor.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full bg-white
        xs:py-10 xs:m-2.5 xs:rounded-lg
        2xs:py-10 2xs:m-2.5 2xs:rounded-lg
        sm:py-10 sm:mx-10 sm:rounded-lg
        2sm:py-10 2sm:mx-50 2sm:rounded-lg
        3sm:py-10 3sm:mx-60 3sm:rounded-lg
        md:py-10 md:mx-100 md:rounded-lg
        2md:py-10 2md:mx-130 2md:rounded-lg
        3md:py-15 3md:mx-130 3md:rounded-lg
        shadow-lg"
    >
      <section className="w-full flex justify-center items-center flex-col px-10">
        <figure className="my-4">
          <UserIcon />
        </figure>

        <PForm label="Log" label2=" In" />

        {/* Email */}
        <InputForm
          label=""
          placeholder="Correo electrónico"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>
        )}

        {/* Password */}
        <InputForm
          label=""
          placeholder="Contraseña"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password[0]}</p>
        )}

        <CheckBox label="Recuérdame" />

        <Button label="Iniciar sesión" />

        {message && (
          <p className="mt-4 text-center text-gray-700">{message}</p>
        )}

        <AForm label="¿No tienes una cuenta?" href="/signup" />
      </section>
    </form>
  );
};

export default LoginForm;
