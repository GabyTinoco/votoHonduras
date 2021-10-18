import React, { Component} from "react"
import Cortes from "../../../svg/Cortes";
import FranciscoMorazan from "../../../svg/FranciscoMorazan";
import Atlantida from "../../../svg/Atlantida";
import Choluteca from "../../../svg/Choluteca";

import DiputadosCortes from "./diputados/Cortes";
import DiputadosFranciscoMorazan from "./diputados/FM";
import DiputadosAtlantida from "./diputados/Atlantida"
import DiputadosCholuteca from "./diputados/Choluteca";

class Diputados extends Component {


  render () {
      return (
        <section className="container py-16 md:py-20 mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none"> Canditados a diputados</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-12">
                <div class="shadow px-4 py-4 bg-primary-departamentos  group rounded" id = "cortes">
                    <div class="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                        <div class="block group-hover:hidden">
                            <Cortes/>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold  text-lg lg:text-xl text-primary uppercase pt-12 group-hover:text-yellow">
                            Cortés</h3>
                    </div>
                </div>
                <div class="shadow px-4 py-4 bg-primary-departamentos group rounded" id = "fm">
                    <div class="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                        <div class="block group-hover:hidden">
                            <FranciscoMorazan/>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold  text-lg lg:text-xl text-primary uppercase pt-12 group-hover:text-yellow">
                            Francisco Morazán</h3>
                    </div>
                </div>
                <div class="shadow px-4 py-4 bg-primary-departamentos group rounded" id = "atlantida">
                    <div class="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                        <div class="block group-hover:hidden">
                            <Atlantida/>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold  text-lg lg:text-xl text-primary uppercase pt-12 group-hover:text-yellow">
                            Atlántida
                        </h3>
                    </div>
                </div>
                <div class="shadow px-4 py-4 bg-primary-departamentos group rounded" id = "choluteca">
                    <div class="text-center w-24 xl:w-28 h-24 xl:h-28 mx-auto">
                        <div class="block group-hover:hidden">
                            <Choluteca/>
                        </div>
                    </div>
                    <div class="text-center">
                        <h3 class="font-semibold  text-lg lg:text-xl text-primary uppercase pt-12 group-hover:text-yellow">
                            Choluteca
                        </h3>
                    </div>
                </div>
            </div>
            <section>
                <div className = "cortes"><DiputadosCortes/></div>
                <div className = "fm"><DiputadosFranciscoMorazan/></div>
                <div className = "atlantida"><DiputadosAtlantida/></div>
                <div className = "choluteca"><DiputadosCholuteca/></div>
            </section>
        </section>
         
      )
  }
}

export default Diputados