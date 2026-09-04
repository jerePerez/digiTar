export default function NameHero({ name }) {
  return (
    <div className="relative mt-space-lg flex flex-col items-center name-hero px-space-md py-space-sm">
      {/* Halo de color detrás del nombre */}
      <div
        aria-hidden="true"
        className="absolute -inset-x-8 -inset-y-10 rounded-full bg-gradient-to-r from-primary-container/40 via-secondary/30 to-tertiary/30 blur-3xl -z-10"
      />
      <div className="absolute -top-5 right-0 rotate-12 bg-secondary-container text-on-secondary px-space-sm py-1 rounded-full shadow-lg flex items-center gap-1">
        <span className="material-symbols-outlined text-[16px]">visibility</span>
        <span className="font-label-mission text-[11px] uppercase tracking-wider font-extrabold">
          Club Misterio
        </span>
      </div>

      <h1 className="font-display-hero-mobile text-display-hero-mobile name-hero-text drop-shadow-[0_6px_30px_rgba(210,187,255,0.55)] leading-none">
        {name}
      </h1>

      <div className="absolute -bottom-3 left-0 -rotate-6 bg-tertiary text-on-tertiary px-space-sm py-0.5 rounded-full shadow-md">
        <span className="font-title-badge text-title-badge uppercase font-extrabold">
          🕵️‍♀️ Top secret
        </span>
      </div>
    </div>
  )
}