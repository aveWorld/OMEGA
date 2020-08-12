import Head from 'next/head'
import '../styles/home.css'
import Header from '../components/Header'
import Cart from '../components/Cart'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
    <Head>
        <title>OMEGA</title>
        <meta name="description" content="SITE MADE BY MP" />
    </Head>
    <Header />
   <div className="home__header">
     <div className="home__header__border color-white">
       <h1 className="home__header__border__h1">Workforce Survey</h1>
       <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
       <a className="home__header__border__button"><span>Start Now</span></a>
      </div>
   </div>
   <main className="home__cards">
    <div className="home__cards__wrapper">
      <Cart 
        title="Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae"
        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
        img="/image.png"
        />
      <Cart 
        title="Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae"
        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
        img="/image1.png"
        />
      <Cart 
        title="Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae"
        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
        img="/image2.png"
        />
      <Cart 
        title="Kym Marsh, 42, becomes a grandmother for the first time as daughter Emilie Mae"
        subtitle="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium"
        img="/image3.png"
        />
    </div>
   </main>
   <Footer />
   </>
  )
}
