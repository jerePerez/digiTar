import { useRef } from 'react'

const COLORS = ['#d2bbff', '#4cd7f6', '#efc200', '#7c3aed', '#ff3366']

function createParticle(trigger) {
  const p = document.createElement('div')
  p.className = 'fixed pointer-events-none z-50 rounded-sm'
  p.style.backgroundColor = COLORS[Math.floor(Math.random() * COLORS.length)]
  const size = Math.random() * 8 + 6
  p.style.width = `${size}px`
  p.style.height = `${size}px`

  const rect = trigger.getBoundingClientRect()
  const startX = rect.left + rect.width / 2
  const startY = rect.top + rect.height / 2
  p.style.left = `${startX}px`
  p.style.top = `${startY}px`

  document.body.appendChild(p)

  const destX = (Math.random() - 0.5) * 350
  const destY = (Math.random() - 0.7) * 400
  const rot = (Math.random() - 0.5) * 720

  p.animate(
    [
      { transform: 'translate(0, 0) rotate(0deg)', opacity: 1 },
      { transform: `translate(${destX}px, ${destY}px) rotate(${rot}deg)`, opacity: 0 },
    ],
    { duration: 900 + Math.random() * 500, easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)' },
  ).onfinish = () => p.remove()
}

export default function ConfettiButton() {
  const btnRef = useRef(null)

  const handleClick = () => {
    if (!btnRef.current) return
    for (let i = 0; i < 35; i++) createParticle(btnRef.current)
  }

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      type="button"
      className="mt-space-md inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary-container to-inverse-primary text-on-primary font-title-badge text-title-badge py-2.5 px-space-lg rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all w-full"
    >
      <span className="material-symbols-outlined text-[20px]">magic_button</span>
      <span>¡DETONAR CELEBRACIÓN! 🎉</span>
    </button>
  )
}
