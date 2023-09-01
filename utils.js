// ⚠️ NO MODIFICAR ESTE ARCHIVO ⚠️
// Aquí podrás ver las funciones escenciales para resolver este CheckPoint.

const episodiosRandom = (n) => {
  let episodios = [
    {
      nombre: "Winter Is Coming",
      numeroEpisodio: 1,
      director: "Tim Van Patten",
      personajes: [],
    },
    {
      nombre: "The Kingsroad",
      numeroEpisodio: 2,
      director: "Tim Van Patten",
      personajes: [],
    },
    {
      nombre: "Lord Snow",
      numeroEpisodio: 3,
      director: "Brian Kirk",
      personajes: [],
    },
    {
      nombre: "Cripples, Bastards, and Broken Things",
      numeroEpisodio: 4,
      director: "Brian Kirk",
      personajes: [],
    },
    {
      nombre: "The Wolf and the Lion",
      numeroEpisodio: 5,
      director: "Brian Kirk",
      personajes: [],
    },
    {
      nombre: "A Golden Crown",
      numeroEpisodio: 6,
      director: "Daniel Minahan",
      personajes: [],
    },
    {
      nombre: "You Win or You Die",
      numeroEpisodio: 7,
      director: "Daniel Minahan",
      personajes: [],
    },
    {
      nombre: "The Pointy End",
      numeroEpisodio: 8,
      director: "Daniel Minahan",
      personajes: [],
    },
    {
      nombre: "Baelor",
      numeroEpisodio: 9,
      director: "Alan Taylor",
      personajes: [],
    },
    {
      nombre: "Fire and Blood",
      numeroEpisodio: 10,
      director: "Alan Taylor",
      personajes: [],
    },
  ];
  let episodiosGuardados = [];
  let i = 0;
  while (i < n) {
    let numeroRandom = Math.floor(Math.random() * episodios.length);
    if (!episodiosGuardados.includes(episodios[numeroRandom])) {
      episodiosGuardados.push(episodios[numeroRandom]);
      i++;
    }
  }
  return episodiosGuardados;
};

const personajesRandoms = (n) => {
  const personajes = [
    {
      nombre: "Jon Snow",
      numeroEpisodio: 5,
      edad: 23,
      descripcion: "A bastard son of Ned Stark, joined the Night's Watch.",
      id: "k7l8m9n0",
    },
    {
      nombre: "Daenerys Targaryen",
      numeroEpisodio: 3,
      edad: 25,
      descripcion: "The last surviving member of the Targaryen dynasty.",
      id: "g3h4i5j6",
    },
    {
      nombre: "Arya Stark",
      numeroEpisodio: 7,
      edad: 18,
      descripcion: "A skilled assassin, seeking revenge for her family.",
      id: "c9d0e1f2",
    },
    {
      nombre: "Tyrion Lannister",
      numeroEpisodio: 2,
      edad: 38,
      descripcion: "A witty and cunning dwarf, member of House Lannister.",
      id: "y5z6a7b8",
    },
    {
      nombre: "Cersei Lannister",
      numeroEpisodio: 10,
      edad: 42,
      descripcion: "Ambitious queen and member of House Lannister.",
      id: "u1v2w3x4",
    },
    {
      nombre: "Sansa Stark",
      numeroEpisodio: 6,
      edad: 21,
      descripcion:
        "Daughter of Ned Stark, developed political skills over time.",
      id: "q7r8s9t0",
    },
    {
      nombre: "Jaime Lannister",
      numeroEpisodio: 1,
      edad: 40,
      descripcion: "A skilled knight with a complex moral compass.",
      id: "m3n4o5p6",
    },
    {
      nombre: "Bran Stark",
      numeroEpisodio: 9,
      edad: 17,
      descripcion: "Blessed with supernatural abilities and visions.",
      id: "i9j0k1l2",
    },
    {
      nombre: "Catelyn Stark",
      numeroEpisodio: 4,
      edad: 45,
      descripcion: "Mother of the Stark children and widow of Ned Stark.",
      id: "e5f6g7h8",
    },
    {
      nombre: "Petyr Baelish",
      numeroEpisodio: 8,
      edad: 47,
      descripcion: "A manipulative and cunning master of political intrigue.",
      id: "a1b2c3d4",
    },
  ];
  let personajesGuardados = [];
  let i = 0;
  while (i < n) {
    let numeroRandom = Math.floor(Math.random() * personajes.length);
    if (!personajesGuardados.includes(personajes[numeroRandom])) {
      personajesGuardados.push(personajes[numeroRandom]);
      i++;
    }
  }
  return personajesGuardados;
};

module.exports = {
  personajes: [],
  episodios: [],

  reset: function () {
    this.personajes = [];
    this.episodios = [];
  },

  testPersonaje: function () {
    return this.personajes;
  },
  testEpisodio: function () {
    return this.episodios;
  },

  // Genera un nuevo personaje de forma aleatoria.
  //esta funcion va a devolver un array de objetos con la siguiente estructura:
  /*
   ACLARACION: LOS DATOS SON RANDOMS
   [
      {  id: "u1v2w3x4", nombre: "Tyrion Lannister", numeroEpisodio: 2, edad: 38, descripcion: "Ambitious queen and member of House Lannister." },
      {  id: "q7r8s9t0", nombre: "Cersei Lannister", numeroEpisodio: 10, edad: 42, descripcion: "Daughter of Ned Stark, developed political skills over time." },  
      {  id: "c9d0e1f2", nombre: "Sansa Stark", numeroEpisodio: 6, edad: 21, descripcion: "A manipulative and cunning master of political intrigue." }
   ]
  */
  generarPersonajes: function (n) {
    return personajesRandoms(n);
  },

  // Generar nuevos episodios de forma aleatoria.
  //esta funcion va a devolver un array de objetos con la siguiente estructura:
  /*
   ACLARACION: LOS DATOS SON RANDOMS
  [
      { nombre: "Cripples, Bastards, and Broken Things", numeroEpisodio: 4, director: "Brian Kirk", personajes: [] },  
      { nombre: "The Wolf and the Lion", numeroEpisodio: 5, director: "Brian Kirk", personajes: [] },
      { nombre: "A Golden Crown", numeroEpisodio: 6, director: "Daniel Minahan", personajes: [] }
  ]
  */
  generarEpisodios: function (n) {
    return episodiosRandom(n);
  },
};
