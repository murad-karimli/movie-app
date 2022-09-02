import React from 'react';
import Link from 'next/link';

function Movie({data}) {
    const movies=data;
    console.log(movies )
  return (
    <div className='flex'>
    <div className='p-4'>
    <h2 className='w-[70%] mx-auto p-4 text-3xl font-semibold text-[#fff]'>Top Rated</h2>
    <div className='movies flex'>  
    
         {movies.map((movie)=>(
        <Link href={`/movies/${movie.id}`}>
        <div className='movie  hover:scale-110 transition-all duration-1000'>
         <img className="" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}/>
         <h3 className='title transition-all  hover:text-xl font-semibold font-mono'>{movie.title}</h3>
        </div>
        </Link>
     ))}
     
     <style jsx>{`
      .movies{
        
        display:flex;
        flex-wrap:wrap;
        width:1200px;
        margin:0 auto;
        gap:30px;
      }
      .movie{
        margin-top:20px;
        width:23%;
        position:relative;
        border-radius:10px;
      }
      .movie:hover{
        opacity:0.9;
      }
      h3{
        position:absolute;
        font-size:17px;
        top:0;
        left:0;
        width:100%;
        color:#fff;
        background:linear-gradient(to bottom,#000,transparent);
        padding:50px 20px 20px 20px;
        border-radius:10px;
      }
      img{
        width:100%;
        border-radius:10px;
      }
      
     `}</style>
     
     </div>
    </div>
     <aside>
        categories
      </aside>
     </div>
  )
}

export default Movie;
export async function getServerSideProps() {
    const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=02873dc6fd43867b5f26c4204ab6a508&language=en-US&page=1`).then((res)=>res.json())
   
    // const popular = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=02873dc6fd43867b5f26c4204ab6a508&language=en-US&page=1`)
    // const popularmovieData = await popular.json()
    return {
      props: {
        // popularmovieData,
        data
      }, 
    }
  }