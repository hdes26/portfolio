import Image from 'next/image'
import meImg from '@/assets/me.png'

export const ChatCard: React.FC = () => {
  return (
    <div className='relative aspect-square top-0 left-0 flex flex-col justify-center items-center bg-purple-500 dark:bg-purple-500 rounded-3xl overflow-hidden col-span-1 hover:scale-[103%] transition duration-500 ease-in-out shadow-sm cursor-pointer'>
      <span className='absolute flex justify-center items-center top-2 text-xs md:text-xl right-2 md:top-8 md:right-8 text-white'>
        <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 15 16' height='1em' width='1em' xmlns='http://www.w3.org/2000/svg'><path fillRule='evenodd' d='M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z' /></svg>
        1
      </span>
      <span className='w-2/3 h-2/3 bg-[#0E1922] rounded-full hover:animate-pulse overflow-hidden'>
        <Image
          src={meImg}
          alt='myimg'
          width={0}
          height={0}
          sizes='full'
          className='w-full h-full'
        />
      </span>
    </div>
  )
}
