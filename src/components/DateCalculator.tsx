import React, { useState } from "react"
import moment from "moment"

const DateCalculator = () => {
  const [date, setDate] = useState<string>(null)

  return (
    <div>
      <div className="flex flex-col space-y-1 flex-auto mt-8">
        <label htmlFor="birthday" className="ml-1">
          What's your birthday?
        </label>
        <input
          id="birthday"
          className="w-full px-3 py-2 border border-gray-300 hover:border-gray-500 focus:border-gray-800 transition-all duration-300 rounded shadow-sm cursor-text"
          type="date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
      {date && moment(date) && (
        <h1 className="text-2xl mt-24">
          You were conceived on{" "}
          {moment(date).subtract({ weeks: 40 }).format("dddd, MMMM Do YYYY")}.
        </h1>
      )}
    </div>
  )
}

export default DateCalculator
