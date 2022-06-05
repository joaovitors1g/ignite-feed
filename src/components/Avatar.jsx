import styles from './Avatar.module.css';

export function Avatar({ bordered, src }) {
  return (
    <img
      src={src}
      className={bordered ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
