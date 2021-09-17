import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Historia = () => {
  return (
    <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Historia del Partido Nacional</h1>
        <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="27 de febrero de 1902"
            iconStyle={{ background: 'rgb(39, 13, 224)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">El Partido Progresista se fusionó con el Movimiento Manuelista </h3>
            <p>
                Esto ocurrió en la ciudad capital Tegucigalpa, dando comienzo a la Primera Gran Convención Nacional que tuvo 
                el respaldo popular de 30 mil personas. Se debatió ampliamente la búsqueda de un nombre para el joven instituto político. 
                Unos participantes deseaban ponerle el nombre de Partido Nacional porque en él tenían cabida todos los sectores sociales 
                de Honduras, otros eran del criterio de llamarle Partido Nacional Progresista, ya que sus bases estaban conformadas por 
                gente humilde y había que responder a sus expectativas.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1913-1921"
            iconStyle={{ background: 'rgb(39, 13, 224)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Partido Nacional Demócratico</h3>
            <p>
                Debido a la muerte prematura de Membreño Vásquez, el gobernante Tiburcio Carías Andino y Marcos Carías Andino tomaron las riendas del mismo en 1921, 
                año desde el cual se conoce como Partido Nacional de Honduras
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="1924"
            iconStyle={{ background: 'rgb(39, 13, 224)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Estalla la Revolución Reivindicatoria</h3>       
            <p>
                La ciudad de Tegucigalpa se convirtió en la primera capital de Latinoamérica en ser bombardeada, la revolución contaba 
                con dos aviones de los cuales los aviadores arrojaron a mano las bombas, las fuerzas gubernamentales solo contaban con las aeronaves británicas Bristol F 2B. 
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="9 de febrero - 24 de marzo 1924"
            iconStyle={{ background: 'rgb(39, 13, 224)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Carías Andino tomó el poder</h3>
            <p>
            López Gutiérrez se vio forzado a abandonar el país, en su sustitución quedaría un Consejo de 
                Ministros encabezado por el Doctor Francisco Bueso Cuéllar administrando las riendas de la deteriorada nación. De nuevo el embajador Norteamericano Míster Franklin E. 
                Morales pidió la intervención de militares de su país y mandó anclar el crucero “USS Milwakee” en el Golfo de Fonseca, de donde desembarcaron 200 US marines que un 
                11 de marzo de ese año, a las 11:00 a. m., sitiaron la ciudad capital de Tegucigalpa.
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
</section>
  )
}

export default Historia



