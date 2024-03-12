import React from 'react';

const Table = () => {
  const data = [
    /* Sección para cargar mas información */
    { name: 'Adriana Maulini 💚', country: 'Buenos Aires', bio: 'Adriana es una ingeniera de software con 10 años de experiencia en desarrollo de software con diferentes tecnologías, específicamente Microsoft .Net. Antes de unirse a AlixPartners, trabajó como desarrolladora senior en una destacada firma multinacional de consultoría de software.', linkedIn: 'https://www.linkedin.com/in/adriana-maulini/', youtube:'https://www.youtube.com/@adrianatech', twitter:'https://www.twitter.com/persefoneAM' },

    { name: 'Miriam Gonzalez 💜', country: 'España', bio: 'Creadora de contenido sobre programación y tecnología, divulgadora y podcaster. Con una gran comunidad de más de 260k followers en redes sociales, ha sido nombrada Top Voices Next Generation por LinkedIn como una de las 10 jóvenes profesionales a seguir en 2022. Además, trabajo en remoto como ingeniera de software para 64 Robots, una empresa de Estados Unidos, y he dado charlas técnicas en eventos internaciones sobre programación.', linkedIn:'https://www.linkedin.com/in/miriamgonp', youtube: 'https://www.youtube.com/@miriamgonp', twitter: 'https://www.twitter.com/miriamgonp' },

    { name: 'Arelis Reyes 💙', country: 'México', bio: 'Más de dos años de experiencia enseñando programación enfocada en: Visión por Computador e IA (Python, OpenCV, Numpy, Pandas), Videojuegos 2D, 3D, Móvil, Realidad Aumentada (Godot, Roblox, Unity), desarrollo web (HTML, CSS, JavaScript ). Creador de contenidos educativos en redes sociales enfocados en tecnología, programación y videojuegos para principiantes.', linkedIn:'https://www.linkedin.com/in/arelis-reyes', youtube: 'https://www.youtube.com/@arelis_reyes19', twitter: 'https://twitter.com/Arelis_reyes19' },

  ];

  return (
    <table className="table-auto w-full">
      {/* Darle titulo a las tablas/videos */}
      <caption className='bg-blue-200 caption-top'>Table 31: Professional wrestlers nand their signature moves.</caption>
      <thead className='bg-emerald-950 text-white'>
        <tr>
          <th>Nombre</th>
          <th>País</th>
          <th width={600}>Biografía</th>
          <th>Seguir</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td className="border px-4 py-2 font-mono bg-emerald-950 text-white">{row.name}</td>
            <td className="border px-4 py-2 font-sans">{row.country}</td>
            <td className="border px-4 py-2 font-sans text-justify">{row.bio}</td>
            <td className="border px-4 py-2 font-sans text-center">
              <button onClick={()=>window.open(row.linkedIn, '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/linkedin.png" alt="linkedIn"/></button>
              <button onClick={()=>window.open(row.youtube, '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/youtube-play.png" alt="youtube-play"/></button>
              <button onClick={()=>window.open(row.twitter, '_blank')}><img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/twitter-circled.png" alt="twitter"/></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;