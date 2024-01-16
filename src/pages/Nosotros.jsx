

const Nosotros = () => {
  return (
    <div className="">
        <div className=" text-6xl bg-cyan-950 w-6/12 pb-20 pt-20 mt-10 mb-10 shadow-xl">
          <div className=" text-center ">
            <h1 className=" text-white font-semibold">About Us</h1>
          </div>
        </div>

        <div className="description-nosotros">
          <p className="text-center">
            Bienvenidos a NABMW, esta Empresa está enfocada a la venta de carros completamente 0KM de la Marca BMW.
          </p>
          
          {/* <------> */}

          <div className="mb-5 mt-5 text-center">
              <h4>
                Somos una Empresa ubicada en el mercado de hogares modernos de hace más de 43 Años, Fundada por José Hernando Molina en el Año 1980, nuestra principal herramienta es brindarte las mejores opciones para que puedas tener el Hogar de tus sueños, de forma correcta y sin ninguna clase de inconveniente en el proceso. Tenemos las mejores personas trabajando en cada una de nuestras obras para así tener tu hogar lo más antes posible y de forma inmediata.
              </h4>
          </div>
          <div className="service flex ">
            <div>
              <h3 className="ml-10 mr-10">
                Conocé mas acerca de nuestros servicios, comunicate con nosotros y sabes más.
              </h3>
            </div>
            
            <div className=" justify-between shadow-xl">
              <img src="../public/BMW-Service_1.webp" alt="" className="h-64" />
            </div>
            
          </div>

          {/* <------> */}

          <div className="">
            <h2>
              Conocé a nuestro equipo 
            </h2>

          </div>

        </div>
    </div>
  )
}

export default Nosotros