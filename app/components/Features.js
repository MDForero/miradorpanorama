import Image from 'next/image'

const features = [
  {
    name: 'Empieza tu día con un festín para el paladar.',
    description:
      'Nuestro Desayuno es una experiencia culinaria que fusiona sabores auténticos con un toque contemporáneo, brindándote la energía perfecta para enfrentar cualquier jornada',
    icon: '/cereal-nutrition-svgrepo-com.svg'
  },
  {
    name: '"Relájate y revitalízate en nuestro Jacuzzi con Hidromasaje',
    description: ' Sumérgete en la pura indulgencia mientras las burbujas acarician tu cuerpo, creando una experiencia sensorial única. Un oasis de tranquilidad para renovar mente y espíritu.',
    icon: '/person-enjoying-jacuzzi-hot-water-bath-svgrepo-com.svg',
  },
  
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center items-center gap-10 flex-wrap">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Escape de aventura</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Un grandioso lugar</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              En nuestros ECOLOGING ofrecemos un servicio exclusivo y personalizado, brindando a nuestros visitantes una estadía en medio de la naturaleza, con un concepto de glamping tipo safari, logrando generar experiencias únicas he inolvidables para aquellas personas que buscan escapar de la rutina de la ciudad y desean disfrutar de ambientes rodeados de montañas, bosques, ríos y un piedemonte llanero, además complementamos su estadía con un servicio excepcional
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <Image src={feature.icon} className="absolute top-0 left-0 w-8 h-8" alt="icon" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <video className="h-[40rem]  rounded-xl shadow-xl ring-1 ring-gray-400/10  md:-ml-4 lg:-ml-0" autoPlay muted loop>
            <source src="/lv_0_20231118111148.mp4" type="video/mp4" />
          </video>
          
        </div>
      </div>
    </div>
  )
}