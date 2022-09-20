import marvel from "../../assets/Marvel Logo.png"
import dc from "../../assets/DC Logo.png"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
  const navigate = useNavigate();

  const onMarvel = () => {
    navigate("/marvel")
  }

  const onDC = () => {
    navigate("/dc")
  }

  return (
    <>
      <h1 className="mt-12 text-6xl text-center font-bold uppercase animate__animated animate__zoomIn">
        ¿Qué <span className="text-yellow-500"> team </span> eres 🤔?
      </h1>

      <div className="flex flex-col justify-center items-center mt-20">
        <img onClick={onMarvel} src={marvel} alt="Marvel Logo" className="w-1/5 m-5 rounded-lg cursor-pointer 
        animate__animated animate__infinite animate__pulse"/>
        <img onClick={onDC} src={dc} alt="Marvel Logo" className="w-1/5 m-5 rounded-lg cursor-pointer
        animate__animated animate__infinite animate__pulse"/>
      </div>
    </>
  )
}