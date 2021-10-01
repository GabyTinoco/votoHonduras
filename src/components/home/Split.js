import React from "react"
import SplitSection from '../SplitSection';
import Button from '../Button';
import SvgCharts from '../../svg/SvgCharts'; 
import Encuestas from "../../svg/Encuestas";
import Mapa from  "../../svg/Mapa";


const Split = () => {
    return (
    <section>
      <SplitSection
      id="services"
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Mapa de Sentimientos</h1>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Our team of enthusiastic marketers will analyse and evaluate how your company stacks
            against the closest competitors
          </p>
          <Button size="lg">Explorar</Button>
        </div>
      }
  
      secondarySlot={<Mapa/>}
    />
    <SplitSection
      reverseOrder
      primarySlot={
        <div className="lg:pl-32 xl:pl-48">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Encuestas</h1>
          <p className="mt-8 text-xl font-light leading-relaxed">
             Tu desición cuenta, participa y conoce los resultados
          </p>
          <Button size="lg">Explorar</Button>
        </div>
      }
      secondarySlot={<Encuestas />}
    />
    <SplitSection
      primarySlot={
        <div className="lg:pr-32 xl:pr-48">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Proyecciones</h1>
          <p className="mt-8 text-xl font-light leading-relaxed">
            Conoce en tiempo real los resultados de las elecciones generales 2021
          </p>
          <Button size="lg">Explorar</Button>
        </div>
      }
      secondarySlot={<SvgCharts />}
    />
    </section>
    )
}

export default Split