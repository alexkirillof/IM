import styles from '../../styles/footer.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes.js'
import LOGO from '../../images/logo.svg'
const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt='Stuff' />
        </Link>
      </div>
      <div className={styles.rights}>
        Developed by{' '}
        <a
          href='https://github.com/alexkirillof'
          target='_blank'
          rel='noreferrer'
        >
          {' '}
          Alex
        </a>
      </div>
      <div className={styles.socials}>
        <a href='https://instagram.com' target='_blank' rel='noreferrer'>
          <svg className='icon'>
            <use xlinkHref='/sprite.svg#instagram' />
          </svg>
        </a>
        <a href='https://youtube.com' target='_blank' rel='noreferrer'>
          <svg className='icon'>
            <use xlinkHref='/sprite.svg#youtube' />
          </svg>
        </a>
        <a href='https://facebook.com' target='_blank' rel='noreferrer'>
          <svg className='icon'>
            <use xlinkHref='/sprite.svg#facebook' />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default Footer
