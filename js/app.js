/* ================= DOM ================= */
const contenedor = document.getElementById("contenedor-productos");
const templateEl = document.getElementById("template-cuadro");
const template = templateEl ? templateEl.content : null;

/* ================= PRECIOS ================= */
// Verticales
const preciosVertical = {
  "40x60": 50000,
  "80x60": 70000,
  "100x70": 100000
};
const preciosVerticalLed = {
  "40x60": 65000,
  "80x60": 90000,
  "100x70": 120000
};

// Horizontales
const preciosHorizontal = {
  "110x50": 90000,
  "150x60": 130000,
  "170x70": 160000
};
const preciosHorizontalLed = {
  "110x50": 120000,
  "150x60": 150000,
  "170x70": 190000
};

/* ================= PRECIOS ESPECIALES ================= */
const preciosEspeciales = {

    /* ================= MONOPOLY ================= */
  "Monopoly 2": { /* ================= son 3 cuadros juntos ================= */
    "40x60": { normal: 150000, led: 195000 }
  },

  "Monopoly 17, Monopoly 18, Monopoly 19": {
    "60x50": { normal: 60000, led: 75000 },
    "80x70": { normal: 80000, led: 105000 },
    "100x90": { normal: 100000, led: 120000 }
  },
    /* ================= SCARFACE ================= */

  "Scarface 11, Scarface 15, Scarface 21, Scarface 22": {
    "50x60": { normal: 60000, led: 75000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },

  "Scarface 13, Scarface 14": {
    "40x70": { normal: 60000, led: 80000 },
    "60x90": { normal: 85000, led: 105000 },
    "70x110": { normal: 100000, led: 130000 }
  },

  /* estos son mas cuadradones */
  "Scarface 26, Scarface 28": {
    "60x60": { normal: 70000, led: 90000 },
    "80x80": { normal: 100000, led: 120000 },
    "100x100": { normal: 130000, led: 150000 }
  },


 /* ================= CINE ================= */
   "Rapidos y furiosos 1": {
    "40x60": { normal: 100000, led: 130000 },
    "80x60": { normal: 140000, led: 180000 },
    "100x70": { normal: 200000, led: 240000 }
  },

 /* ================= PEAKY BLINDERS ================= */

  "Peaky Blinders 1, Peaky Blinders 2": {
    "125x80": { normal: 100000, led: 140000 }
  },

  "Peaky Blinders 4, Peaky Blinders 5, Peaky Blinders 6, Peaky Blinders 7, Peaky Blinders 8, Peaky Blinders 9, Peaky Blinders 10, Peaky Blinders 12, Peaky Blinders 13, Peaky Blinders 14, Peaky Blinders 16, Peaky Blinders 17, Peaky Blinders 20, Peaky Blinders 21, Peaky Blinders 22": {
    "40x70": { normal: 60000, led: 80000 },
    "60x90": { normal: 85000, led: 105000 },
    "70x110": { normal: 100000, led: 130000 }
  },

  "Peaky Blinders 11": {
    "50x60": { normal: 60000, led: 75000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },


/* ================= FUTBOL ================= */
  "Diego Maradona 3, Lionel Messi 4, Lionel Messi 7": {
    "50x60": { normal: 60000, led: 75000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
    
  },

  "Diego Maradona 6": {
    "40x70": { normal: 60000, led: 80000 },
    "60x90": { normal: 85000, led: 105000 },
    "70x110": { normal: 100000, led: 130000 }
  },

  "Lionel Messi 1, Lionel Messi 2, Lionel Messi 5": {
    "40x70": { normal: 60000, led: 80000 },
    "60x90": { normal: 85000, led: 105000 },
    "70x110": { normal: 100000, led: 130000 }
  },


  /* ================= ONE PIECE ================= */
  "One Piece 2, One Piece 3, One Piece 5, One Piece 9, One Piece 10, One Piece 11, One Piece 18, One Piece 19": {
    "40x70": { normal: 60000, led: 80000 },
    "60x90": { normal: 85000, led: 105000 },
    "70x110": { normal: 100000, led: 130000 }
  },


  "One Piece 6, One Piece 7, One Piece 8, One Piece 13 ": {
    "80x40": { normal: 80000, led: 100000 },
    "120x60": { normal: 100000, led: 130000 },
    "150x60": { normal: 130000, led: 150000 }
  },


  "One Piece 4, One Piece 12, One Piece 14": {
    "50x60": { normal: 60000, led: 75000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },


  /* ================= TIO RICO ================= */

  "Tio Rico 2, Tio Rico 3, Tio Rico 5, Tio Rico 10, Tio Rico 20": {
    "50x60": { normal: 60000, led: 75000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },

  "Tio Rico 4, Tio Rico 9, Tio Rico 11, Tio Rico 15, Tio Rico 17, Tio Rico 18": {
    "60x60": { normal: 70000, led: 90000 },
    "80x80": { normal: 100000, led: 120000 },
    "100x100": { normal: 130000, led: 150000 }
  },

  "Tio Rico 1": { 
    "80x40": { normal: 60000, led: 90000 },
    "120x60": { normal: 80000, led: 110000 },
    "150x60": { normal: 100000, led: 130000 }
  },

  "Tio Rico 8": {
    "40x70": { normal: 60000, led: 80000 },
    "60x90": { normal: 85000, led: 105000 },
    "70x110": { normal: 100000, led: 130000 }
  },

/* ================= AUTOS ================= */

  "Autos 1, Autos 2, Autos 10": {
    "40x70": { normal: 60000, led: 80000 },
    "60x90": { normal: 85000, led: 105000 },
    "70x110": { normal: 100000, led: 130000 }
  },


  "Autos 5, Autos 6, Autos 14": {
    "50x60": { normal: 60000, led: 75000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },

  "Autos 4, Autos 8, Autos 9, Autos 11, Autos 12, Autos 13, Autos 15, Autos 17, Autos 18, Autos 19": {
    "80x40": { normal: 80000, led: 100000 },
    "120x60": { normal: 100000, led: 130000 },
    "150x60": { normal: 130000, led: 150000 }
  },

  /* ================= ARTE MODERNO ================= */

  "Arte Moderno 3, Arte Moderno 4, Arte Moderno 5, Arte Moderno 6, Arte Moderno 7, Arte Moderno 8, Arte Moderno 9, Arte Moderno 12, Arte Moderno 14, Arte Moderno 16, Arte Moderno 17, Arte Moderno 25": {
    "40x70": { normal: 60000, led: 80000 },
    "60x90": { normal: 85000, led: 105000 },
    "70x110": { normal: 100000, led: 130000 }
  },

  "Arte Moderno 10, Arte Moderno 11, Arte Moderno 13, Arte Moderno 15, Arte Moderno 20, Arte Moderno 22": {
    "50x60": { normal: 60000, led: 75000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },

  "Arte Moderno 23": {
    "80x40": { normal: 80000, led: 100000 },
    "120x60": { normal: 100000, led: 130000 },
    "150x60": { normal: 130000, led: 150000 }
  },
  /* ================= RICKY RICON ================= */

  "Ricky Ricon 5": {
    "40x70": { normal: 60000, led: 80000 },
    "60x90": { normal: 85000, led: 105000 },
    "70x110": { normal: 100000, led: 130000 }
  },
  "Ricky Ricon 9": {
    "80x40": { normal: 80000, led: 100000 },
    "120x60": { normal: 100000, led: 130000 },
    "150x60": { normal: 130000, led: 150000 }
  },
  "Ricky Ricon 7, Ricky Ricon 8": {
    "60x60": { normal: 70000, led: 90000 },
    "80x80": { normal: 100000, led: 120000 },
    "100x100": { normal: 130000, led: 150000 }
  },
};

/* ================= PRODUCTOS ================= */
const productos = [
  { nombre: "Arte Moderno 1", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno1.jpeg" },
  { nombre: "Arte Moderno 2", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno2.jpeg" },
  { nombre: "Arte Moderno 3", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno3.jpeg" },
  { nombre: "Arte Moderno 4", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno4.jpeg" },
  { nombre: "Arte Moderno 5", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno5.jpeg" },
  { nombre: "Arte Moderno 6", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno6.jpeg" },
  { nombre: "Arte Moderno 7", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno7.jpeg" },
  { nombre: "Arte Moderno 8", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno8.jpeg" },
  { nombre: "Arte Moderno 9", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno9.jpeg" },
  { nombre: "Arte Moderno 10", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno10.jpeg" },
  { nombre: "Arte Moderno 11", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno11.jpeg" },
  { nombre: "Arte Moderno 12", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno12.jpeg" },
  { nombre: "Arte Moderno 13", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno13.jpeg" },
  { nombre: "Arte Moderno 14", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno14.jpeg" },
  { nombre: "Arte Moderno 15", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno15.jpeg" },
  { nombre: "Arte Moderno 16", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno16.jpeg" },
  { nombre: "Arte Moderno 17", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno17.jpeg" },
  { nombre: "Arte Moderno 18", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno18.jpeg" },
  { nombre: "Arte Moderno 19", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno19.jpeg" },
  { nombre: "Arte Moderno 20", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno20.jpeg" },
  { nombre: "Arte Moderno 21", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno21.jpeg" },
  { nombre: "Arte Moderno 22", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno22.jpeg" },
  { nombre: "Arte Moderno 23", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno23.jpeg" },
  { nombre: "Arte Moderno 24", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno24.jpeg" },
  { nombre: "Arte Moderno 25", categoria: "artemoderno", orientacion: "vertical", imagen: "img/artemoderno/arte-moderno25.jpeg" },

  /* ================= DOLAR ================= */
  { nombre: "Dólar 1", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-1.jpeg" },
  { nombre: "Dólar 2", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-2.jpeg" },
  { nombre: "Dólar 3", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-3.jpeg" },
  { nombre: "Dólar 4", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-4.jpeg" },
  { nombre: "Dólar 5", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-5.jpeg" },
  { nombre: "Dólar 6", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-6.jpeg" },
  { nombre: "Dólar 7", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-7.jpeg" },
  { nombre: "Dólar 8", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-8.jpeg" },
  { nombre: "Dólar 9", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-9.jpeg" },
  { nombre: "Dólar 10", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-10.jpeg" },
  { nombre: "Dólar 11", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-11.jpeg" },
  { nombre: "Dólar 12", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-12.jpeg" },
  { nombre: "Dólar 13", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-13.jpeg" },
  { nombre: "Dólar 14", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-14.jpeg" },
  { nombre: "Dólar 15", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-15.jpeg" },
  { nombre: "Dólar 16", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-16.jpeg" },
  { nombre: "Dólar 17", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-17.jpeg" },
  { nombre: "Dólar 18", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-18.jpeg" },
  { nombre: "Dólar 19", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-19.jpeg" },
  { nombre: "Dólar 20", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-20.jpeg" },
  { nombre: "Dólar 21", categoria: "dolar", orientacion: "horizontal", imagen: "img/dolar/dolar-21.jpeg" },

  /* ================= DINERO ================= */
  { nombre: "Pato Donald 1", categoria: "dinero", orientacion: "vertical", imagen: "img/dinero/pato-donald-1.jpeg" },
  { nombre: "Pato Donald 2", categoria: "dinero", orientacion: "vertical", imagen: "img/dinero/pato-donald-2.jpeg" },
  { nombre: "Perro 1", categoria: "dinero", orientacion: "vertical", imagen: "img/dinero/perro-1.jpeg" },
  { nombre: "Conejo Lucas 1", categoria: "dinero", orientacion: "vertical", imagen: "img/dinero/conejo-lucas-1.jpeg" },

  /* ================= FUTBOL ================= */
  { nombre: "Diego Maradona 1", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/maradona1.jpeg" },
  { nombre: "Diego Maradona 2", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/maradona2.jpeg" },
  { nombre: "Diego Maradona 3", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/maradona3.jpeg" },
  { nombre: "Diego Maradona 4", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/maradona4.jpeg" },
  { nombre: "Diego Maradona 5", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/maradona5.jpeg" },
  { nombre: "Diego Maradona 6", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/maradona6.jpeg" },
  { nombre: "Diego Maradona 7", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/maradona7.jpeg" },
  { nombre: "Diego Maradona 8", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/maradona8.jpeg" },
  { nombre: "Diego Maradona 9", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/maradona9.jpeg" },
  { nombre: "Lionel Messi 1", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/messi-1.jpeg" },
  { nombre: "Lionel Messi 2", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/messi-2.jpeg" },
  { nombre: "Lionel Messi 3", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/messi-3.jpeg" },
  { nombre: "Lionel Messi 4", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/messi-4.jpeg" },
  { nombre: "Lionel Messi 5", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/messi-5.jpeg" },
  { nombre: "Lionel Messi 6", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/messi-6.jpeg" },
  { nombre: "Lionel Messi 7", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/messi-7.jpeg" },
  { nombre: "Lionel Messi 8", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/messi-8.jpeg" },
  { nombre: "Lionel Messi 9", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/messi-9.jpeg" },
  { nombre: "Lionel Messi 10", categoria: "futbol", orientacion: "vertical", imagen: "img/futbol/messi-10.jpeg" },

  /* ================= MUSICA ================= */
  { nombre: "Cantante-1", categoria: "musica", orientacion: "vertical", imagen: "img/musica/cantante.jpeg" },
  { nombre: "Soda Stereo 1", categoria: "musica", orientacion: "vertical", imagen: "img/musica/Soda-stereo-1.jpeg" },
  { nombre: "The Weekend 1", categoria: "musica", orientacion: "vertical", imagen: "img/musica/the-weekend-1.jpeg" },

  /* ================= CINE ================= */
  { nombre: "Rocky 1", categoria: "cine", orientacion: "vertical", imagen: "img/cine/rocky1.jpeg" },
  { nombre: "Stranger Things 1", categoria: "cine", orientacion: "vertical", imagen: "img/cine/stranger-things-1.jpeg" },
  { nombre: "Rocky 2", categoria: "cine", orientacion: "vertical", imagen: "img/cine/rocky2.jpeg" },
  { nombre: "Stranger Things 2", categoria: "cine", orientacion: "vertical", imagen: "img/cine/stranger-things-2.jpeg" },
  { nombre: "Stranger Things 3", categoria: "cine", orientacion: "vertical", imagen: "img/cine/stranger-things-3.jpeg" },
  { nombre: "Stranger Things 4", categoria: "cine", orientacion: "vertical", imagen: "img/cine/stranger-things-4.jpeg" },
  { nombre: "Stranger Things 5", categoria: "cine", orientacion: "vertical", imagen: "img/cine/stranger-things-5.jpeg" },
  { nombre: "Stranger Things 6", categoria: "cine", orientacion: "vertical", imagen: "img/cine/stranger-things-6.jpeg" },
  { nombre: "Marylin Monroe 1", categoria: "cine", orientacion: "vertical", imagen: "img/cine/marylin-monroe-1.jpeg" },
  { nombre: "Rapidos y furiosos 1", categoria: "cine", orientacion: "vertical", imagen: "img/cine/rapidos-y-furiosos-1.jpeg", descripcion: "El precio incluye el set completo de 2 cuadros."},
  { nombre: "El Padrino 1", categoria: "cine", orientacion: "vertical", imagen: "img/cine/elpadrino-1.jpeg" },


  /* ================= SCARFACE ================= */
  { nombre: "Scarface 1", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-1.jpeg" },
  { nombre: "Scarface 2", categoria: "scarface", orientacion: "horizontal", imagen: "img/scarface/scarface-2.jpeg" },
  { nombre: "Scarface 3", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-3.jpeg" },
  { nombre: "Scarface 4", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-4.jpeg" },
  { nombre: "Scarface 5", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-5.jpeg" },
  { nombre: "Scarface 6", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-6.jpeg" },
  { nombre: "Scarface 7", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-7.jpeg" },
  { nombre: "Scarface 8", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-8.jpeg" },
  { nombre: "Scarface 9", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-9.jpeg" },
  { nombre: "Scarface 10", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-10.jpeg" },
  { nombre: "Scarface 11", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-11.jpeg" },
  { nombre: "Scarface 12", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-12.jpeg" },
  { nombre: "Scarface 13", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-13.jpeg" },
  { nombre: "Scarface 14", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-14.jpeg" },
  { nombre: "Scarface 15", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-15.jpeg" },
  { nombre: "Scarface 16", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-16.jpeg" },
  { nombre: "Scarface 17", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-17.jpeg" },
  { nombre: "Scarface 18", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-18.jpeg" },
  { nombre: "Scarface 19", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-19.jpeg" },
  { nombre: "Scarface 20", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-20.jpeg" },
  { nombre: "Scarface 21", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-21.jpeg" },
  { nombre: "Scarface 22", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-22.jpeg" },
  { nombre: "Scarface 23", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-23.jpeg" },
  { nombre: "Scarface 24", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-24.jpeg" },
  { nombre: "Scarface 25", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-25.jpeg" },
  { nombre: "Scarface 26", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-26.jpeg" },
  { nombre: "Scarface 27", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-27.jpeg" },
  { nombre: "Scarface 28", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-28.jpeg" },
  { nombre: "Scarface 29", categoria: "scarface", orientacion: "vertical", imagen: "img/scarface/scarface-29.jpeg" },
  

  /* ================= LUJO ================= */
  { nombre: "Moet", categoria: "lujo", orientacion: "vertical", imagen: "img/lujo/moet-1.jpeg" },
  { nombre: "Reloj", categoria: "lujo", orientacion: "vertical", imagen: "img/lujo/reloj-1.jpeg" },

  /* ================= MONOPOLY ================= */
  { nombre: "Monopoly 1", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-1.jpeg" },
  { nombre: "Monopoly 2", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-2.jpeg", descripcion: "El precio incluye el set completo de 3 cuadros."},
  { nombre: "Monopoly 3", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-3.jpeg" },
  { nombre: "Monopoly 4", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-4.jpeg" },
  { nombre: "Monopoly 5", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-5.jpeg" },
  { nombre: "Monopoly 6", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-6.jpeg" },
  { nombre: "Monopoly 7", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-7.jpeg" },
  { nombre: "Monopoly 8", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-8.jpeg" },
  { nombre: "Monopoly 9", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-9.jpeg" },
  { nombre: "Monopoly 10", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-10.jpeg" },
  { nombre: "Monopoly 11", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-11.jpeg" },
  { nombre: "Monopoly 12", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-12.jpeg" },
  { nombre: "Monopoly 13", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-13.jpeg" },
  { nombre: "Monopoly 14", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-14.jpeg" },
  { nombre: "Monopoly 15", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-15.jpeg" },
  { nombre: "Monopoly 16", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-16.jpeg" },
  { nombre: "Monopoly 17", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-17.jpeg" },
  { nombre: "Monopoly 18", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-18.jpeg" },
  { nombre: "Monopoly 19", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-19.jpeg" },
  { nombre: "Monopoly 20", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-20.jpeg" },
  { nombre: "Monopoly 21", categoria: "monopoly", orientacion: "vertical", imagen: "img/monopoly/monopoly-21.jpeg" },


  /* ================= SUPERHEROES ================= */
  { nombre: "Spiderman 1", categoria: "superheroes", orientacion: "vertical", imagen: "img/superheroes/spiderman-1.jpeg" },
  { nombre: "El Guasón 1", categoria: "superheroes", orientacion: "vertical", imagen: "img/superheroes/guason-1.jpeg" },



  /* ================= ONE PIECE ================= */
  { nombre: "One Piece 1", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece1.jpeg" },
  { nombre: "One Piece 2", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece2.jpeg" },
  { nombre: "One Piece 3", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece3.jpeg" },
  { nombre: "One Piece 4", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece4.jpeg" },
  { nombre: "One Piece 5", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece5.jpeg" },
  { nombre: "One Piece 6", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece6.jpeg" },
  { nombre: "One Piece 7", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece7.jpeg" },
  { nombre: "One Piece 8", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece8.jpeg" },
  { nombre: "One Piece 8", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece9.jpeg" },
  { nombre: "One Piece 10", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece10.jpeg" },
  { nombre: "One Piece 11", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece11.jpeg" },
  { nombre: "One Piece 12", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece12.jpeg" },
  { nombre: "One Piece 13", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece13.jpeg" },
  { nombre: "One Piece 14", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece14.jpeg" },
  { nombre: "One Piece 15", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece15.jpeg" },
  { nombre: "One Piece 16", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece16.jpeg" },
  { nombre: "One Piece 17", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece17.jpeg" },
  { nombre: "One Piece 18", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece18.jpeg" },
  { nombre: "One Piece 19", categoria: "onepiece", orientacion: "vertical", imagen: "img/onepiece/onepiece19.jpeg" },

  /* ================= PEAKY BLINDERS ================= */
  { nombre: "Peaky Blinders 1", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/Peaky-blinders-1.jpeg" },
  { nombre: "Peaky Blinders 2", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-2.jpeg" },
  { nombre: "Peaky Blinders 3", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-3.jpeg" },
  { nombre: "Peaky Blinders 4", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-4.jpeg" },
  { nombre: "Peaky Blinders 5", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-5.jpeg" },
  { nombre: "Peaky Blinders 6", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-6.jpeg" },
  { nombre: "Peaky Blinders 7", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-7.jpeg" },
  { nombre: "Peaky Blinders 8", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-8.jpeg" },
  { nombre: "Peaky Blinders 9", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-9.jpeg" },
  { nombre: "Peaky Blinders 10", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-10.jpeg" },
  { nombre: "Peaky Blinders 11", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-11.jpeg" },
  { nombre: "Peaky Blinders 12", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-12.jpeg" },
  { nombre: "Peaky Blinders 13", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-13.jpeg" },
  { nombre: "Peaky Blinders 14", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-14.jpeg" },
  { nombre: "Peaky Blinders 15", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-15.jpeg" },
  { nombre: "Peaky Blinders 16", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-16.jpeg" },
  { nombre: "Peaky Blinders 17", categoria: "peakyblinders", orientacion: "vertical", imagen: "img/peakyblinders/peaky-blinders-17.jpeg" },


  /* ================= FORMULA 1 ================= */
  { nombre: "Senna 1", categoria: "formula1", orientacion: "vertical", imagen: "img/formula1/senna-1.jpeg" },
  { nombre: "Senna 2", categoria: "formula1", orientacion: "vertical", imagen: "img/formula1/senna-2.jpeg" },
  { nombre: "Senna 3", categoria: "formula1", orientacion: "vertical", imagen: "img/formula1/senna-3.jpeg" },
  { nombre: "Senna 4", categoria: "formula1", orientacion: "vertical", imagen: "img/formula1/senna-4.jpeg" },
  { nombre: "Senna 5", categoria: "formula1", orientacion: "vertical", imagen: "img/formula1/senna-5.jpeg" },
  { nombre: "Senna 6", categoria: "formula1", orientacion: "vertical", imagen: "img/formula1/senna-6.jpeg" },
  { nombre: "Ferrari 1", categoria: "formula1", orientacion: "vertical", imagen: "img/formula1/ferrari-1.jpeg" },
  { nombre: "Ferrari 2", categoria: "formula1", orientacion: "vertical", imagen: "img/formula1/ferrari-2.jpeg" },
  { nombre: "Ferrari 3", categoria: "formula1", orientacion: "vertical", imagen: "img/formula1/ferrari-3.jpeg" },
  { nombre: "Ferrari 4", categoria: "formula1", orientacion: "vertical", imagen: "img/formula1/ferrari-4.jpeg" },
  /* ================= TIO RICO ================= */
  { nombre: "Tio Rico 1", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico1.jpeg" },
  { nombre: "Tio Rico 2", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico2.jpeg" },
  { nombre: "Tio Rico 3", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico3.jpeg" },
  { nombre: "Tio Rico 4", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico4.jpeg" },
  { nombre: "Tio Rico 5", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico5.jpeg" },
  { nombre: "Tio Rico 6", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico6.jpeg" },
  { nombre: "Tio Rico 7", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico7.jpeg" },
  { nombre: "Tio Rico 8", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico8.jpeg" },
  { nombre: "Tio Rico 9", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico9.jpeg" },
  { nombre: "Tio Rico 10", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico10.jpeg" },
  { nombre: "Tio Rico 11", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico11.jpeg" },
  { nombre: "Tio Rico 12", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico12.jpeg" },
  { nombre: "Tio Rico 13", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico13.jpeg" },
  { nombre: "Tio Rico 14", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico14.jpeg" },
  { nombre: "Tio Rico 15", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico15.jpeg" },
  { nombre: "Tio Rico 16", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico16.jpeg" },
  { nombre: "Tio Rico 17", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico17.jpeg" },
  { nombre: "Tio Rico 18", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico18.jpeg" },
  { nombre: "Tio Rico 19", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico19.jpeg" },
  { nombre: "Tio Rico 20", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico20.jpeg" },
  { nombre: "Tio Rico 21", categoria: "tiorico", orientacion: "vertical", imagen: "img/tiorico/tiorico21.jpeg" },

/* ================= AUTOS ================= */
  { nombre: "Autos 1", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos1.jpeg" },
  { nombre: "Autos 2", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos2.jpeg" },
  { nombre: "Autos 3", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos3.jpeg" },
  { nombre: "Autos 4", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos4.jpeg" },
  { nombre: "Autos 5", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos5.jpeg" },
  { nombre: "Autos 6", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos6.jpeg" },
  { nombre: "Autos 7", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos7.jpeg" },
  { nombre: "Autos 8", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos8.jpeg" },
  { nombre: "Autos 9", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos9.jpeg" },
  { nombre: "Autos 10", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos10.jpeg" },
  { nombre: "Autos 11", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos11.jpeg" },
  { nombre: "Autos 12", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos12.jpeg" },
  { nombre: "Autos 13", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos13.jpeg" },
  { nombre: "Autos 14", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos14.jpeg" },
  { nombre: "Autos 15", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos15.jpeg" },
  { nombre: "Autos 16", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos16.jpeg" },
  { nombre: "Autos 17", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos17.jpeg" },
  { nombre: "Autos 18", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos18.jpeg" },
  { nombre: "Autos 19", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos19.jpeg" },
  { nombre: "Autos 20", categoria: "autos", orientacion: "vertical", imagen: "img/autos/autos20.jpeg" },

  /* ================= RICKY RICON ================= */
  { nombre: "Ricky ricon 1", categoria: "rickyricon", orientacion: "vertical", imagen: "img/ricky-ricon/ricky-ricon-1.jpeg" },
  { nombre: "Ricky ricon 2", categoria: "rickyricon", orientacion: "vertical", imagen: "img/ricky-ricon/ricky-ricon-2.jpeg" },
  { nombre: "Ricky ricon 3", categoria: "rickyricon", orientacion: "vertical", imagen: "img/ricky-ricon/ricky-ricon-3.jpeg" },
  { nombre: "Ricky ricon 4", categoria: "rickyricon", orientacion: "vertical", imagen: "img/ricky-ricon/ricky-ricon-4.jpeg" },
  { nombre: "Ricky ricon 5", categoria: "rickyricon", orientacion: "vertical", imagen: "img/ricky-ricon/ricky-ricon-5.jpeg" },
  { nombre: "Ricky ricon 6", categoria: "rickyricon", orientacion: "vertical", imagen: "img/ricky-ricon/ricky-ricon-6.jpeg" },
  { nombre: "Ricky ricon 7", categoria: "rickyricon", orientacion: "vertical", imagen: "img/ricky-ricon/ricky-ricon-7.jpeg" },
  { nombre: "Ricky ricon 8", categoria: "rickyricon", orientacion: "vertical", imagen: "img/ricky-ricon/ricky-ricon-8.jpeg" },
  { nombre: "Ricky ricon 9", categoria: "rickyricon", orientacion: "vertical", imagen: "img/ricky-ricon/ricky-ricon-9.jpeg" }
];
/* ================= KEYWORDS ================= */
const keywords = {

  futbol: [
    "futbol", "fútbol", "pelota", "cancha", "gol",
    "maradona", "diego", "el diego", "d10s",
    "seleccion", "argentina", "campeones",
    "mundial", "qatar", "campeon del mundo",
    "10", "numero 10"
  ],

  cine: [
    "cine", "pelicula", "película", "pelis",
    "rocky", "rocky balboa",
    "el padrino", "padrino",
    "scarface",
    "rapidos y furiosos", "rapidos", "furiosos",
    "stranger things", "stranger"
  ],

  musica: [
    "musica", "música", "rock", "pop",
    "soda", "soda stereo", "cerati",
    "the weeknd", "weeknd",
    "cantante", "banda", "musical"
  ],

  dolar: [
    "dolar", "dólar", "usd",
    "billete", "billetes",
    "dolares", "verdes"
  ],

  dinero: [
    "dinero", "plata", "efectivo", "cash"
  ],

  lujo: [
    "lujo", "lujoso", "premium", "exclusivo",
    "oro", "dorado",
    "reloj", "relojes",
    "champagne", "champan",
    "moet", "botella"
  ],

  superheroes: [
    "marvel", "dc",
    "spiderman", "hombre araña",
    "batman",
    "joker", "guason",
    "iron man", "thor"
  ],

  peakyblinders: [
    "peaky blinders", "peaky",
    "tommy shelby", "thomas shelby",
    "shelby",
    "mafia", "gangster", "mafioso"
  ],

  monopoly: [
    "monopoly",
    "juego", "juego de mesa",
    "banco", "banquero",
    "dinero", "billetes"
  ],

  formula1: [
    "formula 1", "f1",
    "autos", "automovilismo",
    "senna", "ayrton", "ayrton senna",
    "ferrari", "red bull",
    "carreras"
  ],

  autos: [
    "autos", "auto", "coche", "coches",
    "deportivo", "superauto",
    "ferrari", "lamborghini", "porsche",
    "mustang", "ford mustang",
    "velocidad", "motor"
  ],

  rickyricon: [
    "ricky ricon", "ricky ricón",
    "richie rich",
    "niño rico", "nene rico",
    "millonario", "rico",
    "lujo", "dinero", "fortuna"
  ],

  tiorico: [
    "tio rico", "tío rico",
    "scrooge mcduck",
    "rico mc pato",
    "pato donald",
    "oro", "monedas",
    "fortuna", "millonario"
  ],

  scarface: [
    "scarface",
    "tony montana",
    "mafia", "mafioso", "gangster",
    "miami",
    "elvira"
  ],

  onepiece: [
    "one piece",
    "anime", "dibujitos", "manga",
    "luffy", "zoro",
    "pirata", "piratas"
  ]

};


/* ================= PRODUCTOS & PRECIOS ================= */
let listaVisible = [...productos]; // productos debe estar definido

/* ================= FUNCIONES ================= */

/* --- Normalizar texto --- */
function normalizarTexto(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

/* --- Obtener precio --- */
function obtenerPrecio(medida, led, orientacion, nombreProducto) {
  // Revisar precios especiales
  for (const clave in preciosEspeciales) {
    const nombres = clave.split(',').map(n => n.trim()); // separar nombres por coma
    if (nombres.includes(nombreProducto)) {
      const precioObj = preciosEspeciales[clave][medida];
      if (!precioObj) return null;
      return led ? precioObj.led : precioObj.normal;
    }
  }

  // Precios generales
  if (orientacion === "horizontal") {
    return led ? preciosHorizontalLed[medida] : preciosHorizontal[medida];
  } else if (orientacion === "vertical") {
    return led ? preciosVerticalLed[medida] : preciosVertical[medida];
  }

  return null;
}


/* --- Actualizar contador carrito --- */
function actualizarCartCount() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  document.querySelectorAll("#cart-count").forEach(c => c.textContent = total);
}

/* --- Mostrar mini carrito --- */
function mostrarMiniCarrito(item) {
  let mini = document.getElementById("mini-carrito");
  if (!mini) {
    mini = document.createElement("div");
    mini.id = "mini-carrito";
    Object.assign(mini.style, {
      position: "fixed",
      top: "90px",
      right: "20px",
      width: "320px",
      background: "#fff",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,.2)",
      zIndex: "9999",
      padding: "16px",
      fontFamily: "inherit",
    });
    document.body.appendChild(mini);
  }

  mini.innerHTML = `
    <div style="display:flex; gap:12px;">
      <img src="${item.imagen}" style="width:70px; border-radius:8px;">
      <div style="flex:1">
        <strong>${item.nombre}</strong>
        <div>Medida: ${item.medida}</div>
        <div>Cant: ${item.cantidad}</div>
        <div><b>$${(item.precio * item.cantidad).toLocaleString("es-AR")}</b></div>
      </div>
      <span style="cursor:pointer;font-size:18px" onclick="this.parentElement.parentElement.remove()">✕</span>
    </div>
    <a href="carrito.html" style="
      display:block;
      margin-top:12px;
      background:#000;
      color:#fff;
      text-align:center;
      padding:10px;
      border-radius:8px;
      text-decoration:none;
      font-weight:600;
    ">VER CARRITO</a>
  `;

  setTimeout(() => mini.remove(), 4000);
}

/* --- Render productos --- */
function renderProductos() {
  if (!contenedor || !template) return;
  contenedor.innerHTML = "";

  listaVisible.forEach(producto => {
    const card = template.cloneNode(true);
    const img = card.querySelector(".cuadro-img");
    const nombre = card.querySelector(".cuadro-nombre");
    const descripcion = card.querySelector(".cuadro-descripcion");
    if (descripcion) {
      if (producto.descripcion) {
        descripcion.textContent = producto.descripcion;
      } else {
        descripcion.remove();
      }
    }

    const selectMedida = card.querySelector(".select-medida");
    const checkLed = card.querySelector(".check-led");
    const cantidad = card.querySelector(".input-cantidad");
    const precioEl = card.querySelector(".precio");
    const btnAgregar = card.querySelector(".btn-agregar");

    img.src = producto.imagen;
    img.style.cursor = "pointer";
    img.onclick = () => {
      document.getElementById("imagenModalSrc").src = img.src;
      new bootstrap.Modal(document.getElementById("imagenModal")).show();
    };

    nombre.textContent = producto.nombre;

    // 🔹 Medidas especiales o generales
    let medidas = [];
    for (const clave in preciosEspeciales) {
      const nombres = clave.split(',').map(n => n.trim());
      if (nombres.includes(producto.nombre)) {
        medidas = Object.keys(preciosEspeciales[clave]);
        break;
      }
    }
    if (medidas.length === 0) {
      medidas = producto.orientacion === "horizontal"
        ? Object.keys(preciosHorizontal)
        : Object.keys(preciosVertical);
    }

    medidas.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m;
      opt.textContent = `${m} cm`;
      selectMedida.appendChild(opt);
    });

    function actualizarPrecio() {
      const precio = obtenerPrecio(selectMedida.value, checkLed.checked, producto.orientacion, producto.nombre);
      precioEl.textContent = precio ? `$${(precio * (cantidad.value || 1)).toLocaleString("es-AR")}` : "$0";
    }

    selectMedida.onchange = actualizarPrecio;
    checkLed.onchange = actualizarPrecio;
    cantidad.oninput = actualizarPrecio;
    actualizarPrecio();

    btnAgregar.onclick = () => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      const precioUnitario = obtenerPrecio(selectMedida.value, checkLed.checked, producto.orientacion, producto.nombre);
      carrito.push({
        producto: producto.nombre,
        imagen: producto.imagen,
        categoria: producto.categoria,
        medida: selectMedida.value,
        led: checkLed.checked,
        cantidad: Number(cantidad.value) || 1,
        precioUnitario: precioUnitario
      });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCartCount();

      mostrarMiniCarrito({
        nombre: producto.nombre,
        imagen: producto.imagen,
        medida: selectMedida.value,
        cantidad: Number(cantidad.value) || 1,
        precio: precioUnitario
      });
    };

    contenedor.appendChild(card);
  });
}

/* ================= CATEGORÍAS ================= */
const personalizadosSection = document.getElementById("personalizados-section");
document.querySelectorAll(".categorias button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".categorias button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cat = btn.dataset.cat;
    if (cat === "personalizados") {
      contenedor.innerHTML = "";
      document.getElementById("sin-resultados").classList.add("d-none");
      personalizadosSection.classList.remove("d-none");
      return;
    }

    personalizadosSection.classList.add("d-none");
    listaVisible = cat === "todos" ? [...productos] : productos.filter(p => p.categoria === cat);
    renderProductos();
  });
});

/* ================= BUSCADOR ================= */
const inputBuscador = document.getElementById("buscador");
if (inputBuscador) {
  inputBuscador.addEventListener("input", () => {
    const texto = normalizarTexto(inputBuscador.value);
    if (!texto) { listaVisible = [...productos]; renderProductos(); return; }

    listaVisible = productos.filter(producto => {
      const nombreNormalizado = normalizarTexto(producto.nombre);
      if (nombreNormalizado.includes(texto)) return true;
      const palabrasClave = keywords[producto.categoria] || [];
      return palabrasClave.some(k => normalizarTexto(k).includes(texto));
    });

    renderProductos();
  });
}

/* ================= INIT ================= */
actualizarCartCount();
renderProductos();

/* --- Busqueda desde URL --- */
const params = new URLSearchParams(window.location.search);
const searchParam = params.get("search");
if (searchParam && inputBuscador) {
  inputBuscador.value = decodeURIComponent(searchParam);
  inputBuscador.dispatchEvent(new Event("input"));
}

/* ================= BUSCADOR OVERLAY INDEX ================= */
document.addEventListener("DOMContentLoaded", () => {
  const btnLupa = document.getElementById("btn-lupa");
  const overlay = document.getElementById("search-overlay");
  const inputMobile = document.getElementById("search-mobile");
  const closeSearch = document.getElementById("close-search");

  if (!btnLupa || !overlay) return;

  btnLupa.addEventListener("click", () => {
    overlay.classList.add("active");
    setTimeout(() => inputMobile.focus(), 200);
  });

  closeSearch.addEventListener("click", () => { overlay.classList.remove("active"); inputMobile.value = ""; });
  overlay.addEventListener("click", e => { if (e.target === overlay) { overlay.classList.remove("active"); inputMobile.value = ""; } });

  inputMobile.addEventListener("keydown", e => {
    if (e.key === "Enter" && inputMobile.value.trim()) {
      window.location.href = `productos.html?search=${encodeURIComponent(inputMobile.value.trim())}`;
    }
  });
});



