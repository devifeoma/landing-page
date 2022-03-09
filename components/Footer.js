import Link from "next/link"
import styles from "./../styles/Footer.module.css"

export default function Footer() {
    return (
        <div className={styles.footer}>
            <section className={styles.footerMain}>
                <div className={styles.footerMainItem}>
                    {/* <h1 className={styles.footerTitle}>About</h1> */}
                    <div className={styles.logo}><img src='/seamconsult.svg' alt='logo' /></div>
                    <p>Seamless access to quality expertise, at home or on the fly.</p>
                </div>

                <div className={styles.footerMainItem}>
                    <h1 className={styles.footerTitle}>Services</h1>
                    <ul>
                        <li><Link href=""><a>Email Marketing</a></Link></li>
                        <li><Link href=""><a>Campaigns</a></Link></li>
                        <li><Link href=""><a>Branding</a></Link></li>
                        <li><Link href=""><a>Offline</a></Link></li>
                    </ul>
                </div>

                <div className={styles.footerMainItem}>
                    <h1 className={styles.footerTitle}>About</h1>
                    <ul>
                        <li><Link href=""><a>Our Story</a></Link></li>
                        <li><Link href=""><a>Benefits</a></Link></li>
                        <li><Link href=""><a>Team</a></Link></li>
                        <li><Link href=""><a>Careers</a></Link></li>
                    </ul>
                </div>

                <div className={styles.footerMainItem}>
                    <h1 className={styles.footerTitle}>Follow Us</h1>
                    <ul>
                        <li><Link href=""><a>Facebook</a></Link></li>
                        <li><Link href=""><a>Twitter</a></Link></li>
                        <li><Link href=""><a>Instagram</a></Link></li>
                    </ul>
                </div>
            </section>
                
    
            <section className={styles.footerLegal}>
                <div><p className={styles.footerText}>Copyright © 2020. Seamconsult. All rights reserved.</p></div>
                <ul className={styles.footerBottomLink}>
                    <div className={styles.menu}>
                        <li><Link href=""><a>Terms & Conditions</a></Link></li>
                        <li><Link href=""><a>Privacy Policy</a></Link></li>
                    </div>
                </ul>
            </section>
        </div>
    )
  }
