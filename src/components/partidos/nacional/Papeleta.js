import React, { Component} from "react"
import Presidente from "./Presidente"
import Alcaldes from "./Alcaldes";
import Diputados from "./Diputados";


class Papeleta extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: 0
        }
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
                             onClick={() => this.setState({ selected: 0 })} >
                            Presidente
                        </button>
                        <button type="button" className= "xl bg-primary-vh hover:bg-primary-darker-vh rounded-md px-4 py-3 text-white ml-2"  
                          onClick={() => this.setState({ selected: 1 })} >
                            Alcaldes                          
                        </button>
                        <button type="button" className= "xl bg-primary-vh hover:bg-primary-darker-vh rounded-md px-4 py-3 text-white ml-2" 
                             onClick={() => this.setState({ selected: 2 })} >
                            Diputados
                        </button>                          
                    </div>
                </div>
            </div>
            {(this.selected === 0) && <Presidente/>}
            {(this.selected === 1) && <Alcaldes/>}      
            {(this.selected === 2) && <Diputados/>}          
    </section>   
      )
  }
}

export default Papeleta