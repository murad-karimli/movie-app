
import Nav from '../components/nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Nav/>
  <Component  {...pageProps} />
  <p className='text-2xl text-center p-4 my-4  font-bold text-[#fff] '>Created by Murad :)</p>
  </>
  
}

export default MyApp
