"use client"
import { useState } from 'react'

export default function MliSelect({ options, defaultValue, changeHandler }:
  {
    options: { key: string, value: string }[],
    defaultValue: string,
    changeHandler: (option: string) => void
  }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultValue)
  const updateOptions = (option: { key: string, value: string }) => {
    setSelectedOption(option.value)
    setIsOpen(false)
    changeHandler(option.key)
  }
  return (
    <div className='relative w-full'>
      <div className='border bg-white border-gray-400 p-2 rounded w-full items-start' onClick={() => setIsOpen(!isOpen)}>{selectedOption}</div>
      <div className='mt-2 absolute bg-white w-full shadow max-h-[200px] overflow-y-scroll' hidden={!isOpen}>
        <ul>
          {options.map((option) => (
            <li
              className={
                option.value === selectedOption ?
                  'p-2 bg-orange-400 hover:bg-orange-200 cursor-pointer' :
                  'p-2 hover:bg-gray-100 cursor-pointer'}
              onClick={() => updateOptions(option)}
              key={options.indexOf(option)}>
              {option.value}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
