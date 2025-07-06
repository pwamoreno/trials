import Image from "next/image"

interface MyCourseCardProps{
    name: string
    duration: string
    image: string
}

const MyCourseCard = ({ name, duration, image }: MyCourseCardProps) => {
  return (
    <div className='flex items-center ml-3'>
        <div>
            <Image src={image} alt={name} width={25} height={25}/>
        </div>
        <div className='ml-3'>
            <p>{name}</p>
            <p>{duration}</p>
        </div>
    </div>
  )
}

export default MyCourseCard