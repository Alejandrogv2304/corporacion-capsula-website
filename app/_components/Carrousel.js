"use client"; // Marca este componente como un Client Component

import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carrousel = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!isMounted) {
    return null; // O algún placeholder
  }

  // Datos para las diapositivas
  const data = [
    {
      name: `Alejandro Gómez`,
      img: `/desarrolladores/Alejandro_Gómez.jpeg`,
      review: `Estudiante de Ingeniería de Sistemas UIS de sexto semestre, tengo 19 años. Me gusta el desarrollo web y el aprender nuevas tecnologías, también me gusta el fútbol`,
      github:`https://github.com/Alejandrogv2304`  
    },
    {
      name: `William Urrutia`,
      img: `/desarrolladores/William_Urrutia.jpeg`,
      review: `Estudiante de sexto semestre de Ingeniería de Sistemas de la Universidad Industrial de Santander. Me apasiona aprender nuevas cosas, jugar videojuegos y practicar tenis de campo.`,
      github:`https://github.com/WillyUts` 
    },
    {
      name: `Camila Diaz`,
      img: `/desarrolladores/Camila_Diaz.jpeg`,
      review: `Soy estudiante de ingeniería de sistemas de la Universidad Industrial de Santander, tengo 20 años. Amante de la música, Soprano primera en la coral Universitaria UIS, flautista y oboista.`,
      github:`https://github.com/LauraCD2`  
    },
    {
      name: `Mateo Fonseca`,
      img: `/desarrolladores/Mateo_Fonseca.jpeg`,
      review: `Estudiante de quinto semestre de ingeniería de sistemas de la UIS, me apasionan los videojuegos, deportes y en general, aprender de diversos temas.`,
      github:`https://github.com/MTDelgado12?tab=overview&from=2024-10-01&to=2024-10-27` 
    },
    
  ];

  return (
    <div className='w-4/6 m-auto'>
  <div className="mt-20">
    <Slider {...settings}>
      {data.map((d) => (
        <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
          <div className='h-56 bg-[#FEEE91] flex justify-center items-center rounded-t-xl'>
            <img src={d.img} alt={d.name} className="h-48 w-48 rounded-full" />
          </div>
          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <p className="text-xl font-semibold">{d.name}</p>
            <p className="text-center">{d.review}</p>
            <a href={d.github} target="_blank" rel="noopener noreferrer"> {/* Enlace al perfil de GitHub */}
              <button className='bg-yellow-400 hover:text-accent-400 text-white text-lg px-6 py-1 rounded-xl'>
                Github
              </button>
            </a>
          </div>
        </div>
      ))}
    </Slider>
  </div>
</div>
  );
};

export default Carrousel;
