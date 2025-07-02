import Image from 'next/image'
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen '>
        <div className='flex flex-col items-center justify-center  p-8 text-center'>
            <Image
              src="/404.png"
                alt="404 Not Found"
                width={800}
                height={400}
                className="w-80 h-60 "
            />
          
      <p className='mb-2'>Parece que você tentou acessar uma pagina que não existe.</p>
      <Link href="/" className='border p-1 w-full rounded-lg bg-[#F2653C] text-white font-bold '>Retornar ao inicio</Link>
        </div>
      
    </div>
  )
}