interface TitleProps {
    titleText: string;
}

export default function Title({ titleText }: TitleProps) {
  return (
    <div className='p-4 md:px-36'>
      <h1 className='text-2xl font-extrabold'>{titleText}</h1>
      <hr className='border-2 border-[#E25E3E] w-[175px]'/>
    </div>
 )
}
