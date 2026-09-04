import AmbientBalloons from './components/AmbientBalloons'
import Reveal from './components/Reveal'
import Countdown from './components/Countdown'
import NameHero from './components/NameHero'
import ConfettiButton from './components/ConfettiButton'
import { eventData } from './eventData'

export default function App() {
  const data = eventData

  return (
    <div className="bg-surface text-on-surface flex flex-col min-h-screen relative overflow-x-hidden selection:bg-primary-container selection:text-on-primary-container">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_4px_24px_rgba(15,19,29,0.7)] pt-safe">
        <div className="h-16 px-gutter-sm flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <div className="px-space-sm py-1 rounded-full bg-surface-container-high/90 shadow-[0_0_12px_rgba(239,194,0,0.25)] flex items-center gap-1.5 -rotate-1">
              <span className="text-tertiary text-sm leading-none">🎉</span>
              <span className="font-label-mission text-label-mission uppercase tracking-wider text-tertiary-fixed">
                ¡Cumpleaños de {data.celebrant} #{data.age}!
              </span>
            </div>
          </div>
          <div className="flex items-center gap-space-xs">
            
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="flex flex-col relative w-full pt-16 pb-28 bg-surface">
        <div className="flex flex-col w-full relative overflow-hidden">
          <AmbientBalloons images={data.floatingImages} />

          <div className="relative z-10 flex flex-col gap-space-2xl px-gutter-sm pb-space-3xl max-w-xl mx-auto w-full">
            {/* Hero */}
            <Reveal className="flex flex-col items-center text-center pt-space-md">
              <div className="inline-flex items-center gap-2 px-space-md py-1.5 rounded-full bg-surface-container-high shadow-lg -rotate-2">
                <span className="inline-block w-2.5 h-2.5 rounded-full bg-tertiary animate-ping" />
                <span className="font-label-mission text-label-mission uppercase tracking-wider text-tertiary-fixed font-bold">
                  Misión confidencial
                </span>
              </div>

              <div className="mt-space-md relative flex flex-col items-center">
                <p className="font-headline-sm text-headline-sm text-secondary-fixed tracking-wide">
                  Estás invitado a la fiesta de:
                </p>                
                <NameHero name={data.celebrant} />
              </div>

              <div className="mt-space-lg flex items-center justify-center gap-2">
                <div className="bg-primary-container text-on-primary-container px-space-lg py-2 rounded-xl shadow-xl rotate-1 flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-[24px]">celebration</span>
                  <span className="font-headline-md text-headline-md font-black tracking-wider">
                    ¡Mis {data.age} años!
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[24px]">search</span>
                </div>
              </div>

              <p className="mt-space-md font-body-md text-body-md text-on-surface-variant max-w-xs">
                ¡Operación Cumpleaños en marcha!
              </p>
              <p className="mt-space-md font-body-md text-body-md text-on-surface-variant max-w-xs">
                Unite al squad para resolver el gran misterio.
              </p>

              <div className="mt-space-md flex flex-wrap justify-center gap-2">
                {data.hashtags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`px-space-sm py-1 rounded-full bg-surface-container text-label-mission font-label-mission uppercase ${
                      ['text-secondary', 'text-tertiary', 'text-primary', 'text-secondary-fixed'][i % 4]
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Reveal>

            {/* Countdown */}
            <Reveal className="flex flex-col items-center">
              <div className="w-full relative rounded-2xl bg-surface-container-low shadow-xl p-space-md flex flex-col items-center">
                <div className="flex items-center gap-2 text-secondary-fixed mb-space-sm">
                  <span className="material-symbols-outlined text-[20px]">timer</span>
                  <span className="font-label-mission text-label-mission uppercase tracking-widest font-bold">
                    Tiempo para el lanzamiento
                  </span>
                </div>
                <Countdown targetDate={data.date.target} />
                <ConfettiButton />
              </div>
            </Reveal>

            {/* Datos de la misión */}
            <Reveal className="flex flex-col gap-space-sm">
              <div className="flex items-center gap-2 px-1">
                <span className="material-symbols-outlined text-secondary text-[22px]">badge</span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Datos de la Misión
                </h2>
              </div>
              <div className="rounded-2xl bg-surface-container-low shadow-xl p-space-md flex flex-col gap-space-md">
                <div className="flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined text-[22px]">calendar_month</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-mission text-label-mission text-on-surface-variant uppercase">
                      Fecha del Evento
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      {data.date.display}
                    </span>
                    <span className="font-body-sm text-body-sm text-tertiary-fixed">
                      {data.date.note}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined text-[22px]">schedule</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-mission text-label-mission text-on-surface-variant uppercase">
                      Horario de Operaciones
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      {data.time.display}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {data.time.note}
                    </span>
                  </div>
                </div>
                <div className="flex items-start gap-space-sm">
                  <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 text-tertiary">
                    <span className="material-symbols-outlined text-[22px]">apartment</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-label-mission text-label-mission text-on-surface-variant uppercase">
                      Base Secreta
                    </span>
                    <span className="font-headline-sm text-headline-sm text-on-surface">
                      {data.venue.name}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {data.venue.address}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Ubicación */}
            <Reveal className="flex flex-col gap-space-sm">
              <div className="flex items-center justify-between px-1">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-tertiary text-[22px]">location_on</span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    Ubicación del Cuartel
                  </h2>
                </div>
                <span className="text-label-mission font-label-mission text-tertiary uppercase bg-surface-container-high px-2 py-0.5 rounded-full">
                  GPS activo
                </span>
              </div>
              <div className="rounded-2xl bg-surface-container-low shadow-xl overflow-hidden p-space-sm flex flex-col gap-space-sm">
                <div
                  className="w-full h-44 rounded-xl bg-surface-container-high relative overflow-hidden flex items-center justify-center bg-cover bg-center"
                  style={{ backgroundImage: `url('${data.venue.imageUrl}')` }}
                >
                  <div className="absolute inset-0 bg-surface/40 backdrop-blur-[2px] flex flex-col items-center justify-center p-space-md text-center">
                    <div className="w-12 h-12 rounded-full bg-error-container text-error flex items-center justify-center shadow-lg animate-bounce mb-1">
                      <span
                        className="material-symbols-outlined text-[28px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        pin_drop
                      </span>
                    </div>
                    <span className="font-headline-sm text-headline-sm text-on-surface font-bold">
                      {data.venue.name}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      Coordenadas del Club Misterio
                    </span>
                  </div>
                </div>
                <a
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-secondary-container to-secondary text-on-secondary font-title-badge text-title-badge py-3 px-space-md rounded-xl shadow-lg active:scale-95 transition-all text-center"
                  href={data.venue.mapsUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">near_me</span>
                  <span>Abrir en Google Maps</span>
                </a>
              </div>
            </Reveal>

            

            {/* RSVP */}
            <Reveal className="flex flex-col items-center text-center gap-space-sm pt-space-xs">
              <div className="rounded-2xl bg-surface-container-high p-space-lg shadow-2xl w-full flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-tertiary-container text-on-tertiary flex items-center justify-center mb-space-xs shadow-md">
                  <span className="material-symbols-outlined text-[32px]">task_alt</span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                  ¿Aceptas la Misión?
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-space-md">
                  Confirma tu asistencia antes del {data.rsvp.deadline} para asegurar tu lugar en el squad.
                </p>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-tertiary to-tertiary-fixed text-on-tertiary font-title-badge text-title-badge py-3.5 px-space-lg rounded-xl shadow-xl hover:opacity-95 active:scale-95 transition-all"
                  href={data.rsvp.whatsappUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[24px]">chat</span>
                  <span>Confirmar asistencia por WhatsApp</span>
                </a>
              </div>
            </Reveal>

            <div className="flex flex-col items-center justify-center text-center pt-space-xs pb-space-sm">
              <div className="flex items-center gap-1.5 text-on-surface-variant">
                <span className="material-symbols-outlined text-[16px] text-tertiary">star</span>
                <span className="font-label-mission text-label-mission uppercase tracking-widest text-on-surface-variant">
                  {data.celebrant} #{data.age} • {data.theme}
                </span>
                <span className="material-symbols-outlined text-[16px] text-secondary">star</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Hecho con ♥ por <a href="https://digitar.netlify.app/" class="text-decoration-none text-light"
                  target="_blank">DigiTar</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Nav inferior */}
      {/* <nav className="fixed bottom-0 inset-x-0 z-50 pb-safe bg-surface/85 backdrop-blur-2xl shadow-[0_-8px_32px_rgba(124,58,237,0.25)]">
        <div className="flex justify-around items-center h-20 px-gutter-sm">
          <a
            aria-current="page"
            className="flex flex-col items-center justify-center gap-1 w-14 h-14 transition-all text-primary-fixed font-bold scale-105"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">mark_email_read</span>
            <span className="font-label-mission text-[10px] tracking-wider uppercase">Misión</span>
          </a>
          <a
            className="flex flex-col items-center justify-center gap-1 w-14 h-14 text-on-surface-variant hover:text-on-surface transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">explore</span>
            <span className="font-label-mission text-[10px] tracking-wider uppercase">Mapa</span>
          </a>
          <a
            className="flex flex-col items-center justify-center gap-1 w-14 h-14 text-on-surface-variant hover:text-on-surface transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">photo_library</span>
            <span className="font-label-mission text-[10px] tracking-wider uppercase">Pistas</span>
          </a>
          <a
            className="flex flex-col items-center justify-center gap-1 w-14 h-14 text-on-surface-variant hover:text-on-surface transition-all"
            href="#"
          >
            <span className="material-symbols-outlined text-[22px]">how_to_reg</span>
            <span className="font-label-mission text-[10px] tracking-wider uppercase">RSVP</span>
          </a>
        </div>
      </nav> */}
    </div>
  )
}
