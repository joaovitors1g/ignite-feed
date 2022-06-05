import styles from './SideBar.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src='https://images.unsplash.com/photo-1520024996-e5891ccf30cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'
        className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar bordered src='https://github.com/joaovitors1g.png' />
        <strong>João Vitor</strong>
        <span>Backend Developer</span>
      </div>

      <footer>
        <a href='#'>
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
