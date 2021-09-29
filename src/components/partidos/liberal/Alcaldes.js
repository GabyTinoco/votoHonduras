import React, { Component} from "react"
import Cortes from "../../../svg/Cortes";
import FranciscoMorazan from "../../../svg/FranciscoMorazan";
import Atlantida from "../../../svg/Atlantida";
import Choluteca from "../../../svg/Choluteca";

import AlcadesCortes from "./alcaldes/Cortes";
import AlcaldesFranciscoMorazan from "./alcaldes/FranciscoMorazan";
import AlcaldesAtlantida from "./alcaldes/Atlantida"
import AlcaldesCholuteca from "./alcaldes/Choluteca";

class Alcaldes extends Component {
    constructor() {
        super()
        this.state = {
            alcaldesCT: true,
            alcaldesFM: true,
            alcaldesAT: true,
            alcaldesCH: true,
        }
    }

    alcaldesCT () {
        this.setState({
            alcaldesCT: !this.state.alcaldesCT,
            alcaldesFM: this.state.alcaldesFM,
            alcaldesAT: this.state.alcaldesAT,
            alcaldesCH: this.state.alcaldesCH
        })
    }

    alcaldesAT () {
        this.setState({
            alcaldesAT: !this.state.alcaldesAT,
            alcaldesFM: this.state.alcaldesFM,
            alcaldesCT: this.state.alcaldesCT,
            alcaldesCH: this.state.alcaldesCH
        })
    }

    alcaldesFM () {
        this.setState({
            alcaldesFM: !this.state.alcaldesFM,
            alcaldesAT: this.state.alcaldesAT,
            alcaldesCT: this.state.alcaldesCT,
            alcaldesCH: this.state.alcaldesCH
        })
    }

    alcaldesCH () {
        this.setState({
            alcaldesCH: !this.state.alcaldesCH,
            alcaldesFM: !this.state.alcaldesFM,
            alcaldesAT: this.state.alcaldesAT,
            alcaldesCT: this.state.alcaldesCT,
        })
    }

  render () {
      return (
        <section className="container py-16 md:py-20 mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none"> Canditados a Alcaldes</h1>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-12">
                <div class="shadow px-4 py-4 bg-primary-departamentos  group rounded" onClick = { () => this.alcaldesCT()}>
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
                <div class="shadow px-4 py-4 bg-primary-departamentos group rounded" onClick = { () => this.alcaldesFM()}>
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
                <div class="shadow px-4 py-4 bg-primary-departamentos group rounded" onClick = { () => this.alcaldesAT()}>
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
                <div class="shadow px-4 py-4 bg-primary-departamentos group rounded" onClick = { () => this.alcaldesCH()}>
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
            !this.state.alcaldesCT?
               <AlcadesCortes/>
              : null
            }
            { 
            !this.state.alcaldesFM?
               <AlcaldesFranciscoMorazan/>
              : null
            }
            { 
            !this.state.alcaldesAT?
               <AlcaldesAtlantida/>
              : null
            }
            { 
            !this.state.alcaldesCH?
               <AlcaldesCholuteca/>
              : null
            }
        </section>
         
      )
  }
}

export default Alcaldes