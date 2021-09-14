import React from "react"
import Cortes from "../../svg/Cortes";
import FranciscoMorazan from "../../svg/FranciscoMorazan";
import Atlantida from "../../svg/Atlantida";

const Departamentos = () => {
  return (
    <section class="container py-16 md:py-20 mx-auto" id="departamentos">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Diputados</h1>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-12">
        <div class="shadow px-8 py-8 hover:bg-primary group rounded">
            <div class="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                <div class="block group-hover:hidden">
                    <Cortes/>
                </div>
            </div>
            <div class="text-center">
                <h3 class="font-semibold  text-lg lg:text-xl text-primary uppercase pt-8 group-hover:text-yellow">
                    Cortés</h3>
            </div>
        </div>
        <div class="shadow px-8 py-8 hover:bg-primary group rounded">
            <div class="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                <div class="block group-hover:hidden">
                    <FranciscoMorazan/>
                </div>
            </div>
            <div class="text-center">
                <h3 class="font-semibold  text-lg lg:text-xl text-primary uppercase pt-8 group-hover:text-yellow">
                    Francisco Morazán</h3>
            </div>
        </div>
        <div class="shadow px-8 py-8 hover:bg-primary group rounded">
            <div class="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                <div class="block group-hover:hidden">
                    <Atlantida/>
                </div>
            </div>
            <div class="text-center">
                <h3 class="font-semibold  text-lg lg:text-xl text-primary uppercase pt-8 group-hover:text-yellow">
                    Atlántida
                </h3>
            </div>
        </div>
    </div>
</section>
  )
}

export default Departamentos