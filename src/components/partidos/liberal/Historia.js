import React from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const Historia = () => {
  return (
    <section class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
        <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Historia del Partido Liberal</h1>
        <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="5 de febrero de 1891"
                iconStyle={{ background: 'rgb(216, 30, 5)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Céleo Arias </h3>
                <p>
                    Creador de la fundación orgánica del Partido Liberal. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1887"
                iconStyle={{ background: 'rgb(216, 30, 5)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Folleto "Mis Ideas"</h3>
                <p>
                    Colección de ideas de los derechos del hombre proclamados por la Revolución Francesa y de las doctrinas Anglo-Americanas de gobierno representativo, 
                    que Arias proclamó como la filosofía y programa del Partido Liberal. Se constituyó en el líder reconocido del Partido Liberal, pero permitió que su nombre 
                    más bien que su programa simbolizara la organización.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1890 -1891"
                iconStyle={{ background: 'rgb(216, 30, 5)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Muerte de Céleo Areas</h3>       
                <p>
                    Policarpo Bonilla atraería al Partido Liberal la filosofía de la Liga Liberal, fundando así el actual Partido Liberal de Honduras2.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="1932"
                iconStyle={{ background: 'rgb(216, 30, 5)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">David Masso Hernández asume papel de liderazgo</h3>
                <p>
                    Se declara como partido de Izquierda democrática, así el PLH mantiene su ideología liberalismo social o Centroizquierda hasta finales del siglo XX.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Años 80 - Años 90"
                iconStyle={{ background: 'rgb(216, 30, 5)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Nueva era democrática</h3>
                <p>
                    La Asamblea Nacional emitió una nueva Constitución Política de Honduras y que rige hasta estas fechas, bajo la misma, se señala elecciones generales presidenciales en las 
                    que el ganador fue el Doctor Roberto Suazo Córdova con contundencia y amplia mayoría sobre el candidato conservador; su sucesor fue el Ingeniero José Azcona del Hoyo del mismo partido 
                    liberal, en las próximas elecciones de 1989 el gobierno fue conservador, logrando de nuevo la presidencia en 1994 con  la victoria del Abogado Carlos Roberto Reina, de igual forma, 
                    continua el partido en el poder al ganar las elecciones en 1997 el Ingeniero Carlos Roberto Flores Facussé.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Siglo XXI"
                iconStyle={{ background: 'rgb(216, 30, 5)', color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">Golpe de Estado y Ruptura del Partido</h3>
                <p>
                    El presidente Zelaya fue arrestado por los militares y por  el Congreso de Honduras, después fue expulsado del país en un operativo militar el 28 de junio de 2009. Fue sucedido por Roberto Micheletti. Si bien el periodo transitorio de Micheletti, 
                ha sido reconocido como gobierno de iure por todos los poderes del estado y las instituciones oficiales hondureñas; todos los organismos de la comunidad internacional OEA, ONU, SICA, ALBA, FMI, 
                Banco Mundial y demás países del mundo lo consideran por unanimidad un mandatario de facto. Zelaya, junto a una gran cantidad de organizaciones populares fundaron un nuevo partido al que 
                se han adherido muchos ex militantes del Partido Liberal de Honduras, constituyendo una ruptura más en este histórico instituto político.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
        
    </div>
</section>
  )
}

export default Historia



