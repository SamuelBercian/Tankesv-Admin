import React, { useState } from "react";
import PForm from "../../../UI/PForm";
import InputForm from "../../../UI/InputForm";
import CheckBox from "../../../UI/CheckBoxForm";
import Button from "../../../UI/Button";
import AForm from "../../../UI/AForm";

function UserIcon() {
  return (
    <img
      src="/images/UserAccount.png"
      alt="User Icon"
      className="w-24 h-24 object-contain"
    />
  );
}

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
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
      const response = await fetch("http://127.0.0.1:8000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registro exitoso. Ya puedes iniciar sesión.");
        setFormData({
          name: "",
          last_name: "",
          email: "",
          password: "",
          password_confirmation: "",
        });
      } else if (response.status === 422) {
        setErrors(data.errors || {});
        setMessage("Corrige los errores del formulario.");
      } else {
        setMessage(data.message || "Error en el registro.");
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

        <PForm label="Sign" label2=" Up" />

        <InputForm
          label=""
          placeholder="Nombre"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>
        )}

        <InputForm
          label=""
          placeholder="Apellido"
          type="text"
          name="last_name"
          value={formData.last_name}
          onChange={handleChange}
        />
        {errors.last_name && (
          <p className="text-red-500 text-sm mt-1">{errors.last_name[0]}</p>
        )}

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

        <InputForm
          label=""
          placeholder="Confirmar contraseña"
          type="password"
          name="password_confirmation"
          value={formData.password_confirmation}
          onChange={handleChange}
        />

        <CheckBox label="Acepto los términos y condiciones" />

        <Button label="Crear cuenta" />

        {message && (
          <p className="mt-4 text-center text-gray-700">{message}</p>
        )}

        <AForm label="Ya tengo una cuenta" href="/login" />
      </section>
    </form>
  );
};

export default SignUpForm;
