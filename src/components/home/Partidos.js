import React from "react"
import Card from '../Card';
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby";

const Partidos = () => {
    return (
    <section id="features" className="py-20 lg:pb-40 lg:pt-48">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">Partidos Politícos</h1>
          <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
            <div className="flex-1 px-3">
              <Link to="/nacional" >
                <Card className="mb-8">
                  <StaticImage
                        src = "../../assets/banderas/bandera_partido_nacional.jpg"
                        width = {500}
                        alt= "Voto Honduras Partido Nacional"
                    />
                    <p className="font-semibold text-xl">Partido Nacional</p>
                </Card>
              </Link>
            </div>
            <div className="flex-1 px-3">
              <Link to="/liberal" >
                <Card className="mb-8">
                    <StaticImage
                        src = "../../assets/banderas/bandera_partido_liberal.jpg"
                        width = {500}
                        alt= "Voto Honduras Partido Liberal"
                    />
                    <p className="font-semibold text-xl">Partido Liberal</p>
                </Card>
              </Link>
            </div>
            <div className="flex-1 px-3">
              <Link to="/libre" >
                <Card className="mb-8">
                    <StaticImage
                        src = "../../assets/banderas/bandera_partido_libre.jpg"
                        width = {500}
                        alt= "Voto Honduras Partido Libre"
                    />
                  <p className="font-semibold text-xl">Partido Libre</p>
                </Card>
              </Link>          
            </div>
            <div className="flex-1 px-3">
            <Link to="/psh" >
              <Card className="mb-8">
                  <StaticImage
                      src = "../../assets/banderas/bandera_partido_salvador.jpg"
                      width = {500}
                      alt= "Voto Honduras Partido Salvador de Honduras"
                  />
                <p className="font-semibold text-xl">PSH</p>
              </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Partidos