import { useState, useEffect } from "react"

const D_DAY = "10/01/2021"

const calculateTimeLeft = () => {
  const difference = +new Date(D_DAY) - +new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }
  return { timeLeft, hasPassed: difference < 0 }
}

const useTimeLeft = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  return timeLeft
}

export { useTimeLeft }
