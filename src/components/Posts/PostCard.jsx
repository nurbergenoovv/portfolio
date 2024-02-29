import { useState } from 'react';
import styles from './PostCard.module.css';

function PostCard({ post, index }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (event) => {
    const el = event.currentTarget;
    const rect = el.getBoundingClientRect();
    const localX = (event.clientX - rect.left) / rect.width;
    const localY = (event.clientY - rect.top) / rect.height;

    const glowEl = el.querySelector(`.${styles.notiglow}`);
    const borderEl = el.querySelector(`.${styles.notiborderglow}`);

    glowEl.style.left = `${localX * 100}%`;
    glowEl.style.top = `${localY * 100}%`;
    borderEl.style.left = `${localX * 100}%`;
    borderEl.style.top = `${localY * 100}%`;

    if (isHovering) {
      glowEl.style.transition = "inset 50ms linear, opacity 300ms ease";
      borderEl.style.transition = "inset 50ms linear, opacity 300ms ease";
    } else {
      glowEl.style.transition = "opacity 300ms ease";
      borderEl.style.transition = "opacity 300ms ease";
    }

    setIsHovering(false);
  };

  const handleMouseOut = () => {
    setIsHovering(true);
  };

  return (
    <div className={styles.noti} key={index} onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
      <div className={styles.notiglow}></div>
      <div className={styles.notiborderglow}></div>
      <div className={styles.notititle}>{post.title}</div>
      <div className={styles.notibody}>{post.body}</div>
    </div>
  );
}

export default PostCard;