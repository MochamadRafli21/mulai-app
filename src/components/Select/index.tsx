"use client"
import { useState, useEffect } from 'react'

export default function MliSelect({ options, defaultValue, isLoading, changeHandler }:
  {
    options: { key: string, value: string }[],
    defaultValue: string,
    isLoading: boolean
    changeHandler: (option: string) => void
  }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultValue)
  const updateOptions = (option: { key: string, value: string }) => {
    setSelectedOption(option.value)
    setIsOpen(false)
    changeHandler(option.key)
  }

  useEffect(() => {
    if (!isLoading && defaultValue && options.length) setSelectedOption(defaultValue ? defaultValue : options[0].value)
  }, [isLoading])
  return (
    <div className='relative w-full'>
      <div className='border bg-white border-gray-400 p-2 rounded w-full items-start cursor-pointer h-[43px] truncate' onClick={
        () => setIsOpen(!isOpen)}>{
          selectedOption
        }</div>
      <div className='mt-2 absolute bg-white w-full shadow max-h-[200px] overflow-y-scroll' hidden={!isOpen}>
        <ul>
          {isLoading ? <li>Menunggu Data ...</li> : options.map((option) => (
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
