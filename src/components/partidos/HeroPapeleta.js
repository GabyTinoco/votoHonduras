import React from "react"
const HeroPapeleta = () => {
  return (
    <div class="w-full h-screen bg-center bg-no-repeat bg-cover papeleta">
    <div class="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
        <div class="mx-4 text-center text-white">
            <h1 class="font-bold text-6xl mb-4">Elecciones 2021</h1>
            <h2 class="font-bold text-3xl mb-12">¡Cónoce tus opciones !</h2>
            <div>
                <a href="" class="bg-blue-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-blue-600 mr-2">
                    Presidentes
                </a>
                <a href="" class="bg-red-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2">
                    Alcaldes
                </a>
                <a href="" class="bg-red-500 rounded-md font-bold text-white text-center px-4 py-3 transition duration-300 ease-in-out hover:bg-red-600 ml-2">
                    Diputados
                </a>
            </div>
        </div>
    </div>
</div>
  )
}

export default HeroPapeleta