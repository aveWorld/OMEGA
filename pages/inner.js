import Head from 'next/head'
import '../styles/inner.css'
import Header from '../components/Header'
import Cart from '../components/Cart'
import Footer from '../components/Footer'

export default function inner() {
  return (
    <>
    <Header />
    <div className="inner__header">
        <h1 className="color-white">Cracking the Government Procurement Code</h1>
    </div>
    <main className="inner__main">
        <div className="inner__main__text">
            <p>Group, a Washington D.C.-based strategy consulting firm, has published a report entitled “Cracking the Government Procurement Code” which details the results of an 
                extensive study on the experience of small businesses doing business in government markets.
                Conducted in partnership with Amazon Business, the report examines the barriers to entry and the barriers to success that small businesses face 
                when selling to the government customers, and the role that B2B e-commerce (i.e., online marketplaces) can play in reducing these barriers.
            </p>
            <p>Leveraging the firm’s deep experience supporting public sector acquisition strategy and operations, Censeo developed a comprehensive 
                web-based survey to capture the perspectives of small businesses selling to government customers at the federal, state and local levels. 
                The survey was broadly distributed to a network of 35,000 small businesses currently registered to do business with government customers, 
                and asked respondents to describe the impact of several key barriers to entry and success on their experience selling to the government. 
                To assess the potential enabling role of online marketplaces in government procurement, the survey also asked respondents about their current 
                usage of online marketplaces and the benefits that they provide. Key findings from the report include:
            </p>
            <p>“Despite efforts by government agencies to level the playing field, small businesses still face significant challenges in doing 
                business with the public sector,” said Derrick Moreira, President of Censeo and team leader of the study. “Through this extensive study, 
                we wanted to highlight the perspectives of the small business community and provide tangible focus areas for improvement, particularly 
                in the opportunity space created by the growing adoption of online marketplaces by government procurement officials and small businesses.”
            </p>
        </div>
        <button className="inner__main__button">Download Full Report</button>
        <h1 className="inner__main__cards_title">Related Insights</h1>
        <div className="inner__cards">
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
