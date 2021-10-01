import React, { Component} from "react"
import Cortes from "../../../svg/Cortes";
import FranciscoMorazan from "../../../svg/FranciscoMorazan";
import Atlantida from "../../../svg/Atlantida";
import Choluteca from "../../../svg/Choluteca";

import DiputadosCortes from "./diputados/Cortes";
import DiputadosFranciscoMorazan from "./diputados/FranciscoMorazan"
import DiputadosAtlantida from "./diputados/Atlantida"
import DiputadosCholuteca from "./diputados/Choluteca";

class Diputados extends Component {
    constructor() {
        super()
        this.state = {
            diputadosCT: true,
            diputadosFM: true,
            diputadosAT: true,
            diputadosCH: true,
        }
    }

    diputadosCT () {
        this.setState({
            diputadosCT: !this.state.diputadosCT,
            diputadosFM: this.state.diputadosFM,
            diputadosAT: this.state.diputadosAT,
            diputadosCH: this.state.diputadosCH
        })
    }

    diputadosAT () {
        this.setState({
            diputadosAT: !this.state.diputadosAT,
            diputadosFM: this.state.diputadosFM,
            diputadosCT: this.state.diputadosCT,
            diputadosCH: this.state.diputadosCH
        })
    }

    diputadosFM () {
        this.setState({
            diputadosFM: !this.state.diputadosFM,
            diputadosAT: this.state.diputadosAT,
            diputadosCT: this.state.diputadosCT,
            diputadosCH: this.state.diputadosCH
        })
    }

    diputadosCH () {
        this.setState({
            diputadosCH: !this.state.diputadosCH,
            diputadosFM: !this.state.diputadosFM,
            diputadosAT: this.state.diputadosAT,
            diputadosCT: this.state.diputadosCT,
        })
    }

  render () {
      return (
        <section className="container py-16 md:py-20 mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none"> Canditados a diputados</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-12">
                <div class="shadow px-4 py-4 bg-primary-departamentos  group rounded" onClick = { () => this.diputadosCT()}>
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
                <div class="shadow px-4 py-4 bg-primary-departamentos group rounded" onClick = { () => this.diputadosFM()}>
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
                <div class="shadow px-4 py-4 bg-primary-departamentos group rounded" onClick = { () => this.diputadosAT()}>
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
                <div class="shadow px-4 py-4 bg-primary-departamentos group rounded"onClick = { () => this.diputadosCH()}>
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
            { 
            !this.state.diputadosCT?
                <DiputadosCortes/>
              : null
            }
            { 
            !this.state.diputadosFM?
               <DiputadosFranciscoMorazan/>
              : null
            }
            { 
            !this.state.diputadosAT?
               <DiputadosAtlantida/>
              : null
            }
            { 
            !this.state.diputadosCH?
               <DiputadosCholuteca/>
              : null
            }
        </section>
         
      )
  }
}

export default Diputados