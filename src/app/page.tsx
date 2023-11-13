import Image from 'next/image'
import Title from '@/components/title'
import ServiceCard from '@/components/serviceCard'
import Faq from '@/components/faq'
import ProfileCard from '@/components/profileCard'
import Link from 'next/link'
import Testimoni from '@/components/testimoni'

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
    <div className="p-4 md:px-12">
      <Image src="/mulai.svg" alt="Mulai" width={120} height={70} />
    </div>

    <div className='flex justify-center'>
      <div className='flex justify-between bg-[#E25E3E] w-4/5 h-[220px] md:h-[300px] rounded-3xl'>
      <div className='p-4 md:p-8 flex flex-col justify-center'>
      <h1 className='text-4xl md:text-6xl font-bold text-white'>MULAI</h1>
          <p className='text-[12px] text-white'>Menawarkan berbagai macam kebutuhan<br/> 
          marketing digital dengan<br/>
          harga yang kompetitif
          </p>
        </div>
        <Image src="/work.png" className='max-w-[150px] md:max-w-[300px]' alt="Mulai" width={300} height={600} objectFit='none' />
      </div>
    </div>

    <Title titleText='What We Do'/>

    <div className='p-4 md:px-12 flex flex-wrap justify-center gap-8'>
    <ServiceCard
      titleText='Content Planning'
      bgColor='#C22600'
      imageSrc="/Date_range.svg"
      descriptionText='Kami Menyediakan jasa content planning untuk akun social media anda, sehingga anda tidak perlu memikirkan apa yang harus diposting'
    />

    <ServiceCard
      titleText='Custom Website'
      bgColor='#FF9B50'
      imageSrc="/globe-wire.svg"
      descriptionText='Jasa custom website dari mulai landing page, hingga website company profile, kami sanggup mengerjakannya'
    />
    
    <ServiceCard
      titleText='Photo Product'
      bgColor='#E25E3E'
      imageSrc="/camera.svg"
      descriptionText='Anda akan mendapatkan total 1o photo profesionnal produk anda dengan harga yang sangat terjangkau, photo bisa lebih dari 10 tergantung keinginan anda'
    />
    
    <ServiceCard
      titleText='Short Video Ads'
      bgColor='#C63D2F'
      imageSrc="/forward.svg"
      descriptionText='Kami buatkan iklan singkat untuk produk anda berdurasi 1 menit'
    />

    <ServiceCard
      titleText='Content Editing'
      bgColor='#C22600'
      imageSrc="/scissors.svg"
      descriptionText='Kami menyediakan jasa untuk mengedit konten yang sudah anda buat, baik itu video ataupun gambar'
    />
    </div>

    <Title titleText='What They Ask'/>

    <div className='p-4 md:px-12 grid md:grid-cols-2 justify-center justify-items-center gap-4'>
      <Faq
        question='Berapa biaya yang diperlukan?'
        answer='Biaya yang kita tawarkan sangat fleksible berdasarkan service yang kalian perlukan, kalian bisa coba untuk diskusi langusng melalui tombol dibawah untuk mencari tau.'
      />
      <Faq
        question='Bagaimana saya bisa tau sudah seberapa jauh proses orderan saya?'
        answer='Untuk biaya sendiri bervariasi tergantung kebutuhan usaha anda'
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

    <Title titleText='What They Say'/>

    <div className='p-4 md:px-12 overflow-y-scroll flex'>
      <Testimoni
        imageSrc="/placeholder.jpeg"
        name="Rebello"
        description="Dari pengalaman aku minta tolong dibikinin website da video sama Mulai sih sangat worth it ya. Karna aku yg awam tentang pembuatan website maupun video, selalu dijelasin dengan detail sampe paham. Jadi aku yg bayar jasa mereka merasa sangat terbantu banget. Selain itu juga Mulai selalu membuat video dan website yang sesuai sama keinginan aku, jadinya tuh kita yang bayar jasa mereka tinggal terima jadi dan ekspektasi sama realitanya sangat memberikan kesan yg baik"
      />
      <Testimoni
        imageSrc="/renaldi.jpeg"
        name="Renaldi Azhar"
        description="Saya memang suka banget dengan layanan Mulai, mulai dari layanan website, video, dan  short ads. Mulai selalu ada aja solusi untuk kebutuhan saya."
      />
      <Testimoni
        imageSrc="/bagus.jpg"
        name="Bagus"
        description="Konsultasi dengan mereka sangat memuaskan. Saya tidak perlu repot untuk mencari solusi untuk masalah saya, dengan biaya yang murah saya dapat membuat website tanpa repot."
      />
    </div>

    <div className='bg-[#E25E3E] p-12'>
      <div className='flex justify-center text-white font-bold text-4xl'>
      <h1>Meet Our Team</h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 justify-center pt-4'>
      <ProfileCard
        imageSrc="/profile.jpeg"
        name="Mochamad Rafli"
        description="Full stack developer dengan experience di industri lebih dari 2 tahun. dan memilki pengalaman di berbagai technology terkini"
      />

      <ProfileCard
        imageSrc="/uprizal.jpeg"
        name="Upridzal M.P"
        description="Video Editor, Content Creator, Designer, Marketer yang memiliki pengalaman bertahun-tahun berkecimpung disemua bidang tersebut"
      />
      </div>

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
          <Image src="/wa-icon.svg"  width={30} height={30} alt="Mulai"/>
          <p className='px-4'>085159185563</p>
        </div>
      </div>

      </Link>

      <Image src="/white-logo.svg"  width={200} height={200} alt="Mulai"/>

      </div>
    </div>
    </main>
  )
}
