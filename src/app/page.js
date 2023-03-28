
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube 
} from "react-icons/ai";
import Image from "next/image";
import devIcon from "../../public/icon.png"
import HTML from "../../public/html-5.png"
import CSS from "../../public/css-3.png"
import Javascript from "../../public/java-script.png"
import React from "../../public/react.png"
import web1 from "../../public/web1.png"
import web2 from "../../public/web2.png"
import web3 from "../../public/web3.jpeg"
export default function Home() {
  return (
    <div>
      <Head>
        <title>Tugba yildiz Portfolio</title> 
      </Head>
    <main className="bg-white px-10 md:px-20 lg:px-40">
      
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">developedbyyildiz</h1>
          <ul>
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium  md:text-6xl">Tugba Yildiz</h2>
          <h3 className="text-2xl py-2 md:text-3xl">Front-end Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">I have a bachelor's degree in Teaching Computer Education. While I'm refreshing my knowledge and learning more things, I will put all my studies in here.</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
          <Image src={devIcon}  layout="fill" objectFit="cover"/>
        </div>
      </section>

      <section>
        <div>
          <h3 className="text-3xl py-1"> Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-80">Since the beginning of my journey as a developer, I had an experience in 
          <span className="text-teal-500"> HTML, CSS, React, Javascript</span> </p> 
        <p className="text-md py-2 leading-8 text-gray-80"> Now I'm looking for a job as a front-end developer </p> 
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={HTML} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">HTML</h3>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={CSS} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">HTML</h3>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={React} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">HTML</h3>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10">
            <Image src={Javascript} width={100} height={100} />
        <h3 className="text-lg font-medium pt-8 pb-2">HTML</h3>
          </div>
        </div>

      </section>


    <section>
      <div>
        <h3 className="text-3xl py-1">Portfolio</h3>
        <p className="text-md py-2 leading-8 text-gray-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        <span className="text-teal-500"> ullamco laboris</span> nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit
          esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat <span className="text-teal-500"> Excepteur </span>non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.</p>
      </div>
     <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        <div>
        <div className="basis-1 flex-1"><Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100'} layout="responsive"/></div>
      </div> 
        <div >
        <div className="basis-1 flex-1"><Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100'} layout="responsive"/></div>
      </div> 
      <div>
        <div className="basis-1 flex-1"><Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100'} layout="responsive"/></div>
      </div> 
        <div>
        <div className="basis-1 flex-1"><Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100'} layout="responsive"/></div>
      </div>
       <div>
        <div className="basis-1 flex-1"><Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100'} layout="responsive"/></div>
      </div>
     </div>
    </section>


    </main>
    </div>
  )
}
