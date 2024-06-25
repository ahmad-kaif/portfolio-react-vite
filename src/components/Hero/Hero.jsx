import React from 'react'
import styles from './HeroStyles.module.css'
import heroImg from '../../assets/hero-img.png'
import themeicon from '../../assets/sun.svg'
import twitterIcon from '../../assets/twitter-light.svg'
import githubIcon from '../../assets/github-light.svg'
import linkedIcon from '../../assets/linkedin-light.svg'
import CV from '../../assets/cv.pdf'

function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img 
        className={styles.hero} 
        src={heroImg} 
        alt="Profile Picture of Ahmad Kaif" 
        />
        <img 
        src={themeicon} 
        alt="Color mode icon" 
        />
        </div>
        <div className={styles.info}>
            <h1>
                Ahmad
                <br />
                Kaif
            </h1>
            <h2>Developer | Coder</h2>
            <span>
                <a href="https://twitter.com" target='_blank'>
                <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com" target='_blank'>
                <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://linkdin.com" target='_blank'>
                <img src={linkedIcon} alt="Linkdin icon" />
                </a>
            </span>
            <p>An optimistic and self motivated guy with an insatiable thirst for knowledge and wisdom</p>
            <a href={CV} download>
                <button className='hover' >
                    Resume
                </button>
            </a>

        </div>
    </section>
  )
}

export default Hero
