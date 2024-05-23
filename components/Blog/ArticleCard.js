import Image from 'next/image'
import React from 'react'

const ArticleCard = ({image,title,description}) => {
  return (
    <div className='flex flex-col gap-[1.5rem] max-w-[22.25rem] cursor-pointer'>
        <div>
            <Image width={420} height={209} className='rounded-[24px]' src={image || "https://static.ghost.org/v5.0.0/images/publication-cover.jpg"} alt={title} />
        </div>
        <div>
            <p className='line-clamp-2 font-semibold text-xl'>
                {title}
            </p>
            <p className='line-clamp-4'>
                {description}
            </p>
        </div>
    </div>
  )
}

export default ArticleCard