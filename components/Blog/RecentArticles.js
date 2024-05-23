import React from 'react'
import ArticleCard from './ArticleCard'

const RecentArticles = ({data}) => {
  return (
    <div className='px-[4.38rem] flex flex-col gap-[1.25rem]'>
        <div className=''>
            <p className='text-[2rem] font-semibold text-[#212721]'>Recent articles</p>
        </div>
        <div className='flex flex-wrap gap-[1.25rem]'>
            {data.map((article) => {
                return (
                    <ArticleCard key={article.id}  title={article.title} description={article.excerpt} />
                )
            })}
        </div>
    </div>
  )
}

export default RecentArticles