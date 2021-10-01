import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Historia = () => {
  return (
    <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Historia del Partido Salvador de Honduras</h1>
        <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="12 de noviembre de 2019"
            iconStyle={{ background: 'rgb(77, 199, 239)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Presentación de documentos</h3>
            <p>
                Salvador Nasralla presentó al CNE los requisitos para inscribir su nuevo partido político, 
                Nasralla, quien fundó el PAC, dijo que su nuevo instituto se llamara Partido Salvador de Honduras (PSH).
            </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="7 de septiembre de 2020"
            iconStyle={{ background: 'rgb(77, 199, 239)', color: '#fff' }}
        >
            <h3 className="vertical-timeline-element-title">Inscripción</h3>
            <p>
            Consejo Nacional Electoral de Honduras (CNE) oficializó la inscripción del PSH. El PSH presentó 65 694 firmas y 
            la organización de las autoridades departamentales y municipales del partido
            </p>
        </VerticalTimelineElement>
      
        </VerticalTimeline>
    </div>
</section>
  )
}

export default Historia



