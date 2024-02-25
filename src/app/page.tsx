import Image from 'next/image'

import Title from '@/components/title'
import Faq from '@/components/faq'
import Link from 'next/link'
import ServiceComponent from '@/components/ServiceComponent'
import OrderButton from '@/components/button/orderButton'
import AnimText from '@/components/Animation/text'
import ClientLogo from '@/components/Animation/clientLogo'

export default function Home() {
  return (
    <main className="flex flex-col scroll-smooth min-h-screen">
      <div className="p-4 md:px-12 w-full">
        <Image src="/mulai.svg" alt="Mulai" width={120} height={70} />
      </div>

      <div className='flex justify-center mb-8 mt-30'>
        <div className='flex justify-between w-4/5 flex-col-reverse md:flex-row'>
          <div className='p-4 md:p-8 flex flex-col justify-center'>
            <AnimText delay={0.4} />
            <div className='mt-2 text-stone-400 md:text-lg '>
              <h6>"Cara untuk memulai adalah berhenti berbicara dan mulai melakukan"  </h6>
              <span>- Walt Disney</span>
            </div>
            <OrderButton />
          </div>
          <Image src="/hero.svg" alt="hero" width={300} height={230} />
        </div>
      </div>
      <div className='p-4 w-4/5 mx-auto flex flex-wrap justify-between justify-items-center gap-4'>
        <ClientLogo imageSrc={"/tokyo.png"} />
        <ClientLogo imageSrc={"/something.png"} />
        <ClientLogo imageSrc={"/rebello.png"} />
        <ClientLogo imageSrc={"/yourney.png"} />
      </div>

      <Title titleText='Jasa Kami' />
      <ServiceComponent />
      <Title titleText='Yang Sering Ditanyakan' />

      <div className='p-4 w-4/5 mx-auto flex flex-col justify-center justify-items-center gap-2'>
        <Faq
          question='Berapa biaya yang diperlukan?'
          answer='Biaya yang kita tawarkan sangat fleksible berdasarkan service yang kalian perlukan, kalian bisa coba untuk diskusi langusng melalui tombol dibawah untuk mencari tau.'
        />
        <Faq
          question='Bagaimana saya bisa tau sudah seberapa jauh proses orderan saya?'
          answer='Kami menyediakan beberapa metode mulai dari spreadsheet, trello, atau via whatsapp. namun kedepan nya kami akan menampilkan progress anda di dalam aplikasi'
        />
        <Faq
          question='Apakah bisa merubah request saat proses pengerjaan?'
          answer='Bisa, selama request yang diminta masih dalam batas wajar dan tidak melebihi budget yang sudah ditentukan diawal'
        />
        <Faq
          question='Apakah MULAI menyediakan refund'
          answer={<span>Ya, kami menyediakan refund dengan <Link className='underline text-blue-500' href='/refund'>syarat dan ketentuan</Link></span>}
        />
      </div>

      <div className='bg-[#E25E3E] p-12'>

        <div className='flex flex-wrap justify-between items-center p-4'>
          <Link href="https://wa.me/6285159185563">
            <div className='font-bold text-white md:w-1/2'>
              <div className='py-2'>
                <h1 className='text-2xl py-2'>
                  TERTARIK DENGAN JASA KITA?
                </h1>
                <p>
                  Silahkan konsul terlebih dahulu dengan kami secara gratis melalui WhatsApp
                </p>
              </div>
              <div className='bg-green-500 py-2 px-4 text-2xl flex justify-between rounded-xl w-fit'>
                <Image src="/wa-icon.svg" width={30} height={30} alt="Mulai" />
                <p className='px-4'>085159185563</p>
              </div>
            </div>

          </Link>

          <Image src="/white-logo.svg" width={200} height={200} alt="Mulai" />

        </div>
      </div>
    </main>
  )
}
