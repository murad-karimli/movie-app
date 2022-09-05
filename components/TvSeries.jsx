import React from "react";
import Link from "next/link";

function TvSeries({ tvdata }) {
  const movies = tvdata.results;

  return (
    <div className="p-12 mx-auto mx-auto bg-[#371B58] w-[90%] m-4 rounded-xl">
      <div className="movies flex">
        {movies.map((movie, key) => (
          <Link key={key} href={`/tv/${movie.id}`}>
            <div className="movie  hover:scale-110 transition-all duration-1000">
              <img
                className=""
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.backdrop_path}`}
              />
              <h3 className="title transition-all  hover:text-xl font-semibold font-mono">
                {movie.name}
              </h3>
            </div>
          </Link>
        ))}

        <style jsx>{`
          .movies {
            display: flex;
            flex-wrap: wrap;
            width: 1200px;
            margin: 0 auto;
            gap: 30px;
          }
          .movie {
            margin-top: 20px;
            width: 23%;
            position: relative;
            border-radius: 10px;
          }
          .movie:hover {
            opacity: 0.9;
          }
          h3 {
            position: absolute;
            font-size: 17px;
            top: 0;
            left: 0;
            width: 100%;
            color: #fff;
            background: linear-gradient(to bottom, #000, transparent);
            padding: 50px 20px 20px 20px;
            border-radius: 10px;
          }
          img {
            width: 100%;
            border-radius: 10px;
          }
        `}</style>
      </div>
    </div>
  );
}

export default TvSeries;
