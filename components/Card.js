import styles from "./../styles/Home.module.css"

export default function Card() {
    return (<div className={styles.card}>
    <img src='/user2.png' alt=''/>
    <button className={styles.rating}>4.2</button>

    <div className={styles.cardDetails}>
      <div className={styles.cardTitle}>
        <span>Fashion</span>
        <button>-10%</button>
      </div>
      <h6>Nina Gbadamosi</h6>
      <p>Die Wortfügung wurde gebildet.Die Wortfügung wurde gebildet.</p>
      <div className={styles.bookDiv}>
        <span>Available Today</span>
        <button>Book</button>
      </div>
    </div>
  </div>
    )
}