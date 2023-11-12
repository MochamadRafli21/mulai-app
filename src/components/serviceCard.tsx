import Image from 'next/image'
interface ServiceCardProps {
  imageSrc: string;
  titleText: string;
  descriptionText: string;
  bgColor: string;
}

export default function ServiceCard({ imageSrc, titleText, descriptionText, bgColor }: ServiceCardProps) {
  bgColor = bgColor ? bgColor : '#E25E3E'
  return (
    <div className='flex flex-col w-[340px] h-[312px] rounded-xl text-white p-4 gap-2'
      style={{
        backgroundColor: bgColor
      }}
    >
        <Image src={imageSrc} alt="Card Icon" width={76} height={76}/>
        <h1 className='text-2xl font-bold'>{titleText}</h1>
        <p className='text-justify'>{descriptionText}</p> 
    </div>
 )
}
