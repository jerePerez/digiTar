export default function AmbientBalloons({ images = [] }) {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {images.map((img, i) => (
        <img
          key={i}
          src={`${import.meta.env.BASE_URL}${img.src}`}
          alt=""
          className={`absolute -bottom-32 ${img.size} object-contain opacity-70 drop-shadow-lg ${img.anim}`}
          style={{ left: img.left }}
        />
      ))}
    </div>
  )
}