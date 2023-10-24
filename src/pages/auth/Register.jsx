import { useState } from "react";
import {
    RiMailLine,
    RiLock2Line,
    RiEyeLine,
    RiEyeOffLine,
} from "react-icons/ri";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if ([email, password].includes("")) {
            toast.error("😒Todos los campos son obligatorios", {
                theme: "dark",
            });
            return;
        }
        if (password.length < 6) {
            toast.error("😒El password debe contener al menos 6 caracteres", {
                theme: "dark",
                position: "top-center",
            });
            return;
        }
        console.log(email, password);
    };
    return (
        <div className="bg-white p-8 rounded-lg md:w-96 w-full">
            <div className="mb-10">
                <h1 className="text-3xl text-center uppercase font-bold">
                    REGISTRO
                </h1>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Nombre(s)"
                        className="border border-gray-200 outline-none py-2 px-8 rounded-lg w-full "
                    />
                </div>
                <div className="relative">
                    <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="text"
                        placeholder="Apellido(s)"
                        className="border border-gray-200 outline-none py-2 px-8 rounded-lg w-full "
                    />
                </div>
                <div className="relative">
                    <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Correo electrónico"
                        className="border border-gray-200 outline-none py-2 px-8 rounded-lg w-full "
                    />
                </div>
                <div className="relative">
                    <RiLock2Line className="absolute top-1/2 -translate-y-1/2 text-gray-500 left-2" />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        placeholder="Contraseña"
                        className="border border-gray-200 outline-none py-2 px-8 rounded-lg w-full"
                    />
                    {showPassword ? (
                        <RiEyeLine
                            onClick={handleShowPassword}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
                        />
                    ) : (
                        <RiEyeOffLine
                            onClick={handleShowPassword}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
                        />
                    )}
                </div>
                <div className="relative">
                    <RiLock2Line className="absolute top-1/2 -translate-y-1/2 text-gray-500 left-2" />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        type={showPassword ? "text" : "password"}
                        placeholder="Confirmar Contraseña"
                        className="border border-gray-200 outline-none py-2 px-8 rounded-lg w-full"
                    />
                    {showPassword ? (
                        <RiEyeLine
                            onClick={handleShowPassword}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
                        />
                    ) : (
                        <RiEyeOffLine
                            onClick={handleShowPassword}
                            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
                        />
                    )}
                </div>
                <div>
                    <button
                        type="submit"
                        className="bg-sky-600 text-white w-full py-2 px-6 rounded-lg mt-4
                        hover:scale-y-105 transition-all"
                    >
                        Registrarse
                    </button>
                </div>
            </form>
            <div className="text-center mt-6">
                Ya tienes una cuenta?{" "}
                <Link
                    to={"/"}
                    className="text-sky-600 font-medium hover:underline transition-all"
                >
                    {" "}
                    Inicia Sesión
                </Link>
            </div>
        </div>
    );
};

export default Register;
