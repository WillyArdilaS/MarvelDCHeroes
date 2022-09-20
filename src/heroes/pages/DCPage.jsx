import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import heroesApi from "../../api/HeroesAPI"
import { Loader } from "../components/Loader"

export const DCPage = () => {
  const [heroes, setHeroes] = useState([])

  useEffect(() => {
    getHeroes();
  }, [])

  const getHeroes = async() => {
    try {
      const response = await heroesApi.get("/superheroes?tipo=heroes-dc");
      setHeroes(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  if(heroes.length < 20) {
    return(
      <div className="flex justify-center items-center mt-72">
        <Loader />
      </div>
    )
  }

  return (
    <>
      <h1 className="m-4 text-6xl text-center font-bold uppercase animate__animated animate__zoomIn">
        <span className="text-yellow-500"> Top 20 </span>
        <br /> Mejores héroes de <span className="text-yellow-500"> DC </span>
      </h1>

      <div className="grid sm:grid-cols-4 gap-4">
        {heroes.map((hero) => (
          <div key={hero.id} className="m-8 rounded-t-2xl bg-gray-900 shadow-2xl"> 
            <img src={hero.imagen} alt={hero.nombre} className="w-full h-3/5 rounded-t-2xl" />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold"> {hero.nombre} </div>
              <p className="text-gray-500 text-base text-left"> {hero.descripcion.substring(0, 200).concat("...")} </p>
              <Link to={`/hero/${hero.id}`}>
                <button className="w-full mt-8 mb-6 px-8 py-2 rounded-lg font-bold uppercase
                bg-blue-500 hover:bg-blue-700 transition-colors"> Ver Perfil </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}