interface TitleProps {
  titleText: string;
}

export default function Title({ titleText }: TitleProps) {
  return (
    <div className='p-4 md:w-4/5 md:mx-auto'>
      <h1 className='text-xl font-semibold'>{titleText}</h1>
      <hr className='border-2 border-[#E25E3E] w-[175px]' />
    </div>
  )
}
