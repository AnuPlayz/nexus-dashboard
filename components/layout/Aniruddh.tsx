import styles from "../../styles/Components.module.scss";

export function HireUs() {
  return (
    <div className={styles.hireUsContainer}>
        <div className={styles.linksWrapper}>
          <a
            target="_blank"
            className={styles.hireUs}
            rel="noreferrer"
            href="https://aniruddh.xyz/"
          >
            Crafted with <span>♥</span> by NexusTech
          </a>
        </div>
      </div>
  );
}
