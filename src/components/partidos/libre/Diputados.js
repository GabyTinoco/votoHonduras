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