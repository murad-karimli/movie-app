import React from 'react';
import Link from 'next/link';
import{AiOutlineArrowLeft} from "react-icons/ai";

function BackToHome() {
  return (
    <Link href="/"><a className='bg-[#fff] m-4  text-[#222] font-semibold text-xl rounded p-2 shadow-md hover:scale-105 transition-all inline-block duration-700 shadow-[#777] p-2'> <AiOutlineArrowLeft size={25} className="inline"/> Back to HomePage</a></Link>
  )
}

export default BackToHome