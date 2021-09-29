import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Historia = () => {
  return (
    <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Historia del Partido Libertad y Refundación</h1>
        <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="28 de junio del 2019"
            iconStyle={{ background: 'rgb(228, 34, 32)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Antecedentes</h3>
            <p>
            La madrugada del 28 de junio de 2009, Manuel Zelaya Rosales fue depuesto ilegalmente de la presidencia de la república y 
            luego expatriado a Costa Rica por las fuerzas armadas. Como respuesta contra dicha acción, los seguidores del derrocado mandatario, 
            además de sectores independientes que rechazaron el Deposición Presidencial, fundaron al poco tiempo el "Frente Nacional Contra la 
                Deposición Presidencial", que demandaba la restitución de Zelaya al poder. Al no ser esto posible, se pasó a llamar en 2010 
                (cuando terminaría el mandato de Zelaya) "Frente Nacional de Resistencia Popular" (FNRP).
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="29 de mayo del 2011"
            iconStyle={{ background: 'rgb(228, 34, 32)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Fundación</h3>
            <p>
                El derrocado presidente de Honduras, Manuel Zelaya, manifestó su intención de crear un "frente amplio de resistencia popular" 
                igual al creado en Uruguay, que ganó dos elecciones presidenciales consecutivas.5​ Este fue aprobado por una Asamblea Extraordinaria 
                del Frente Nacional de Resistencia Popular, celebrada en la ciudad de Comayagüela el 26 de junio de 2011.6​ El nuevo partido 
                político pasaría a llamarse "Frente Amplio de Resistencia Popular" (FARP), nombre que tuvo que cambiarse ya que era demasiado 
                parecido al de otro partido político en proceso de formación, el Frente Amplio Político Electoral en Resistencia (FAPER); 
                por lo que, luego de otra Asamblea Extraordinaria llevada a cabo el 25 de septiembre del mismo año, se decidió el nombre de 
                "Partido Resistencia Popular" (PRP)7​ Finalmente, una semana después, el 2 de octubre; la Coordinación Nacional del Frente Nacional 
                de Resistencia Popular decidió por unanimidad el nombre definitivo de "Partido Libertad y Refundación" (LIBRE)
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="El 30 de octubre del 2011"
            iconStyle={{ background: 'rgb(228, 34, 32)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title"> Inscripción al Tribunal Supremo Electoral</h3>       
            <p>
                El 30 de octubre, Zelaya entregó al Tribunal Supremo Electoral 82 mil firmas recaudadas por todo el país, como el primer paso 
                para la inscripción del nuevo partido político; de las cuales fueron validadas 63,980; superando el mínimo legal requerido de 
                43 mil firmas. Además de las firmas, LIBRE presentó también sus estatutos, su declaración de principios,
                 un programa de acción política, y una estructura organizacional en casi todo el país.
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="11 de febrero del 2012"
            iconStyle={{ background: 'rgb(228, 34, 32)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Presentación de candidata presidencial</h3>
            <p>
                    El 11 de febrero de 2012, el partido en formación presentó oficialmente a su futura candidata a la presidencia, la
                    ex primera dama Xiomara Castro, esposa de Manuel Zelaya, quien formaría parte del proceso electoral como una candidata escogida 
                    por consenso entre los distintos movimientos dentro del partido Libre.12​ Castro se perfilaba como posible candidata desde 
                    el retorno de Zelaya a Honduras, en vista de que la constitución del país no permite la reelección presidencia.
            </p>
        </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
</section>
  )
}

export default Historia



