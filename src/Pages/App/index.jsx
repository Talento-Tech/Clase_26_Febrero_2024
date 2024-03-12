import Developers from '../Developers';

import './App.css';

/* Importar el efecto carousel */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
/* import "../../../node_modules/react-slick/dist/react-slick"; */
import "slick-carousel/slick/slick-theme.css";
/* import { data } from 'autoprefixer'; */

function App(){

    const settings = {
        dots: true,
        infinite: true,
        speed:1000,
        autoplaySpeed: 30,
        autoplay: true,
        slideToShow: 3,
        slidetoScroll: 1
    }   

    return(
        <>
            <h1>Developers</h1>
            <table width={1200} >
                <thead class="bg-emerald-950 text-white">
                    <th>Nombre</th>
                    <th>País</th>
                    <th width={500}>Reseña</th>
                    <th>Seguir</th>
                </thead>
                <tbody>
                    <tr class="bg-teal-50">
                    <td class='font-mono'>Adriana Maulini 🩷</td>
                    <td class="font-sans">Buenos Aires</td>
                    <td class="font-sans text-justify	">Adriana es una ingeniera de software con 10 años de experiencia en desarrollo de software con diferentes tecnologías, específicamente Microsoft .Net. Antes de unirse a AlixPartners, trabajó como desarrolladora senior en una destacada firma multinacional de consultoría de software.</td>
                    <td>
                        <button onClick={()=>window.open('https://www.youtube.com/@adrianatech', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/youtube-play.png" alt="youtube-play"/></button>
                        <button onClick={()=>window.open('https://www.linkedin.com/in/adriana-maulini/', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/></button>
                        <button onClick={()=>window.open('https://www.twitter.com/persefoneAM', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/twitter-circled.png" alt="twitter-circled"/></button>
                    </td>
                    </tr>
                    <tr class="bg-teal-100">
                    <td class='font-mono'>Miriam Gonzalez 💜</td>
                    <td class="font-sans">España</td>
                    <td class="font-sans text-justify	">Creadora de contenido sobre programación y tecnología, divulgadora y podcaster. Con una gran comunidad de más de 260k followers en redes sociales, ha sido nombrada Top Voices Next Generation por LinkedIn como una de las 10 jóvenes profesionales a seguir en 2022. Además, trabajo en remoto como ingeniera de software para 64 Robots, una empresa de Estados Unidos, y he dado charlas técnicas en eventos internaciones sobre programación.</td>
                    <td>
                        <button onClick={()=>window.open('https://www.youtube.com/@miriamgonp', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/youtube-play.png" alt="youtube-play"/></button>
                        <button onClick={()=>window.open('https://www.linkedin.com/in/miriamgonp', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/></button>
                        <button onClick={()=>window.open('https://www.twitter.com/miriamgonp', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/twitter-circled.png" alt="twitter-circled"/></button>
                    </td>
                    </tr>
                    <tr class="bg-teal-50">
                    <td class='font-mono'>Arelis Reyes 💙</td>
                    <td class="font-sans">México</td>
                    <td class="font-sans text-justify	">Más de dos años de experiencia enseñando programación enfocada en: Visión por Computador e IA (Python, OpenCV, Numpy, Pandas), Videojuegos 2D, 3D, Móvil, Realidad Aumentada (Godot, Roblox, Unity), desarrollo web (HTML, CSS, JavaScript ). Creador de contenidos educativos en redes sociales enfocados en tecnología, programación y videojuegos para principiantes.</td>
                    <td>
                        <button onClick={()=>window.open('https://www.youtube.com/@arelis_reyes19', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/youtube-play.png" alt="youtube-play"/></button>
                        <button onClick={()=>window.open('https://www.linkedin.com/in/arelis-reyes', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedin"/></button>
                        <button onClick={()=>window.open('https://twitter.com/Arelis_reyes19', '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/twitter-circled.png" alt="twitter-circled"/></button>
                    </td>
                    </tr>
                </tbody>
            </table>

            {/* Creación de carousel */}
            <Developers/>
            {/* Aca pondremos el carousel */}
            <div className='w-2/4 mx-auto my-auto'>
                {/* Slider */}
                <div className="mt-1.25">
                    {/* Desplegamos todas las configuraciones del objeto como un prop */}
                    <Slider{...settings}>
                        {/* Nos permitira toda la parte de iteración */}
                        {data.map((d) => (
                                <> {/* indent */}
                                    {/* contenedor para cada slider (altura, color del texto, etc) */}
                                    <div className="bg-green-100 h-[200px] text-black rounded flex flex-col items-center justify-center">
                                        {/* Empezar a recorrer las imagenes */}
                                        <img src={d.img} className='p-3 mt-8 mb-8 h-64 w-64 rounded-full' alt='imagenes-slider' />
                                    </div> 
                                    {/*Cargar el nombre del desarrollador/a */}
                                    <div className='flex flex-col items-center justify-center'>
                                        <p className='font-semibold'>{d.name}</p>
                                        <p className='text-center'>{d.review}</p>
                                        <button onClick={()=>window.open(d.youtube, '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/youtube-play.png" alt="youtube-play"/></button>
                                    </div>
                                </>
                            )

                        )}
                        
                        
                    </Slider>

                </div>
            </div>
        </>
    )
}

const data =[
    {
        name: `Gustavo Cerati`,
        img: `../src/assets/cerati.png`,
        review: `Gustavo Adrián Cerati, conocido como Gustavo Cerati, fue un músico, cantautor y productor discográfico argentino que obtuvo reconocimiento internacional por haber sido el líder, vocalista, compositor y guitarrista de la banda de rock Soda Stereo.`,
        youtube: "https://www.youtube.com/channel/UCZuU_8S5VItTh-InZ0CV-rA",
    },
    {
        name: `Nanpa Básico`,
        img: `../src/assets/nanpaBasico.png`,
        review: `Francisco David Rosero Serna, más conocido como Nanpa Básico, se colocó como una de las figuras centrales en la efervescente escena del hip-hop de Medellín y desde ahí se ha proyectado en el resto de Latinoamérica. Incursionó en el rap como parte del grupo Selva De Asfalto, con el que grabó un demo en 2005.`,
        youtube: "https://www.youtube.com/channel/UC4Boh-JJrLC60ZiNTaSwAxA",
    },
    {
        name: `Cristian Nodal`,
        img: `../src/assets/nodal.png`,
        review: `Christian Jesús González Nodal, conocido como Christian Nodal, es un cantante, músico, compositor, productor, director y empresario mexicano.`,
        youtube: "https://www.youtube.com/channel/UCtqOng3GVhQVu1Gl-3UlyAQ",
    },
];

export default App;