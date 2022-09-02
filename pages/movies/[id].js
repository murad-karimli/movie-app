import Link from 'next/link';
import React from 'react';



function Id({movieData,recommendationsData}) {
  console.log(movieData)
  return (
    <>
    <h1 className='text-[#999] hover:bg-[#5B4B8A] p-2 text-4xl w-[34%] rounded-xl text-center transition-all duration-700 mx-auto m-4'>{movieData.title}</h1>
    <div style={{backgroundImage:`url(https://www.themoviedb.org/t/p/original/${movieData.backdrop_path})`}} 
    className='w-[70%] bg-center hover:opacity-80 transition-all duration-700 hover:scale-105 bg-cover h-[500px] flex mx-auto my-16 rounded-xl'>
     
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

    <div className='flex lg:flex-row justify-center items-center flex-wrap p-8 mx-auto flex-col '>
        {recommendationsData.results.map((element)=>(
        <Link href={`/movies/${element.id}`}>
          <div className=' rounded-xl lg:inline flex  shadow-lg shadow-[#666] lg:w-[18%] w-[90%] hover:opacity-80 hover:scale-105 duration-700 transition-all gap-2.5 p-4 border-[2px] border-solid border-[#555] m-4  '>
          <img className="" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${element.backdrop_path}`}/>
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


export default Id;
export async function getServerSideProps({params}) {
  const movie = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=02873dc6fd43867b5f26c4204ab6a508&language=en-US`)
  const movieData = await movie.json();
  const recommendations=await fetch(`
  https://api.themoviedb.org/3/movie/${params.id}/recommendations?api_key=02873dc6fd43867b5f26c4204ab6a508&language=en-US&page=1`);
  const recommendationsData = await recommendations.json();

  return {
    props: {
      movieData,
      recommendationsData
    }, 
  }
}

