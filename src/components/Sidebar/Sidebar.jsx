import styles from '../../styles/sidebar.module.css'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const { list } = useSelector((state) => state.categories)
  return (
    <section className={styles.sidebar}>
      <div className={styles.title}>CATEGORIES</div>
      <nav>
        <ul className={styles.menu}>
          {list.map((item) => (
            <li key={item.id}>
              <NavLink
                to={`/categories/${item.id}`}
                className={({ isActive }) =>
                  `${styles.link} ${isActive ? styles.active : ''}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className={styles.footer}>
        <a href='/help' className={styles.link} target='_blank'>
          Help
        </a>
        <a
          href='/terms'
          className={styles.link}
          target='_blank'
          style={{ textDecoration: 'underline' }}
        >
          Terms & Conditions
        </a>
      </div>
    </section>
  )
}

export default Sidebar
