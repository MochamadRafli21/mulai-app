import Image from 'next/image'
interface TestimoniProps {
  imageSrc: string;
  name: string;
  description: string;
}

export default function Testimoni({ imageSrc, name, description }: TestimoniProps) {
  return (
    <div className='min-w-[300px] md:min-w-[650px] mx-4 p-4 flex flex-col items-center md:grid md:grid-cols-3 shadow-[4px_4px_4px_0px_#0000004D] rounded-xl'>
        <Image src={imageSrc} className='max-w-[168px] rounded-full' alt="Mulai" width={168} height={168} objectFit='none' />
        <div className='col-span-2'>
        <h1 className='text-2xl md:text-start text-center font-bold'>{name}</h1>
          <p className='text-justify'>{description}</p>

        </div> 
      </div>
 )
}
