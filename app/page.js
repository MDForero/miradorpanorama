import data from '../public/data'
import logo from "../public/logo.png"
import menu from '../public/menu'
import Image from 'next/image'
import Link from 'next/link'
import Layout from './components/Navbar'
import Head from "next/head"

export const metadata = {
  title: "Mirador Panorama",
}

const Index = () => {


  return (
    <section className=' space-y-24'>

      <main className='inicio flex flex-col justify-center' >
        <div className='preview'>
          <Image loading='lazy' src={logo} alt="el Mirador panorama" width={300} />
        </div>

      </main>


      <section class="relative max-w-screen-xl p-4 px-4 mx-auto bg-white sm:px-6 lg:px-8 py-26 lg:mt-20">
        <div class="relative">
          <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="ml-auto lg:col-start-2 lg:max-w-2xl">
              <p class="text-base font-semibold leading-6 text-indigo-500 uppercase">
                Explora la Serenidad Natural
              </p>
              <h4 class="mt-2 text-2xl font-extrabold leading-8 text-gray-900  sm:text-3xl sm:leading-9">
                El Mirador Panorama, Tu Destino Familiar Completo en el Pie de Monte Llanero
              </h4>
              <p class="mt-4 text-lg leading-6 text-gray-500 first-letter:uppercase">
                {('EL MIRADOR PANORAMA ES UN LUGAR PARA TODA LA FAMILIA, DONDE ENCONTRARÁS AREA DE RESTAURANTE, ZONA INFANTIL Y ALOJAMIENTO TIPO GLAMPING, DESDE AQUI  PODRAS CONTEMPLAR EL RIO Y TODO EL PIE DE MONTE LLANERO, ADEMAS OBSERVARAS LA BIODIVERSIDAD DE FLORA Y FAUNA QUE RODEA LA REGIÓN.').toLocaleLowerCase()}
              </p>
              <ul class="gap-6 mt-8 md:grid md:grid-cols-2">
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full ">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base font-medium leading-6 text-gray-500">
                      Confort y tranquilidad
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full ">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base font-medium leading-6 text-gray-500">
                      Alojamiento tipo Glamping
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full ">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base font-medium leading-6 text-gray-500">
                      Servicio de calidad
                    </span>
                  </div>
                </li>
                <li class="mt-6 lg:mt-0">
                  <div class="flex">
                    <span class="flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-800 bg-green-100 rounded-full ">
                      <svg class="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd">
                        </path>
                      </svg>
                    </span>
                    <span class="ml-4 text-base font-medium leading-6 text-gray-500">
                      La mejor vista del lugar
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div class="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
              <div class="relative space-y-4">
                <div class="flex items-end justify-center space-x-4 lg:justify-start">
                  <Image class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="/Images/20231110_215742.jpeg" alt="1" />
                  <Image class="w-40 rounded-lg shadow-lg md:w-64" width="260" src="/compressed__DSC8520.jpg" alt="2" />
                </div>
                <div class="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                  <Image class="w-24 rounded-lg shadow-lg md:w-40" width="170" src="/compressed__DSC8550.jpg" alt="3" />
                  <Image class="w-32 rounded-lg shadow-lg md:w-56" width="200" src="/perroCaliente.jpg" alt="4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className='destacados'>
        {/* En proceso de actualización se esta buscando poner un menú de destacados */}

        <h1>Lo más delicioso</h1>
        <p style={{ maxWidth: "900px" }} className="descripciones">Contamos con una amplia variedad de platos, desde los favoritos de siempre a creaciones nuevas y mejoradas, entre los cuales destacan:</p>
        <div className='mx-auto'>
          <div className='flex gap-40 flex-wrap justify-center items-center'>
            {menu.filter(element => element.destacados === true).map((element, index) => <article className='destacado h-96 w-96 ' key={index} >
              <figure className='h-96'>
                <Image loading='lazy' src={element.img} alt='' width={0} height={0} className='w-96 h-full object-cover' />
              </figure>
              <div className='destacadostext'>
                <div>
                  <h2>{element.nombre}</h2>
                </div>
                <Link className='btn btn-success' href=""> Ordenar</Link>
              </div>
            </article>)}
          </div>
        </div>
      </section>


      <section className='destacamos inicio flex flex-col justify-center'>
        <h1><strong>El mirador panorama es:</strong></h1>
        <div className='container-card container' >
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <span className="i"><svg viewBox="0 0 24 24" fill="none" className='w-20' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4187 3.18627C11.7664 2.93791 12.2335 2.93791 12.5812 3.18627L19.2081 7.91974C19.6819 8.25817 19.9847 8.78627 20.0374 9.36613L20.8967 18.8189C21.0032 19.9902 20.081 21 18.9049 21H13H11H5.09501C3.91895 21 2.99675 19.9902 3.10323 18.8189L3.96257 9.36613C4.01528 8.78627 4.31808 8.25817 4.79188 7.91974L11.4187 3.18627ZM12 5.2289L5.95436 9.5472L5.09501 19L9.99998 19V13C9.99998 12.4477 10.4477 12 11 12H13C13.5523 12 14 12.4477 14 13V19L18.9049 19L18.0456 9.54721L12 5.2289Z" fill="#000000"></path> </g></svg></span>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>
                  <a href="#">Glamping</a>
                </h3>
                <p style={{ fontSize: "1rem" }}>El glamping es para aquellos que quieren experimentar la naturaleza, pero sin renunciar a todos los lujos (¡y comodidades!) de un hogar..</p>
              </div>
            </div>
          </div>



          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <span className="i"><svg viewBox="0 0 24 24" fill="none" className='w-20' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17.5291 7.77C17.4591 7.76 17.3891 7.76 17.3191 7.77C15.7691 7.72 14.5391 6.45 14.5391 4.89C14.5391 3.3 15.8291 2 17.4291 2C19.0191 2 20.3191 3.29 20.3191 4.89C20.3091 6.45 19.0791 7.72 17.5291 7.77Z" fill="#292D32"></path> <path d="M20.7916 14.7004C19.6716 15.4504 18.1016 15.7304 16.6516 15.5404C17.0316 14.7204 17.2316 13.8104 17.2416 12.8504C17.2416 11.8504 17.0216 10.9004 16.6016 10.0704C18.0816 9.8704 19.6516 10.1504 20.7816 10.9004C22.3616 11.9404 22.3616 13.6504 20.7916 14.7004Z" fill="#292D32"></path> <path d="M6.44016 7.77C6.51016 7.76 6.58016 7.76 6.65016 7.77C8.20016 7.72 9.43016 6.45 9.43016 4.89C9.43016 3.29 8.14016 2 6.54016 2C4.95016 2 3.66016 3.29 3.66016 4.89C3.66016 6.45 4.89016 7.72 6.44016 7.77Z" fill="#292D32"></path> <path d="M6.55109 12.8506C6.55109 13.8206 6.76109 14.7406 7.14109 15.5706C5.73109 15.7206 4.26109 15.4206 3.18109 14.7106C1.60109 13.6606 1.60109 11.9506 3.18109 10.9006C4.25109 10.1806 5.76109 9.89059 7.18109 10.0506C6.77109 10.8906 6.55109 11.8406 6.55109 12.8506Z" fill="#292D32"></path> <path d="M12.1208 15.87C12.0408 15.86 11.9508 15.86 11.8608 15.87C10.0208 15.81 8.55078 14.3 8.55078 12.44C8.56078 10.54 10.0908 9 12.0008 9C13.9008 9 15.4408 10.54 15.4408 12.44C15.4308 14.3 13.9708 15.81 12.1208 15.87Z" fill="#292D32"></path> <path d="M8.87078 17.9406C7.36078 18.9506 7.36078 20.6106 8.87078 21.6106C10.5908 22.7606 13.4108 22.7606 15.1308 21.6106C16.6408 20.6006 16.6408 18.9406 15.1308 17.9406C13.4208 16.7906 10.6008 16.7906 8.87078 17.9406Z" fill="#292D32"></path> </g></svg></span>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>
                  <a href="#">Familia</a>
                </h3>
                <p style={{ fontSize: "1rem" }}>Somos una empresa familiar y nos encanta lo que hacemos. Tenemos una gran variedad de opciones para que usted elija. Al venir a nuestro restaurante, disfrutará del mejor ambiente familiar.</p>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <span className="i"><svg fill="#000000" viewBox="0 -64 640 640" className='w-20' xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M639.4 433.6c-8.4-20.4-31.8-30.1-52.2-21.6l-22.1 9.2-38.7-101.9c47.9-35 64.8-100.3 34.5-152.8L474.3 16c-8-13.9-25.1-19.7-40-13.6L320 49.8 205.7 2.4c-14.9-6.2-32-.3-40 13.6L79.1 166.5C48.9 219 65.7 284.3 113.6 319.2L74.9 421.1l-22.1-9.2c-20.4-8.5-43.7 1.2-52.2 21.6-1.7 4.1.2 8.8 4.3 10.5l162.3 67.4c4.1 1.7 8.7-.2 10.4-4.3 8.4-20.4-1.2-43.8-21.6-52.3l-22.1-9.2L173.3 342c4.4.5 8.8 1.3 13.1 1.3 51.7 0 99.4-33.1 113.4-85.3l20.2-75.4 20.2 75.4c14 52.2 61.7 85.3 113.4 85.3 4.3 0 8.7-.8 13.1-1.3L506 445.6l-22.1 9.2c-20.4 8.5-30.1 31.9-21.6 52.3 1.7 4.1 6.4 6 10.4 4.3L635.1 444c4-1.7 6-6.3 4.3-10.4zM275.9 162.1l-112.1-46.5 36.5-63.4 94.5 39.2-18.9 70.7zm88.2 0l-18.9-70.7 94.5-39.2 36.5 63.4-112.1 46.5z"></path></g></svg></span>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>
                  <a href="#" >Celebraciones</a>
                </h3>
                <p style={{ fontSize: "1rem" }}>Celebre todo tipo de ocasiones en nuestro establecimiento. Tenemos un ambiente agradable y acogedor. Estamos disponibles para fiestas, eventos corporativos, cumpleaños, aniversarios, compromisos y bodas.</p>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="face face1">
              <div className="content">
                <div className="icon">
                  <span className="i"><svg viewBox="-96 0 512 512" className='w-20' version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#000000" d="M16,0c-8.837,0 -16,7.163 -16,16l0,187.643c0,7.328 0.667,13.595 2,18.802c1.333,5.207 2.917,9.305 4.75,12.294c1.833,2.989 4.5,5.641 8,7.955c3.5,2.314 6.583,3.953 9.25,4.917c2.667,0.965 6.542,2.266 11.625,3.905c2.399,0.774 5.771,1.515 8.997,2.224c1.163,0.256 2.306,0.507 3.378,0.754l0,225.506c0,17.673 14.327,32 32,32c17.673,0 32,-14.327 32,-32l0,-225.506c1.072,-0.247 2.215,-0.499 3.377,-0.754c3.227,-0.709 6.599,-1.45 8.998,-2.224c5.083,-1.639 8.958,-2.94 11.625,-3.905c2.667,-0.964 5.75,-2.603 9.25,-4.917c3.5,-2.314 6.167,-4.966 8,-7.955c1.833,-2.989 3.417,-7.087 4.75,-12.294c1.333,-5.207 2,-11.474 2,-18.802l0,-187.643c0,-8.837 -7.163,-16 -16,-16c-8.837,0 -16,7.163 -16,16l0,128c0,8.837 -7.163,16 -16,16c-8.837,0 -16,-7.163 -16,-16l0,-128c0,-8.837 -7.163,-16 -16,-16c-8.837,0 -16,7.163 -16,16l0,128c0,8.837 -7.163,16 -16,16c-8.837,0 -16,-7.163 -16,-16l0,-128c0,-8.837 -7.163,-16 -16,-16Zm304,18.286l0,267.143c0,0.458 -0.007,0.913 -0.022,1.364c0.015,0.4 0.022,0.803 0.022,1.207l0,192c0,17.673 -14.327,32 -32,32c-17.673,0 -32,-14.327 -32,-32l0,-160l-69.266,0c-2.41,0 -4.449,-0.952 -6.118,-2.857c-3.523,-3.619 -3.377,-8.286 0.887,-32.286c0.741,-4.762 2.178,-14.428 4.31,-29c2.133,-14.571 4.126,-28.19 5.98,-40.857c1.854,-12.667 4.449,-28.048 7.787,-46.143c3.337,-18.095 6.767,-34.428 10.29,-49c3.522,-14.571 7.926,-29.619 13.21,-45.143c5.284,-15.523 10.8,-28.476 16.547,-38.857c5.748,-10.381 12.515,-18.952 20.302,-25.714c7.787,-6.762 15.945,-10.143 24.473,-10.143l17.799,0c4.821,0 8.992,1.81 12.515,5.429c3.523,3.619 5.284,7.904 5.284,12.857Z"></path></g></svg></span>
                </div>
              </div>
            </div>
            <div className="face face2">
              <div className="content">
                <h3>
                  <a href="#" >Un buen plato</a>
                </h3>
                <p style={{ fontSize: "1rem" }}>Nuestra variedad de platos ofrece las mejores opciones para todos los gustos y paladares. Con una emocionante mezcla de sabores y texturas</p>
              </div>
            </div>
          </div>
        </div>
      </section>


    </section>
  )
}

export default Index