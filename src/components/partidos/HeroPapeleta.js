import React, { Component} from "react"
import Button from '../Button';
import Cortes from "../../svg/Cortes";
import FranciscoMorazan from "../../svg/FranciscoMorazan";
import Atlantida from "../../svg/Atlantida";
import Choluteca from "../../svg/Choluteca";

class HeroPapeleta extends Component {
    constructor() {
        super()
        this.state = {
            showMe: true,
            diputados: true,
            alcaldes: true,
            presidente: true,
            diputadosFM: true,
        }
    }

    presidente () {
        this.setState({
            presidente: !this.state.presidente
        })
    }

    diputados () {
       this.setState({
           diputados: !this.state.diputados
       })
    }

    operation () {
        this.setState({
            showMe: !this.state.showMe
        })
     }

    alcaldes () {
        this.setState({
            alcaldes: !this.state.alcaldes
        })
    }

    diputadosFM () {
        this.setState({
          diputadosFM: !this.state.diputadosFM
        })
    }

  render () {
      return (
        <section>
            <div class="w-full h-screen bg-center bg-no-repeat bg-cover papeleta">
                <div class="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
                    <div class="mx-4 text-center text-white">
                        <h1 class="font-bold text-6xl mb-4">Candidatos elecciones 2021</h1>
                        <h2 class="font-bold text-3xl mb-12">¡Cónoce tus opciones !</h2>

                        <button type="button" className= "xl bg-primary-vh hover:bg-primary-darker-vh rounded-md px-4 py-3 text-white mr-2" 
                            onClick = { () => this.presidente()} >
                            Presidente
                        </button>
                        <button type="button" className= "xl bg-primary-vh hover:bg-primary-darker-vh rounded-md px-4 py-3 text-white ml-2"  
                            onClick = { () => this.alcaldes()}>     
                            Alcaldes                          
                        </button>
                        <button type="button" className= "xl bg-primary-vh hover:bg-primary-darker-vh rounded-md px-4 py-3 text-white ml-2" 
                            onClick = { () => this.diputados()}>
                            Diputados
                        </button>                          
                    </div>
                </div>
            </div>
            {
            this.state.presidente?
                <section class="container py-16 md:py-20 mx-auto" id="diputadosLiberal">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Candidato Presidencial</h1>
                    
                </section>
            : null
            }
              {
                this.state.alcaldes?
                    <section class="container py-16 md:py-20 mx-auto" id="diputadosLiberal">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none"> Candidatos a alcaldes</h1>
                    </section>
                 : null
            }    
            {
                this.state.diputados?
                    <section className="container py-16 md:py-20 mx-auto" id="diputadosLiberal">
                        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none"> Canditados a Diputados</h1>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 pt-10 md:pt-12">
                            <div class="shadow px-4 py-4 bg-primary-departamentos  group rounded">
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
                            <div class="shadow px-4 py-4 bg-primary-departamentos group rounded">
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
                            <div class="shadow px-4 py-4 bg-primary-departamentos group rounded">
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
                            <div class="shadow px-4 py-4 bg-primary-departamentos group rounded">
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
                    </section>
                : null
            }                       
    </section>   
      )
  }
}

export default HeroPapeleta