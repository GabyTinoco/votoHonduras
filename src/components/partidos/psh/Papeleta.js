import React, { Component} from "react"
import Presidente from "./Presidente"
import Alcaldes from "./Alcaldes";
import Diputados from "./Diputados";
class Papeleta extends Component {
  render () {
      return (
        <section>
            <div class="w-full h-screen bg-center bg-no-repeat bg-cover papeleta">
                <div class="w-full h-screen bg-opacity-50 bg-black flex justify-center items-center">
                    <div class="mx-4 text-center text-white">
                        <h1 class="font-bold text-6xl mb-4">Candidatos elecciones 2021</h1>
                        <h2 class="font-bold text-3xl mb-12">¡Cónoce tus opciones!</h2>    
                    </div>
                </div>
            </div>
            <section>
                <div className = "presidente"><Presidente/></div>
                <div className = "alcaldes"><Alcaldes/></div>
                <div className = "diputados"><Diputados/></div>      
            </section>                   
    </section>   
      )
  }
}

export default Papeleta