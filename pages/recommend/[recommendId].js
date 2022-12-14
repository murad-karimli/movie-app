import React from 'react'
import Link from 'next/link';
import Head from 'next/head';
function Recommend({ recommendationsData }) {
  console.log(recommendationsData)

  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex lg:flex-row  bg-[#371B58] w-[90%] rounded-xl justify-center items-center flex-wrap p-8 mx-auto flex-col '>
        {recommendationsData.results.map((element, index) => (
          <Link key={index} href={`/movies/${element.id}`}>
            <div className=' rounded-xl lg:inline flex  shadow-lg shadow-[#666] lg:w-[22%] w-[90%] hover:opacity-80 hover:scale-105 duration-700 transition-all gap-2.5 p-4 border-[2px] border-solid border-[#555] m-4  '>
              <img className="" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${element.backdrop_path}`} />
              <div className='lg:p-2 h-[150px] p-8 lg:text-xl text-2xl'>
                <p className='text-[#777]'>{element.title}</p>
                <span className='block text-[#fff]' > {element.release_date}</span>
                <span className='text-[#fff]'>Rate : {element.vote_average}</span>
              </div>

            </div>
          </Link>
        ))}
      </div>
    </>
  )
}

export default Recommend