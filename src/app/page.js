
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tugba yildiz Portfolio</title> 
      </Head>
    <main>
      
      <section className="min-h-screen">
        <nav>
          <h1>developedbyyildiz</h1>
          <ul>
            <li>
              <BsFillMoonStarsFill />
            </li>
            <li>
              <a href="#">Resume</a>
            </li>
          </ul>
        </nav>
      </section>
    </main>
    </div>
  )
}
