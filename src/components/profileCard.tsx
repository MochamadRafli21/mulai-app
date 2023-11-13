import Image from 'next/image'
interface ProfileCardProps {
  imageSrc: string;
  name: string;
  description: string;
}

export default function ProfileCard({ imageSrc, name, description }: ProfileCardProps) {
  return (
      <div className='bg-white p-8 rounded-xl flex flex-col items-center justify-center'>
      <Image src={imageSrc} className='max-w-[168px] rounded-full !max-h-[168px]' style={{ objectFit: 'none', aspectRatio: '1/1' }} alt="Mulai" width={168} height={168} />
      <h1 className='text-2xl font-bold pt-2'>{name}</h1>
      <p>{description}</p>
      </div>
 )
}
