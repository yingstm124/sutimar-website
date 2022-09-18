import styles from "../../../styles/emoticon-bg.module.css"
import React from "react";

function EmoticonBackgroud() {
  return (
    <div className={styles.bg}>
      <div className={styles.bgArea}>
        <ul>
          <li>🦄</li>
          <li>🔥</li>
          <li>👽</li>
          <li>🍿</li>
          <li>🚀</li>
          <li>🦊</li>
          <li>💻</li>
          <li>🧸</li>
          <li>⛄</li>
        </ul>
      </div>
    </div>
  );
}

export default EmoticonBackgroud;
