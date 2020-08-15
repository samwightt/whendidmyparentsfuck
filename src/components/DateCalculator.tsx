import React, { useState } from "react"
import moment from "moment"
import { parseDate, Chrono } from "chrono-node"

const DateCalculator = () => {
  const [date, setDate] = useState<string>(null)
  const [weeks, setWeeks] = useState<number>(40)

  return (
    <div>
      <div className="flex flex-col space-y-1 flex-auto mt-8 w-full">
        <label htmlFor="birthday" className="ml-1">
          What's your birthday?
        </label>
        <input
          id="birthday"
          placeholder="Type your birthday, eg. September 23, 1987"
          className="w-full px-3 py-2 border border-gray-300 hover:border-gray-500 focus:border-gray-800 transition-all duration-300 rounded shadow-sm cursor-text"
          type="text"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </div>
      <div className="flex flex-col space-y-1 flex-auto mt-8 w-full">
        <label htmlFor="weeks" className="ml-1">
          How many weeks were you born after?
        </label>
        <input
          id="weeks"
          className="w-full px-3 py-2 border border-gray-300 hover:border-gray-500 focus:border-gray-800 transition-all duration-300 rounded shadow-sm cursor-text"
          type="number"
          value={weeks}
          onChange={e => setWeeks(parseInt(e.target.value))}
        />
      </div>
      {date && parseDate(date) && moment(parseDate(date)) && (
        <h1 className="text-2xl mt-24">
          You were conceived on{" "}
          {moment(parseDate(date))
            .subtract({ weeks })
            .format("dddd, MMMM Do YYYY")}
          .
        </h1>
      )}
    </div>
  )
}

export default DateCalculator
