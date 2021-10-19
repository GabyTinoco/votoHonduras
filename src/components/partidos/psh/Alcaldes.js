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
  render () {
      return (
        <section className="container py-16 md:py-20 mx-auto">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none"> Canditados a Alcaldes</h1>
      
            <section>
                <div className = "cortes"><AlcadesCortes/></div>
                <div className = "fm"><AlcaldesFranciscoMorazan/></div>
                <div className = "atlantida"><AlcaldesAtlantida/></div>
                <div className = "choluteca"><AlcaldesCholuteca/></div>
            </section>
        </section>
         
      )
  }
}

export default Alcaldes