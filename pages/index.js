import { useTimeLeft } from "utils/use-time-left"

function NumberCard({ label, number }) {
  return (
    <div className="block rounded overflow-hidden bg-white text-center w-24">
      <div className="pt-1 border-2 border-r">
        <span className="text-4xl font-bold">{number}</span>
      </div>
      <div className="pb-2 px-2 border-2 border-r border-b rounded-b flex justify-center">
        <span className="text-lg font-bold">{label}</span>
      </div>
    </div>
  )
}

function Countdown({ timeLeft }) {
  return (
    <div>
      <div className="text-white text-center mb-5 font-bold font-mono text-6xl">
        D-Day in
      </div>
      <div className="flex space-x-2">
        <NumberCard label="Days" number={timeLeft.days} />
        <NumberCard label="Hours" number={timeLeft.hours} />
        <NumberCard label="Minutes" number={timeLeft.minutes} />
        <NumberCard label="Seconds" number={timeLeft.seconds} />
      </div>
    </div>
  )
}

function CongratulationsMessage() {
  return (
    <div className="w-auto h-auto">
      <div className="border-2 bg-white rounded rounded-r p-4 leading-normal">
        <div>
          <div className="text-gray-900 font-bold font-mono text-xl text-center">
            Congratulations!!🎉🥳🎊
          </div>
          <img src="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif" />
        </div>
      </div>
    </div>
  )
}

export default function IndexPage() {
  const { timeLeft, hasPassed } = useTimeLeft()

  return (
    <div>
      <div className="bg-black w-screen h-screen">
        <div className="flex w-full h-full justify-center items-center">
          {!hasPassed ? (
            <Countdown timeLeft={timeLeft} />
          ) : (
            <CongratulationsMessage />
          )}
        </div>
      </div>
    </div>
  )
}
