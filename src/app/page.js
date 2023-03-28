
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube 
} from "react-icons/ai";

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
        <div>
          <h2>Tugba Yildiz</h2>
          <h3>Front-end Developer</h3>
          <p>I have a bachelor's degree in Teaching Computer Education. While I'm refreshing my knowledge and learning more things, I will put all my studies in here.</p>
        </div>
        <div>
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
      </section>
    </main>
    </div>
  )
}
