import Head from 'next/head';
import Movie from '../components/Movie';
import TvSeries from '../components/TvSeries';


export default function Home({ data, tvData }) {

  return (
    <div className="">
      <Head>
        <title>Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className='flex'>

        <div className='flex flex-col mx-auto bg-[#371B58] m-8 rounded-xl'>
          <Movie data={data} />
          <TvSeries tvdata={tvData} />

        </div>


      </main>

    </div>
  )
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`
  https://api.themoviedb.org/3/movie/popular?api_key=02873dc6fd43867b5f26c4204ab6a508&language=en-US&page=1`)
  const data = await res.json();
  const tv = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=02873dc6fd43867b5f26c4204ab6a508&language=en-US&page=1`);
  const tvData = await tv.json();

  ;

  // Pass data to the page via props
  return { props: { data, tvData } }
}
