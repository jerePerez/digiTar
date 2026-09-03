import { useEffect, useState } from 'react'

function getTimeLeft(targetDate) {
  const distance = Math.max(targetDate.getTime() - Date.now(), 0)
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
  }
}

const pad = (n) => String(n).padStart(2, '0')

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate))

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000)
    return () => clearInterval(interval)
  }, [targetDate])

  const units = [
    { label: 'Días', value: timeLeft.days, color: 'text-tertiary-fixed' },
    { label: 'Horas', value: timeLeft.hours, color: 'text-primary-fixed' },
    { label: 'Min', value: timeLeft.minutes, color: 'text-secondary' },
    { label: 'Seg', value: timeLeft.seconds, color: 'text-error' },
  ]

  return (
    <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex flex-col items-center bg-surface-container-high rounded-xl py-2 px-1 shadow-md"
        >
          <span className={`font-headline-lg-mobile text-headline-lg-mobile font-black ${unit.color}`}>
            {pad(unit.value)}
          </span>
          <span className="font-label-mission text-[10px] text-on-surface-variant uppercase">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  )
}
