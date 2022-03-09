import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import styles from "./../styles/Home.module.css"
import Navbar from './../components/Navbar'
import Footer from './../components/Footer'
import Head from 'next/head'
import Card from "./../components/Card"

export default function Home() {
  const [refCallback, slider, sliderNode] = useKeenSlider(
    {
      loop: true,
      mode: "free",
      slides: { /*origin: "center", */perView: 2.5, spacing: 30 },
      range: {
        min: -5,
        max: 5,
      },
    }
  )

  return (
  <div>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@500&display=swap" rel="stylesheet"/>
    </Head>
    <Navbar/>
    {/* Main Section */}
    <section className={styles.mainSection}>
    <div  className={styles.main}>
    <div className={styles.mainLeft}>
        <h1>Top experts. top value.</h1>
        <p>We enable experienced specialists to provide consultation services to individuals, startups or companies. Our approach to consultation is unique, bringing value to people like you.</p>
        {/* <div className={styles.searchContainer}>
          <input className={styles.searchBox} type="text"  placeholder="Search by consultation category"/>
        </div> */}
        {/* <button className={styles.searchButton}>Get Started</button> */}
        <div className={styles.bookButton}>
          <button className={styles.bookAnExpertButton}>Book An Expert</button>
          <button className={styles.beAConsultantBotton}>Be a Consultant</button>
        </div>
      </div>

      <div className={styles.mainRight}>
        <img src='/young-african.svg' alt='' className={styles.youngAfrican} />
      </div>
    </div>
    </section>

    {/* Feature Section */}
    <section className={styles.featureDiv}>
      <div className={styles.featureText}>
        <h1>WHY SEAMCONSULT?</h1>
        <p>Make the world your comfort zone
        Get consultations with professional online globally at the best rates.</p>
      </div>

      <div className={styles.featuresSubDiv}>
        <div className={styles.one}>
          <center><img src='/1.svg' alt='phone' width={50} height={50} /></center>
          <h6>Puzzled on where to start?</h6>
          <p>Your first consultation is a click away. Quickly book a consultant</p>
        </div>
        <div className={styles.one}>
          <center><img src='/2.svg' alt='phone' width={50} height={50} /></center>
          <h6>Global network of consultants</h6>
          <p>Seamconsult has a rich network of consultants from varied and diverse backgrounds </p>
        </div>
        <div className={styles.one}>
          <center><img src='/3.svg' alt='phone' width={50} height={50} /></center>
          <h6>Incremental value</h6>
          <p>Generate compounded value in your organization from the perspective of multiple experts.</p>
        </div>
      </div>
    </section>
    

    {/* Company Logo Section */}
    <section className={styles.company}>
      <div><img src='/e-africa.svg' alt='phone' className={styles.companyLogo}/> </div>
      <div><img src='/interswitch.svg' alt='phone' /></div>
      <div><img src='/flw.svg' alt='phone' /></div>
      <div><img src='/andela.svg' alt='phone' /></div>
      <div><img src='/alt-school.svg' alt='phone' /></div>
      <div><img src='/dear-design.svg' alt='phone' /></div>
    </section>

    {/* How It Works Section */}
    <section className={styles.featureDiv}>
      <div className={styles.howItWorksText}>
        <h1>HOW IT WORKS</h1>
        <p>Get consultation online from the world's best professionals through Africa’s leading on-demand consultancy service platform. </p>
      </div>

      <div className={styles.howItWorksDiv}>
      <div className={styles.howItWorksTextSubDiv}>
        <div className={styles.howItWorksCard}>
          <center><img src='/globe.svg' alt='phone' width={50} height={50} /></center>
          <h6>Find the best expert</h6>
          <p>Choose from over 49,000 online tutors. Use filters to narrow your search and find the perfect fit</p>
        </div>
        <div className={styles.howItWorksCard}>
          <center><img src='/calender.svg' alt='phone' width={50} height={50} /></center>
          <h6>Schedule consultation</h6>
          <p>Find the perfect time for your busy schedule. 
Book lessons in seconds via desktop or mobile</p>
        </div>
      {/* <img src='/Group.svg'/> */}
      </div>
      <div className={styles.howItWorksTextSubDiv}>
        <div className={styles.howItWorksCard}>
          <center><img src='/camera.svg' alt='phone' width={50} height={50} /></center>
          <h6>Virtual call</h6>
          <p>When it’s consultation time, connect with your consultant through our comprehensive video platform </p>
        </div>
        <div className={styles.howItWorksCard}>
          <center><img src='/feedback.svg' alt='phone' width={50} height={50} /></center>
          <h6>Feedback</h6>
          <p>Give some feedback on the consultation. Rate your consultant experience.</p>
        </div>
    
      </div>
      </div>
    </section>
    

    {/* Try For Free Section */}
    {/* <section className={styles.tryForFreeDiv}>
      <div className={styles.tryForFree}>
        <p>What are you waiting for?</p>
        <h1>Try for free</h1>
        <p className={styles.downloads}>Download the seamconsult app on the Appstore and Google Play store.</p>
        <div>
          <img src='/googlestore.svg' alt='applestore' width={100} height={70} className={styles.appleButton}/>
          <img src='/googlestore.svg' alt='googlestore' width={100} height={70}/>
        </div>
      </div>

      <div className={styles.ovalBackground}>
        <img src='/phone.svg' alt='phone' width={200} height={300} className={styles.phone} />
      </div>
    </section> */}

    {/* Top Rated Section */}
    <section className={styles.topRatedSection}>
      <div>
      <div className={styles.topRatedDiv}>
        <h6>Meet the top & best rated specialists</h6>
        <p>View all specialists</p>
      </div>

      <div ref={refCallback} className="keen-slider">
        <div class="keen-slider__slide">
          <Card />
        </div>
        <div class="keen-slider__slide">
          <Card />
        </div>
        <div class="keen-slider__slide">
          <Card />
        </div>
        <div class="keen-slider__slide">
          <Card />
        </div>
        <div class="keen-slider__slide">
          <Card />
        </div>
        <div class="keen-slider__slide">
          <Card />
        </div>
        <div class="keen-slider__slide">
          <Card />
        </div>
        <div class="keen-slider__slide">
          <Card />
        </div>
      </div>
      </div>
    </section>

    {/* Testimonial Section */}
    <section>
      <div className={styles.testimonialDiv}>
        <h6>TESTIMONIAL</h6>
        <p>See what our members are saying about seamconsult</p>
      </div>
      <div className={styles.howItWorksDiv}>
        <div className={styles.howItWorksTextSubDiv}>
          <div className={styles.howItWorksCard}>
            <p>“We have been waiting on this product and now that we have installed a few. We think it will make the industry by storm.”</p>
            <img src='/avatar-1.svg' className={styles.testimonialImg}/>
            <div className={styles.quote}>
              <p>Ryan Oliver</p><span><img src="/quote"/></span>
            </div>
          </div>

          <div className={styles.howItWorksCard}>
            <p>“We have been waiting on this product and now that we have installed a few. We think it will make the industry by storm.”</p>
            <img src='/avatar-1.svg' className={styles.testimonialImg}/>
          </div>
        
          {/* <div className={styles.howItWorksCard}>
            <center><img src='/calender.svg' alt='phone' width={50} height={50} /></center>
            <h6>Schedule consultation</h6>
            <p>Seamconsult has a rich network of consultants from varied and diverse backgrounds</p>
          </div> */}
        </div>
      </div>
     
    </section>


    {/* Download Section */}
    <section className={styles.downloadSection}>
      <div className={styles.downloadTextDiv}>
        <h6>DOWNLOAD APP</h6>
        <p>There is more to love in our application</p>
      </div>
      <div className={styles.downloadDiv}>
        {/* <div  className={styles.downloadUserApp}>
          <div>
            <img src='/googlestore.svg' alt='applestore' width={100} height={70} className={styles.appleButton}/>
            <img src='/googlestore.svg' alt='googlestore' width={100} height={70} className={styles.appleButton}/>
            <p>Download the User App<button>hello</button></p>          
          </div>
          
        </div> */}

        <div className={styles.downloadConApp}>
          <div>
            <img src='/googlestore.svg' alt='applestore' width={100} height={70} className={styles.appleButton}/>
            <img src='/apple-button.svg' alt='googlestore' width={100} height={70} className={styles.appleButton}/>
          </div>

          <div className={styles.downloadText}>
            <h1>Download the User App</h1><img src='/black-arrow.svg' />
          </div>
        </div>

        {/* <div> */}
        <div className={styles.downloadConApp}>
          <div>
            <img src='/googlestore.svg' alt='applestore' width={100} height={70} className={styles.appleButton}/>
            <img src='/apple-button.svg' alt='googlestore' width={100} height={70} className={styles.appleButton}/>
          </div>

          <div className={styles.downloadText}>
            <h1>Download the Consultant App </h1><img src='/black-arrow.svg' />
          </div>
        </div>
     
        {/* </div> */}
      </div>
    </section>
    

    {/* Sign Up Section */}
    <section className={styles.signUpSection}>
      <div className={styles.signUpDiv}>
        <div className={styles.signUpUser}>
          <h1>Sign up as a User</h1>
          <img src='/arrow.svg'/>
        </div>
        <div className={styles.signUpCon}>
          <h1>Sign up as a Consultant</h1>
          <img src='/arrow.svg'/>
        </div>
      </div>
    </section>


    {/* Footer Section */}
    <Footer/>
    </div>
  )
}

