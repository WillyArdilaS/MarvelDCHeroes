import {useNavigate } from "react-router-dom"

export const LoginPage = () => {
  const navigate = useNavigate();

  const logIn = () => {
      navigate("/home", {
        replace: true,
    })
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <button onClick={logIn}
      className="bg-blue-600 px-6 py-4 rounded-lg text-white font-bold hover:text-yellow-500 hover:scale-110 transition-colors">
        Ingresar ✔
      </button>
    </div>
  )
}