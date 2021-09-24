import React, { Component} from "react"
import Presidente from "./Presidente"
import Alcaldes from "./Alcaldes";
import Diputados from "./Diputados";


class Papeleta extends Component {
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
            presidente: !this.state.presidente,
            alcaldes: this.state.alcaldes,
            diputados: this.state.diputados
        })
    }

    diputados () {
       this.setState({
           diputados: !this.state.diputados,
           presidente: this.state.presidente,
           alcaldes: this.state.alcaldes
       })
    }

    operation () {
        this.setState({
            showMe: !this.state.showMe
        })
     }

    alcaldes () {
        this.setState({
            alcaldes: !this.state.alcaldes,
            diputados: this.state.diputados,
            presidente: this.state.presidente,
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
            !this.state.presidente?
                <section class="container py-16 md:py-20 mx-auto" id="diputadosLiberal">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Candidato Presidencial</h1>
                    <Presidente/>           
                </section>
            : null
            }
            {
                !this.state.alcaldes?
                    <Alcaldes/>     
                : null
            }    
            {
                !this.state.diputados?
                    <Diputados/>
                : null
            }                       
    </section>   
      )
  }
}

export default Papeleta