"use client"
import Image from 'next/image'
import { data } from './data'
import { useState } from 'react'

export default function Home() {
  const [select,setSelect] = useState(0)
  function cal(){
    if(select - 1 < 0){
      setSelect(data.length-1);
    }
    else if(select + 1 > data.length -1){
      setSelect(0);
    }
    else{
      setSelect(select+1)
    }
  }
  return (
    <div className='  w-screen  space-y-6 h-screen flex flex-col md:flex-row justify-start  items-center'>
      <div className='  xl:w-[700px] xl:h-[660px]  lg:w-[480px] lg:h-[480px] md:w-[400px] md:h-[400px] min-[425px]:h-[400px] min-[425px]:w-[400px] w-[320px] h-[320px] md:m-0 m-10 bg-contain bg-no-repeat bg-bg flex justify-center items-center md:pt-0 pt-16 md:px-0 px-10 static md:absolute lg:top-[25%] xl:top-[13%] md:right-[5%] lg:right-[5%]'>
        <div className=' flex justify-center relative w-full'>
          <Image
          src={ select === 0 ? "/images/image-tanya.jpg" : "/images/image-john.jpg"}
          width={540}
          height={540}
          className=' shadow-2xl  xl:w-[540px] xl:h-[540px] lg:w-[380px] lg:h-[380px] md:w-[300px] md:h-[300px]'
          alt='image'/>
          <div className=' w-24 lg:w-32 p-5  bg-white rounded-full flex justify-between absolute -bottom-7 shadow-xl left-[calc(50%_-_3rem)] md:left-[25%]'>
            <button onClick={cal} className=' w-12 lg:w-16 flex justify-center items-center'>
              <Image
              src={"/images/icon-prev.svg"}
              width={12}
              height={18}
              alt='prev'/>
            </button>
            <button onClick={cal} className=' w-12 lg:w-16 flex justify-center items-center'>
              <Image
              src={"/images/icon-next.svg"}
              width={13}
              height={18}
              alt='next'/>
            </button>
          </div>
        </div>

      </div>
      <div className=' bg-quotes bg-top bg-customsm md:bg-customs md:bg-custom bg-no-repeat  p-5  md:p-10  z-10 overflow-x-hidden space-y-3 w-full flex  md:mx-[10%] flex-col relative'>
        <div className='md:px-0 px-7 md:text-start text-center text-xl md:text-xl xl:line lg:text-2xl xl:text-3xl w-full md:w-3/5 tracking-wide font-light '>
          {data[select].quotes}
        </div>
        <div className=' text-gray-500 md:text-start flex  flex-col md:space-x-2 space-x-0 md:flex-row text-center '>
          <span className=' font-bold md:text-sm lg:text-base text-black'>{data[select].name}</span> <span className='md:text-sm lg:text-base'>{data[select].job}</span>
        </div>
      </div>
      
      
    </div>
  )}
    