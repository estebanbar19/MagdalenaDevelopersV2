import React from "react";
import '../styles/Registrer.css'

function Registrer(){
    return(
<div className="min-h-screen bg-[#252831] grid grid-cols-1 lg:grid-cols-2">
    <div className="text-white flex flex-col items-center justify-center gap-8 p-8 max-w-lg mx-auto">
        <div className="flex flex-col gap-1 w-full">
            <h1 className="text-4xl font-medium">Crear cuenta</h1>
            <p className="text-gray-400">Registrate en la plataforma</p>
        </div>

        
        <form className="flex flex-col gap-4">
            <div>
                <label htmlFor="firtsName" className="text-gray-200">
                    Primer Nombre *
                </label>
                <input
                    type="text"
                    id="firtsName"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu primer nombre"
                />
            </div>

            <div>
                <label htmlFor="secondName" className="text-gray-200">
                    Segundo Nombre *
                </label>
                <input
                    type="text"
                    id="secondName"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu segundo nombre"
                />
            </div>

            <div>
                <label htmlFor="firstLastName" className="text-gray-200">
                    Primer apellido *
                </label>
                <input
                    type="text"
                    id="firstLastName"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu primer apellido"
                />
            </div>

            <div>
                <label htmlFor="secondLastName" className="text-gray-200">
                    Segundo apellido *
                </label>
                <input
                    type="text"
                    id="secondLastName"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu segundo apellido"
                />
            </div>

        
            <div>
            <label class="text-gray-200" htmlFor="sexo">
                    Sexo *
                <select id="sexo" className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                        name="sexo">
                <option value="">
                    Selecciona el sexo
                </option>
                <option value="M">
                    masculino
                </option>
                <option value="F">
                    femenino
                </option>
                    </select>
                </label>
            </div>

            <div>
            <label class="text-gray-200" htmlFor="tipoDocuments">
                    tipo de documento *
                <select id="tipoDocuments" className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                        name="tipoDocuments">
                <option value="">
                    Selecciona el tipo de documento
                </option>
                <option value="CC">
                    CC
                </option>
                <option value="CE">
                    CE
                </option>
                <option value="Pasaporte">
                    Pasaporte
                </option>

                    </select>
                </label>
            </div>

            <div>
                <label htmlFor="documents" className="text-gray-200">
                    No° de documento *
                </label>
                <input
                    type="text"
                    id="documents"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu numero de documento"
                />
            </div>

            <div>
                <label htmlFor="fechaNacimiento" className="text-gray-200">
                    Fecha de nacimiento *
                </label>
                <input
                    type="date"
                    id="fechaNacimiento"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                />
            </div>

            <div>
            <label class="text-gray-200" htmlFor="ciudadNacimiento">
                    Ciudad de nacimiento *
                <select id="ciudadNacimiento" className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                        name="ciudadNacimiento">
                <option value="">
                    Selecciona tu ciudad de nacimiento
                </option>
                <option value="Barranquilla">
                    Barranquilla
                </option>
                <option value="Santa Marta">
                    Santa Marta
                </option>
                <option value="Cartagena">
                    Cartagena
                </option>

                    </select>
                </label>
            </div>

            <div>
            <label class="text-gray-200" htmlFor="ciudadResidencia">
                    Ciudad de Residencia *
                <select id="ciudadResidencia" className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                        name="ciudadResidencia">
                <option value="">
                    Selecciona tu ciudad de Residencia
                </option>
                <option value="Barranquilla">
                    Barranquilla
                </option>
                <option value="Santa Marta">
                    Santa Marta
                </option>
                <option value="Cartagena">
                    Cartagena
                </option>

                    </select>
                </label>
            </div>
            
            <div>
                <label htmlFor="calleResidencia" className="text-gray-200">
                    calle de Residencia *
                </label>
                <input
                    type="text"
                    id="calleResidencia"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu calle de residenica"
                />
            </div>

            <div>
                <label htmlFor="numeroResidencia" className="text-gray-200">
                    No° de Residencia *
                </label>
                <input
                    type="text"
                    id="numeroResidencia"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu N° de residenica"
                />
            </div>
            

            <div>
                <label htmlFor="email" className="text-gray-200">
                    Correo electrónico *
                </label>
                <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu correo electrónico"
                />
            </div>
            <div>
                <label htmlFor="password" className="text-gray-200">
                    Contraseña *
                </label>
                <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    className="w-full py-2 px-4 bg-transparent border rounded-full mt-2 outline-none focus:border-indigo-400"
                    placeholder="Ingresa tu contraseña"
                />
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 order-2 md:order-1">
                <span className="text-gray-400">
                    ¿Ya tienes cuenta?{" "}
                    <a
                        href="/src/components/Login.js"
                        className="text-indigo-400 hover:text-indigo-500 transition-colors"
                    >
                        Ingresa
                    </a>
                </span>
                
            </div>
            <div className="mt-4 order-1 md:order-2">
                <button
                    type="submit"
                    className="w-full bg-indigo-700 p-2 rounded-full hover:bg-indigo-800 transition-colors"
                >
                    Crear cuenta
                </button>
            </div>
        </form>
    </div>
    <div className="bg hidden lg:block"></div>
</div>
    )

};

export default Registrer;