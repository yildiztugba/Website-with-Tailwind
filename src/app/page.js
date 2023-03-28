
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube 
} from "react-icons/ai";
import Image from "next/image";
import devIcon from "../../public/icon.png"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tugba yildiz Portfolio</title> 
      </Head>
    <main className="bg-white px-10 ">
      
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
          <h2 className="text-5xl py-2 text-teal-600 font-medium ">Tugba Yildiz</h2>
          <h3 className="text-2xl py-2">Front-end Developer</h3>
          <p className="text-md py-5 leading-8 text-gray-800">I have a bachelor's degree in Teaching Computer Education. While I'm refreshing my knowledge and learning more things, I will put all my studies in here.</p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={devIcon}  layout="fill" objectFit="cover"/>
        </div>
      </section>
    </main>
    </div>
  )
}
