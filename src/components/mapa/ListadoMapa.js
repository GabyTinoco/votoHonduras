import React, { Component} from "react"
import PresidenteSVG from "../../svg/Presidente"
import AlcaldeSVG from "../../svg/Alcalde"
import DiputadoSVG from "../../svg/Diputado"

class ListadoEncuestas extends Component {
    constructor() {
        super()
        this.state = {
            diputados: true,
            alcaldes: true,
            presidentes: true,
        }
    }

    diputados () {
        this.setState({
            diputados: !this.state.diputados,
            alcaldes: this.state.alcaldes,
            presidentes: this.state.presidentes
        })
    }

    alcaldes() {
        this.setState({
            diputados: this.state.diputados,
            alcaldes: !this.state.alcaldes,
            presidentes: this.state.presidentes
        })
    }

    presidente () {
        this.setState({
            diputados: this.state.diputados,
            alcaldes: this.state.alcaldes,
            presidentes: !this.state.presidentes
        })
    }

    render () {
        return (
            <section class="bg-white border-b py-8">
                <div class="container mx-auto flex flex-wrap pt-4 pb-12">
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink encuesta"  onClick = { () => this.presidente()}>
                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">           
                            <div class="w-full font-bold text-xl text-gray-800 px-6">Presidentes</div>
                            <PresidenteSVG/>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink encuesta"  onClick = { () => this.alcaldes()}>
                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <div class="w-full font-bold text-xl text-gray-800 px-6">Alcaldes</div>
                            <AlcaldeSVG/>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink encuesta"  onClick = { () => this.diputados()}> 
                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <div class="w-full font-bold text-xl text-gray-800 px-6">Diputados</div>
                            <DiputadoSVG/>
                        </div>
                    </div>
                    { 
                        !this.state.presidentes?
                        <iframe width="1280" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiODRlOGFkODItMGY0OC00MzBjLWE4MjktMjU0NDdjYmJkMzA1IiwidCI6Ijk0ODUyNTE4LWM3NTctNDNjYi04Yzg2LTUyMTczZTQyYjVlOCJ9" frameborder="0" allowFullScreen="true"></iframe>
                        :null
                    }
                    { 
                        !this.state.alcaldes?
                        <iframe width="1280" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiOTY4NWI3ZjctNDhhMC00NTMwLWI0MTctZmFjMjgzZWVjYjNkIiwidCI6Ijk0ODUyNTE4LWM3NTctNDNjYi04Yzg2LTUyMTczZTQyYjVlOCJ9" frameborder="0" allowFullScreen="true"></iframe>

                        :null
                    }
                    { 
                        !this.state.diputados?
                        <iframe width="1280" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiMzU1MzI0OGMtZDE5YS00ZDIyLWJkNGMtZjYzMDE4MmQxZTM4IiwidCI6Ijk0ODUyNTE4LWM3NTctNDNjYi04Yzg2LTUyMTczZTQyYjVlOCJ9" frameborder="0" allowFullScreen="true"></iframe>
                        :null
                    }       
       

            </div>
        </section>
        )
    }
}

export default ListadoEncuestas

