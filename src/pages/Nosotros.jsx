
import 'bootstrap/dist/css/bootstrap.min.css';

const Nosotros = () => {
  return (
    <div className="">
        <div className=" bg-[url('../public/bmw-serie-1.webp')] bg-auto bg-right text-6xl w-6/12 rounded-r-[35px]">
          <div className=" text-center bg-cyan-950 opacity-80 pb-28 pt-28 mt-16 mb-14 rounded-r-[35px] shadow-xl shadow-cyan-950/50">
            <h1 className=" text-white font-semibold border-t-4 mx-16 ">About Us</h1>
          </div>
        </div>

        <div className="description-nosotros">
          <p className="text-center text-gray-700 font-medium text-2xl mx-20">
          Welcome to NABMW, this Company is focused on the sale of completely 0KM BMW Brand cars.
          </p>
          
          {/* <------> */}

          <div className="mb-16 mt-10 text-center">
              <h4 className="text-gray-700 mx-12 text-xl">
              We are a Company located in the modern home market for more than 43 years, Founded by José Hernando Molina in 1980, our main tool is to provide you with the best options so that you can have the Home of your dreams, correctly and without no kind of inconvenience in the process. We have the best people working on each of our projects to have your home as soon as possible and immediately.
              </h4>
          </div>

          {/* <------> */}

          <div className="">
            <h2 className="text-center font-medium text-4xl mb-14 mt-20">
            Meet our team
            </h2>

          </div>

          

          {/* <------> */}

            <h1 className=" text-center font-medium text-4xl mb-14 mt-20">
            More about Our Services.
            </h1>

          <div className="service grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <div>
              <h3 className="ml-10 mr-10 text-gray-700">
              Learn more about our services, contact us and learn more.
              </h3>
            </div>
            
            <div className=" justify-between shadow-xl mb-16">
              <img src="../public/BMW-Service_1.webp" alt="" className="h-[25rem]" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Nosotros