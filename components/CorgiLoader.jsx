import styles from '../styles/CorgiLoader.module.css';
import asset from '../lib/asset';

const CorgiLoader = ({ text = 'Fetching GitHub data...' }) => (
  <div className={styles.wrapper}>
    <div className={styles.track}>

      {/* CROSSING 1: oreo LTR (t=0) meets redvelvet RTL (t=2) */}
      <div className={`${styles.corgi} ${styles.ltr}`} style={{ animationDelay: '0s' }}>
        <img src={asset('/oreo.gif')} alt="" className={styles.gif} />
      </div>
      <div className={`${styles.corgi} ${styles.rtl}`} style={{ animationDelay: '2s' }}>
        <img src={asset('/redvelvet.gif')} alt="" className={styles.gif} />
      </div>

      {/* SOLO: chocolatechip RTL (t=8) */}
      <div className={`${styles.corgi} ${styles.rtl}`} style={{ animationDelay: '8s' }}>
        <img src={asset('/chocolatechip.gif')} alt="" className={styles.gif} />
      </div>

      {/* SOLO: KINAKO RTL (t=14) */}
      <div className={`${styles.corgi} ${styles.rtl}`} style={{ animationDelay: '14s' }}>
        <img src={asset('/KINAKO.gif')} alt="" className={styles.gif} />
      </div>

      {/* CROSSING 2: crab LTR (t=20) meets MANEKI RTL (t=22) */}
      <div className={`${styles.corgi} ${styles.ltr}`} style={{ animationDelay: '20s' }}>
        <img src={asset('/crab.gif')} alt="" className={styles.gif} />
      </div>
      <div className={`${styles.corgi} ${styles.rtl}`} style={{ animationDelay: '22s' }}>
        <img src={asset('/MANEKI.gif')} alt="" className={styles.gif} />
      </div>

      {/* SOLO: MIDNIGHT RTL (t=28) */}
      <div className={`${styles.corgi} ${styles.rtl}`} style={{ animationDelay: '28s' }}>
        <img src={asset('/MIDNIGHT.gif')} alt="" className={styles.gif} />
      </div>

      {/* SOLO: crab RTL (t=34) */}
      <div className={`${styles.corgi} ${styles.rtl}`} style={{ animationDelay: '34s' }}>
        <img src={asset('/crab.gif')} alt="" className={styles.gif} />
      </div>

    </div>
    {text && <p className={styles.loadingText}>{text}</p>}
  </div>
);

export default CorgiLoader;
