export const eventData = {
  celebrant: 'SOFÍA',
  age: 7,
  theme: 'El Club del Misterio',
  hosts: ['Fede Vigevani', 'La Vecibanda', 'Ian Lucas', 'El Parce'],
  hashtags: ['#FedeSquad', '#LaVecibanda', '#IanLucas', '#ElParce'],
  floatingImages: [
    { src: 'floating/alfa.png', anim: 'animate-float-slow', left: '8%', size: 'w-14 h-14' },
    { src: 'floating/azazel.png', anim: 'animate-float-mid', left: '28%', size: 'w-12 h-12' },
    { src: 'floating/duffy.png', anim: 'animate-float-fast', left: '58%', size: 'w-14 h-14' },
    { src: 'floating/fantasma.png', anim: 'animate-float-mid', left: '82%', size: 'w-12 h-12' },
    { src: 'floating/luli.png', anim: 'animate-float-slow', left: '42%', size: 'w-14 h-14' },
  ],
  date: {
  display: 'Sábado, 19 de Septiembre',
  note: 'Año Oficial de la Misión 2026',
  // Fecha objetivo para el contador regresivo (año, mes, día, hora, minuto)
  target: new Date(2026, 8, 19, 15, 0, 0),
},
  time: {
    display: '03:00 PM – 06:00 PM',
    note: 'Llegada puntual para no perder pistas',
  },
  venue: {
    name: 'Polideportivo de Chaca',
    address: 'Calle 41 - 2650, Villa Maipú',
    mapsUrl: 'https://maps.app.goo.gl/TujsNsG1ZmaHavzc6',
    imageUrl:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCA_JLTmJHEkRaABWOBCRL8f3RsS7caMGCkfcrNvlue7q0_YSqBkUAE4kJMe7kClJFSNFrHNjw-Mt_AJUezZa4YPl4DrKNQxF2kTlBeMzqgPJ34iEOXAPgmd4mcNTesscxgjlqPhWrqEQPZN7DtA0METHYWVYU050csOdJ6KwCbBI1EmzqitIQ_LvXYPOHrghpSFwog9ERfLc0Jl86In45nM-hSD8pBb42KzRe87qHHuVyFlmXb9Mly',
  },
  dressCode: {
    title: 'Ropa cómoda o Neón',
    note: '¡O vení caracterizado como detective secreto del Club del Misterio!',
  },
  rsvp: {
    deadline: '17 de Septiembre',
    whatsappUrl:
  'https://api.whatsapp.com/send?phone=5491165690508&text=%C2%A1Hola!%20Confirmo%20mi%20asistencia%20a%20la%20misi%C3%B3n%20secreta%20del%20cumplea%C3%B1os%20%237%20de%20Sof%C3%ADa%20con%20el%20Club%20del%20Misterio%20%F0%9F%8E%89%F0%9F%95%B5%EF%B8%8F',
  },

  
  itinerary: [
    {
      time: '04:00 PM',
      title: 'Llegada de la Vecibanda & Agentes',
      note: 'Entrega de credenciales VIP y lupas secretas.',
      color: 'bg-secondary text-on-secondary',
      textColor: 'text-secondary',
    },
    {
      time: '05:00 PM',
      title: 'Retos del Club del Misterio',
      note: 'Pruebas en equipo, escape room infantil y pistas.',
      color: 'bg-tertiary text-on-tertiary',
      textColor: 'text-tertiary',
    },
    {
      time: '06:30 PM',
      title: 'Merienda de Campeones & Show',
      note: 'Snacks favoritos del squad y show interactivo.',
      color: 'bg-primary text-on-primary',
      textColor: 'text-primary',
    },
    {
      time: '07:30 PM',
      title: 'Pastel, Mañanitas & Piñata',
      note: '¡Momento de soplar las 7 velitas con Sofía!',
      color: 'bg-secondary-fixed text-on-secondary',
      textColor: 'text-secondary-fixed',
    },
    {
      time: '08:30 PM',
      title: 'Fiesta Neón con El Parce e Ian',
      note: 'Luces ultravioleta, pulseras glow y baile squad.',
      color: 'bg-primary-container text-on-primary',
      textColor: 'text-primary-fixed',
    },
  ],
}
