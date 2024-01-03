import styles from '../../styles/header.module.css'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../utils/routes.js'
import LOGO from '../../images/logo.svg'
import AVATAR from '../../images/avatar.jpg'
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to={ROUTES.HOME}>
          <img src={LOGO} alt='Stuff' />
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.user}>
          <div
            className={styles.avatar}
            style={{ backgroundImage: `url(${AVATAR})` }}
          />
          <div className={styles.username}>GUEST</div>
        </div>
        <form className={styles.form}>
          <div className={styles.icon}>
            <svg className='icon'>
              <use xlinkHref='/sprite.svg#search' />
            </svg>
          </div>
          <div className={styles.input}>
            <input
              type='search'
              name='search'
              placeholder='Search for anything...'
              autoComplete='off'
              onChange={() => {}}
              value=''
            />
            {false && <div className={styles.box}></div>}
          </div>
        </form>
        <div className={styles.account}>
          <Link to={ROUTES.HOME} className={styles.favourites}>
            <svg className={styles['icon-fav']}>
              <use xlinkHref='/sprite.svg#heart' />
            </svg>
          </Link>
          <Link to={ROUTES.CART} className={styles.cart}>
            <svg className={styles['icon-cart']}>
              <use xlinkHref='/sprite.svg#bag' />
            </svg>
            <span className={styles.count}>2</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
