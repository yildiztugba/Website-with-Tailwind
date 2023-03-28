
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tugba yildiz Portfolio</title> 
      </Head>
    <main className="bg-white px-10 ">
      
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">developedbyyildiz</h1>
          <ul>
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
    </div>
  )
}
