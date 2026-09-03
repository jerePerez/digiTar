const balloons = [
  { left: '8%', size: 'w-12 h-16', color: 'bg-primary/40', anim: 'animate-float-slow' },
  { left: '28%', size: 'w-14 h-18', color: 'bg-secondary/40', anim: 'animate-float-mid' },
  { left: '58%', size: 'w-11 h-15', color: 'bg-tertiary/40', anim: 'animate-float-fast' },
  { left: '82%', size: 'w-13 h-17', color: 'bg-primary-container/40', anim: 'animate-float-mid' },
  { left: '42%', size: 'w-10 h-14', color: 'bg-secondary-fixed/40', anim: 'animate-float-slow' },
]

export default function AmbientBalloons() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {balloons.map((b, i) => (
        <div
          key={i}
          className={`absolute -bottom-32 ${b.size} rounded-full ${b.color} blur-[0.5px] shadow-[inset_-4px_-4px_10px_rgba(255,255,255,0.3)] ${b.anim}`}
          style={{ left: b.left }}
        />
      ))}
    </div>
  )
}
