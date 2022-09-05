import Link from 'next/link';
import React from 'react';
import Recommend from '../recommend/[recommendId]';
import BackToHome from '../../components/BackToHome';
import Head from 'next/head';



function Id({movieData,recommendationsData,link}) {
  console.log(link,"¬¬",recommendationsData)
  
 
  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <BackToHome/>
    <div className='bg-[#371B58] p-4 w-[90%] shadow-xl shadow-[#6a1f55] mx-auto rounded-xl'>
    <h1 className='text-[#222] bg-[#aaa] hover:bg-[#5B4B8A] p-2 text-4xl w-[34%] hover:text-[#fff] rounded-xl text-center transition-all duration-700 mx-auto m-4'>{movieData.title}</h1>
    <div style={{backgroundImage:`url(https://www.themoviedb.org/t/p/original/${movieData.backdrop_path})`}} 
    className='w-[70%]  bg-center hover:opacity-80 transition-all duration-700 hover:scale-105 bg-cover h-[500px] flex mx-auto my-16 rounded-xl'>
     
    </div>
    <div className='w-[90%] mx-auto'>
     <div className='flex bg-[#5B4B8A] w-[60%] mx-auto rounded-xl p-4 transition-all duration-700 hover:scale-105 justify-center items-center'>
     <span className='text-xl mx-4 text-[#fff]'>Duration: {movieData.runtime} minutes</span>
     <p className='text-xl mx-4 text-[#fff]'>{movieData.tagline}</p>

      {movieData.genres.map((genre,index)=>(
       
          <p className='text-[#fff] text-xl  p-2' key={index}>{genre.name}</p>
         
       
      ))}
     </div>
      
      <p className='text-[#ccc] hover:scale-105 transition-all duration-700 shadow-lg shadow-[#777] p-8 bg-[#7858A6] rounded-xl my-12 text-xl w-[60%] mx-auto'>
      {movieData.overview}
      </p>
    </div>

    <Recommend recommendationsData={recommendationsData}/>
    
    </div>
    </>
  )
}


export default Id;
export async function getServerSideProps({params}) {
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=02873dc6fd43867b5f26c4204ab6a508&language=en-US`)
  const movieData = await movie.json();
  var link=` https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=02873dc6fd43867b5f26c4204ab6a508&language=en-US&page=1`
  const recommendations=await fetch(link);
  const recommendationsData = await recommendations.json();
 
  return {
    props: {
      movieData,
      recommendationsData,
      link
      
    }, 
  }
}

