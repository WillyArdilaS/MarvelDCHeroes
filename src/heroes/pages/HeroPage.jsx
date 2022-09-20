import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"
import heroesAPI from "../../api/HeroesAPI";
import { Loader } from "../components/Loader"

export const HeroPage = () => {
  const navigate = useNavigate();
  const {heroID} = useParams();

  const [hero, setHeroe] = useState([])

  useEffect(() => {
    getHero();
  }, [])
  
  const getHero = async() => {
    try {
      const response = await heroesAPI.get(`/superheroes/${heroID}`);
      setHeroe(response.data);

    } catch (error) {
      console.log(error);
    }
  }

  const navigationBack = () => {
    navigate(-1);
  }

  if(hero.length == 0) {
    return(
      <div className="flex justify-center items-center mt-72">
        <Loader />
      </div>
    )
  }

  return (
    <>
      <div key={hero.id} className="w-1/1 sm:w-1/2 grid sm:grid-cols-2 m-8 rounded-2xl bg-gray-900 shadow-2xl 
      animate__animated animate__fadeInLeft">
        <img src={hero.imagen} alt={hero.id} className="w-full  h-full rounded-l-2xl"/>
        <div className="px-6 py-4"> 
          <div className="mb-2 text-xl">
            <span className="text-yellow-500 font-bold"> Nombre: </span> 
            {hero.nombre}
          </div>

          <div className="mb-2 text-xl">
            <span className="text-yellow-500 font-bold"> Editorial: </span> 
            {hero.editorial}
          </div>

          <div className="mb-2 text-xl">
            <span className="text-yellow-500 font-bold"> Estreno: </span> 
            {hero.estreno}
          </div>

          <span className="text-yellow-500 text-xl font-bold"> Descripción: </span>
          <p className="mt-4 mb-4 text-gray-400 text-base text-left"> {hero.descripcion} </p>

          <span className="text-yellow-500 text-xl font-bold"> Poderes: </span>
          <span className="inline-block mb-2 ml-4 px-3 py-1 rounded-full text-gray-700 text-sm font-semibold bg-gray-200"> 
          {hero.poderes} </span>

          <button onClick={navigationBack} className="w-full mt-8 mb-6 px-8 py-2 rounded-lg font-bold uppercase bg-indigo-500
          hover:bg-indigo-700 transition-colors"> Regresar </button>
        </div>
      </div>
    </>
  )
}