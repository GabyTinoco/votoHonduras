import React, { Component} from "react"
import EncuestaPresidente from "./EncuestaPresidente";

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
                    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Encuestas Elecciones 2021</h1>
                    <div class="w-full mb-4">
                        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink"  onClick = { () => this.presidente()}>
                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                <div class="w-full font-bold text-xl text-gray-800 px-6">Presidentes</div>
                                <p class="text-gray-800 text-base px-6 mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                                </p>
                            </a>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                <div class="w-full font-bold text-xl text-gray-800 px-6">Alcaldes</div>
                                <p class="text-gray-800 text-base px-6 mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                                </p>
                            </a>
                        </div>
                    </div>
                    <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                            <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                                <div class="w-full font-bold text-xl text-gray-800 px-6">Diputados</div>
                                <p class="text-gray-800 text-base px-6 mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                                </p>
                            </a>
                        </div>
                    </div>
                    { 
                        !this.state.presidentes?
                        <iframe width="1280" height="700" src="https://app.powerbi.com/view?r=eyJrIjoiNzFjZjU3NGYtMGFiNi00M2JlLTgzOWMtNjhkYjYzNDA0ZmIxIiwidCI6Ijk0ODUyNTE4LWM3NTctNDNjYi04Yzg2LTUyMTczZTQyYjVlOCJ9" frameborder="0" allowFullScreen="true"></iframe>
                        :null
                    }    

            </div>
        </section>
        )
    }
}

export default ListadoEncuestas

