import Link from "next/link"
import styles from "./../styles/Navbar.module.css"


export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}><img src='/seamconsult.svg' alt='logo' /></div>
            <ul className={styles.navLinks}>
            
                <div className={styles.menu}>
                    <li><Link href=""><a>Services</a></Link></li>
                    <li><Link href=""><a>How it works</a></Link></li>
                    <li><Link href=""><a>Our Experts</a></Link></li>
                    <li><Link  href=""><a>Testimonial</a></Link></li>
                    <li><Link  href=""><a>Get the mobile app</a></Link></li>
                </div>
            </ul>
        </nav>  
    )
  }