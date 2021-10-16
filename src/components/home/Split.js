import React from "react"
import SplitSection from '../SplitSection';
import Button from '../Button';
import SvgCharts from '../../svg/SvgCharts'; 
import Encuestas from "../../svg/Encuestas";
import Mapa from  "../../svg/Mapa";
import { Link } from "gatsby";


const Split = () => {
    return (
    <section className = "py-20 lg:pb-40" >
        <SplitSection
          id="services"
          primarySlot={
            <div className="lg:pr-32 xl:pr-48 lg:pb-40">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Mapa de Sentimientos</h1>
              <p className="mt-8 mb-8 text-xl font-light leading-relaxed">
                  El mapa de sentimientos es una característica donde podemos ver la aceptación digital de los candidatos o 
                  tendencias políticas basadas en un big data digital, encuestas e información de elecciones anteriores que nos ayudan a 
                  tener un mapa de calor o de interacción por partidos, candidatos o movimientos.
              </p>
              <Link activeClass="active"to="/mapa" target = "_blank" >
              <Button size="lg">Explorar</Button>
              </Link>
            </div>
          }
      
          secondarySlot={<Mapa/>}
        />
        <SplitSection
          id="services"
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48 lg:pb-40">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Encuestas</h1>
              <p className="mt-8 mb-8 text-xl font-light leading-relaxed">
              Nuestra publicaciones de encuestas son tomadas de nuestros afiliados &nbsp;
              <Link activeClass="active"to="honduencuestas.com" target = "_blank" >honduencuestas.com
              </Link> los cuales recolectan datos de manera masiva a
              nivel nacional, Honduencuestas tiene como fin poder trazar un mapa territorial de posicionamiento basado en el comportamiento, 
              decisión y afiliación política del electorado digital.
              </p>
              <Link activeClass="active"to="/encuestas" target = "_blank" >
              <Button size="lg">Explorar</Button>
              </Link>
            </div>
          }
          secondarySlot={<Encuestas />}
        />
    </section>
    )
}

export default Split