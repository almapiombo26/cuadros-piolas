/* ================= DOM ================= */
const contenedor = document.getElementById("contenedor-productos");
const templateEl = document.getElementById("template-cuadro");
const template = templateEl ? templateEl.content : null;

/* ================= PRECIOS ================= */
// Verticales
const preciosVertical = {
  "40x60": 40000,
  "80x60": 60000,
  "100x70": 80000
};
const preciosVerticalLed = {
  "40x60": 65000,
  "80x60": 85000,
  "100x70": 100000
};

// Horizontales
const preciosHorizontal = {
  "150x60": 100000,
  "170x70": 130000
};
const preciosHorizontalLed = {
  "150x60": 145000,
  "170x70": 160000
};

/* ================= PRECIOS ESPECIALES ================= */
const preciosEspeciales = {

    /* ================= MONOPOLY ================= */
  "Monopoly 2": { /* ================= son 3 cuadros juntos ================= */
    "60x40": { normal: 120000, led: 160000 }
  },

  "Monopoly 17": {
    "60x50": { normal: 60000, led: 85000 },
    "80x70": { normal: 80000, led: 105000 },
    "100x90": { normal: 100000, led: 125000 }
  },
  "Monopoly 18": {
    "60x50": { normal: 60000, led: 85000 },
    "80x70": { normal: 80000, led: 105000 },
    "100x90": { normal: 100000, led: 125000 }
  },
  "Monopoly 19": {
    "60x50": { normal: 60000, led: 85000 },
    "80x70": { normal: 80000, led: 105000 },
    "100x90": { normal: 100000, led: 125000 }
  },


    /* ================= SCARFACE ================= */

  "Scarface 11": {
    "50x60": { normal: 60000, led: 85000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },

  "Scarface 15": {
    "50x60": { normal: 60000, led: 85000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },
  "Scarface 21": {
    "50x60": { normal: 60000, led: 85000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },
  "Scarface 22": {
    "50x60": { normal: 60000, led: 85000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },

  "Scarface 13": {
    "40x70": { normal: 50000, led: 75000 }
  },

  "Scarface 14": {
    "40x70": { normal: 50000, led: 75000 }
  },

  "Rapidos y furiosos 1": {
    "60x40": { normal: 80000, led: 130000 },
    "60x80": { normal: 120000, led: 170000 },
    "70x100": { normal: 160000, led: 200000 }
  },

  /* estos son mas cuadradones */
  "Scarface 26": {
    "60x60": { normal: 60000, led: 85000 },
    "80x80": { normal: 80000, led: 105000 },
    "100x100": { normal: 100000, led: 125000 }
  },

  "Scarface 28": {
    "60x60": { normal: 60000, led: 85000 },
    "80x80": { normal: 80000, led: 105000 },
    "100x100": { normal: 100000, led: 125000 }
  },

 /* ================= PEAKY BLINDERS ================= */

  "Peaky Blinders 1": {
    "125x80": { normal: 100000, led: 140000 }
  },
  "Peaky Blinders 2": {
    "125x80": { normal: 100000, led: 140000 }
  },

  "Peaky Blinders 4": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },
  "Peaky Blinders 5": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },
  "Peaky Blinders 6": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "Peaky Blinders 7": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },
  "Peaky Blinders 8": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "Peaky Blinders 9": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },
  "Peaky Blinders 10": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },
  "Peaky Blinders 12": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "Peaky Blinders 13": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "Peaky Blinders 14": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

   "Peaky Blinders 16": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

   "Peaky Blinders 17": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

   "Peaky Blinders 20": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

   "Peaky Blinders 21": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

   "Peaky Blinders 22": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },



  "Peaky Blinders 11": {
    "50x60": { normal: 60000, led: 85000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },


/* ================= FUTBOL ================= */
  "Diego Maradona 3": {
    "50x60": { normal: 60000, led: 85000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
    
  },

  "Diego Maradona 6": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "Lionel Messi 1": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "Lionel Messi 2": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "Lionel Messi 5": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "Lionel Messi 4": {
    "50x60": { normal: 60000, led: 85000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },
  "Lionel Messi 7": {
    "50x60": { normal: 60000, led: 85000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },

  /* ================= ONE PIECE ================= */
  "One Piece 2": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "One Piece 3": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "One Piece 5": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "One Piece 9": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "One Piece 10": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "One Piece 11": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "One Piece 18": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },

  "One Piece 19": {
    "40x70": { normal: 50000, led: 75000 },
    "60x90": { normal: 70000, led: 95000 },
    "70x110": { normal: 90000, led: 110000 }
  },








/* poner precios q me diga dami */
  "One Piece 6": {
    "80x40": { normal: 50000, led: 75000 },
    "120x60": { normal: 70000, led: 95000 },
    "150x60": { normal: 90000, led: 110000 }
  },

  "One Piece 7": {
    "80x40": { normal: 50000, led: 75000 },
    "120x60": { normal: 70000, led: 95000 },
    "150x60": { normal: 90000, led: 110000 }
  },

  "One Piece 8": {
    "80x40": { normal: 50000, led: 75000 },
    "120x60": { normal: 70000, led: 95000 },
    "150x60": { normal: 90000, led: 110000 }
  },

  "One Piece 13": {
    "80x40": { normal: 50000, led: 75000 },
    "120x60": { normal: 70000, led: 95000 },
    "150x60": { normal: 90000, led: 110000 }
  },




  "One Piece 4": {
    "50x60": { normal: 60000, led: 85000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },

  "One Piece 12": {
    "50x60": { normal: 60000, led: 85000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },

  "One Piece 14": {
    "50x60": { normal: 60000, led: 85000 },
    "70x80": { normal: 80000, led: 105000 },
    "90x100": { normal: 100000, led: 125000 }
  },














};

/* ================= PRODUCTOS ================= */
const productos = [
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
  { nombre: "Scarface 1", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-1.jpeg" },
  { nombre: "Scarface 2", categoria: "cine", orientacion: "horizontal", imagen: "img/cine/scarface-2.jpeg" },
  { nombre: "Scarface 3", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-3.jpeg" },
  { nombre: "Scarface 4", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-4.jpeg" },
  { nombre: "Scarface 5", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-5.jpeg" },
  { nombre: "Scarface 6", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-6.jpeg" },
  { nombre: "Scarface 7", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-7.jpeg" },
  { nombre: "Scarface 8", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-8.jpeg" },
  { nombre: "Scarface 9", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-9.jpeg" },
  { nombre: "Scarface 10", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-10.jpeg" },
  { nombre: "Scarface 11", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-11.jpeg" },
  { nombre: "Scarface 12", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-12.jpeg" },
  { nombre: "Scarface 13", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-13.jpeg" },
  { nombre: "Scarface 14", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-14.jpeg" },
  { nombre: "Scarface 15", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-15.jpeg" },
  { nombre: "Scarface 16", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-16.jpeg" },
  { nombre: "Scarface 17", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-17.jpeg" },
  { nombre: "Scarface 18", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-18.jpeg" },
  { nombre: "Scarface 19", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-19.jpeg" },
  { nombre: "Scarface 20", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-20.jpeg" },
  { nombre: "Scarface 21", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-21.jpeg" },
  { nombre: "Scarface 22", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-22.jpeg" },
  { nombre: "Scarface 23", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-23.jpeg" },
  { nombre: "Scarface 24", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-24.jpeg" },
  { nombre: "Scarface 25", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-25.jpeg" },
  { nombre: "Scarface 26", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-26.jpeg" },
  { nombre: "Scarface 27", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-27.jpeg" },
  { nombre: "Scarface 28", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-28.jpeg" },
  { nombre: "Scarface 29", categoria: "cine", orientacion: "vertical", imagen: "img/cine/scarface-29.jpeg" },

  { nombre: "El Padrino 1", categoria: "cine", orientacion: "vertical", imagen: "img/cine/elpadrino-1.jpeg" },
  { nombre: "Marylin Monroe 1", categoria: "cine", orientacion: "vertical", imagen: "img/cine/marylin-monroe-1.jpeg" },
  { nombre: "Rocky 1", categoria: "cine", orientacion: "vertical", imagen: "img/cine/rocky1.jpeg" },
  { nombre: "Rocky 2", categoria: "cine", orientacion: "vertical", imagen: "img/cine/rocky2.jpeg" },
  { nombre: "Rapidos y furiosos 1", categoria: "cine", orientacion: "vertical", imagen: "img/cine/rapidos-y-furiosos-1.jpeg", descripcion: "El precio incluye el set completo de 2 cuadros."},
  { nombre: "Stranger Things 1", categoria: "cine", orientacion: "vertical", imagen: "img/cine/stranger-things-1.jpeg" },
  { nombre: "Stranger Things 2", categoria: "cine", orientacion: "vertical", imagen: "img/cine/stranger-things-2.jpeg" },
  { nombre: "Stranger Things 3", categoria: "cine", orientacion: "vertical", imagen: "img/cine/stranger-things-3.jpeg" },
  { nombre: "Stranger Things 4", categoria: "cine", orientacion: "vertical", imagen: "img/cine/stranger-things-4.jpeg" },
  { nombre: "Stranger Things 5", categoria: "cine", orientacion: "vertical", imagen: "img/cine/stranger-things-5.jpeg" },
  { nombre: "Stranger Things 6", categoria: "cine", orientacion: "vertical", imagen: "img/cine/stranger-things-6.jpeg" },

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
  { nombre: "Senna 1", categoria: "formula1", orientacion: "vertical", imagen: "img/automovilismo/senna-1.jpeg" },
  { nombre: "Senna 2", categoria: "formula1", orientacion: "vertical", imagen: "img/automovilismo/senna-2.jpeg" },
  { nombre: "Senna 3", categoria: "formula1", orientacion: "vertical", imagen: "img/automovilismo/senna-3.jpeg" },
  { nombre: "Senna 4", categoria: "formula1", orientacion: "vertical", imagen: "img/automovilismo/senna-4.jpeg" },
  { nombre: "Senna 5", categoria: "formula1", orientacion: "vertical", imagen: "img/automovilismo/senna-5.jpeg" },
  { nombre: "Senna 6", categoria: "formula1", orientacion: "vertical", imagen: "img/automovilismo/senna-6.jpeg" },
  { nombre: "Ferrari 1", categoria: "formula1", orientacion: "vertical", imagen: "img/automovilismo/ferrari-1.jpeg" },
  { nombre: "Ferrari 2", categoria: "formula1", orientacion: "vertical", imagen: "img/automovilismo/ferrari-2.jpeg" },
  { nombre: "Ferrari 3", categoria: "formula1", orientacion: "vertical", imagen: "img/automovilismo/ferrari-3.jpeg" },
  { nombre: "Ferrari 4", categoria: "formula1", orientacion: "vertical", imagen: "img/automovilismo/ferrari-4.jpeg" },

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
    "futbol", "fútbol", "maradona", "pelota","cancha", "gol", "dios", "10", "d10s", "D10S", "seleccion", "campeones", "Seleccion", "Campeones", "Gol", "Futbol"
  ],

  cine: [
    "cine", "pelicula", "película",
    "rocky", "padrino", "scarface",
    "rapidos", "rápidos", "furiosos",
    "stranger", "things", "alpachino", "scarface"
  ],

  musica: [
    "musica", "música", "soda",
    "cantante", "rock", "The Weekend", "the weekend"
  ],

  dolar: [
    "dolar", "dólar", "billete", "usd"
  ],

  dinero: [
    "dinero", "plata", "pato donald", "billetes"
  ],

  lujo: [
    "lujo", "moet", "reloj",
    "champagne", "botella", "botellas"
  ],

  superheroes: [
    "marvel", "MARVEL", "dc", "DC",
    "spiderman", "guason", "joker"
  ],

  peakyblinders: [
    "Tommy Shelby", "Shelby",
    "mafia", "Mafia", "shelby", "thomas", "Thomas Shelby", "familia"
  ],

  monopoly: [
    "monopoly", "dinero", "banco", "billetes"
  ],

  formula1: [
    "ferrari", "colapinto", "ayrton",
    "Senna", "automovilismo", "autos"
  ],

  rickyricon: [
    "ricky ricon", "ricky ricón", "richie rich",
    "rico", "millonario", "dinero", "lujo",
    "billetes", "banco", "cash", "usd", "niño rico", "Niño"
  ],

  onepuece:[
    "Anime", "Dibujitos", "Luffy", "Zoro"
  ]

};


/* ================= ESTADO ================= */
let listaVisible = [...productos];

/* ================= CATEGORÍAS ================= */
document.querySelectorAll(".categorias button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".categorias button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const cat = btn.dataset.cat;
    listaVisible = cat === "todos"
      ? [...productos]
      : productos.filter(p => p.categoria === cat);

    renderProductos();
  });
});

/* ================= BUSCADOR ================= */
const inputBuscador = document.getElementById("buscador");

if (inputBuscador) {
  inputBuscador.addEventListener("input", () => {
    const texto = inputBuscador.value.toLowerCase().trim();

    if (texto === "") {
      listaVisible = [...productos];
      renderProductos();
      return;
    }

    listaVisible = productos.filter(producto => {
      if (producto.nombre.toLowerCase().includes(texto)) return true;

      const palabrasClave = keywords[producto.categoria] || [];
      return palabrasClave.some(k =>
        k.toLowerCase().includes(texto)
      );
    });

    renderProductos();
  });
}


/* ================= CARRITO ================= */
function actualizarCartCount() {
  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
  document.querySelectorAll("#cart-count").forEach(c => c.textContent = total);
}

/* ================= RENDER ================= */
function obtenerPrecio(medida, led, orientacion, nombre) {
  if (preciosEspeciales[nombre] && preciosEspeciales[nombre][medida]) {
    return led ? preciosEspeciales[nombre][medida].led : preciosEspeciales[nombre][medida].normal;
  }
  return orientacion === "horizontal"
    ? led ? preciosHorizontalLed[medida] : preciosHorizontal[medida]
    : led ? preciosVerticalLed[medida] : preciosVertical[medida];
}

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



    const medidas = preciosEspeciales[producto.nombre]
      ? Object.keys(preciosEspeciales[producto.nombre])
      : producto.orientacion === "horizontal"
        ? Object.keys(preciosHorizontal)
        : Object.keys(preciosVertical);

    medidas.forEach(m => {
      const opt = document.createElement("option");
      opt.value = m;
      opt.textContent = `${m} cm`;
      selectMedida.appendChild(opt);
    });

    function actualizarPrecio() {
      const precio = obtenerPrecio(selectMedida.value, checkLed.checked, producto.orientacion, producto.nombre);
      precioEl.textContent = `$${(precio * (cantidad.value || 1)).toLocaleString("es-AR")}`;
    }

    selectMedida.onchange = actualizarPrecio;
    checkLed.onchange = actualizarPrecio;
    cantidad.oninput = actualizarPrecio;
    actualizarPrecio();

    btnAgregar.onclick = () => {
      const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push({
        producto: producto.nombre,
        imagen: producto.imagen,
        categoria: producto.categoria,
        medida: selectMedida.value,
        led: checkLed.checked,
        cantidad: Number(cantidad.value) || 1,
        precioUnitario: obtenerPrecio(selectMedida.value, checkLed.checked, producto.orientacion, producto.nombre)
      });
      localStorage.setItem("carrito", JSON.stringify(carrito));
      actualizarCartCount();

      actualizarCartCount();
      mostrarMiniCarrito({
  
        nombre: producto.nombre,
  
        imagen: producto.imagen,
  
        medida: selectMedida.value,
  
        cantidad: Number(cantidad.value) || 1,
  
        precio: obtenerPrecio(
    
          selectMedida.value,
    
          checkLed.checked,
    
          producto.orientacion,
    
          producto.nombre
  
        )

      });

    };

    contenedor.appendChild(card);
  });
}

/* ================= INIT ================= */
actualizarCartCount();
renderProductos();

function mostrarMiniCarrito(item) {
  let mini = document.getElementById("mini-carrito");

  if (!mini) {
    mini = document.createElement("div");
    mini.id = "mini-carrito";
    mini.style.position = "fixed";
    mini.style.top = "90px";
    mini.style.right = "20px";
    mini.style.width = "320px";
    mini.style.background = "#fff";
    mini.style.borderRadius = "12px";
    mini.style.boxShadow = "0 10px 30px rgba(0,0,0,.2)";
    mini.style.zIndex = "9999";
    mini.style.padding = "16px";
    mini.style.fontFamily = "inherit";
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

  setTimeout(() => {
    if (mini) mini.remove();
  }, 4000);
}
