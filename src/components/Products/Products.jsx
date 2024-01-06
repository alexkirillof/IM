import styles from '../../styles/products.module.css'
import { Link } from 'react-router-dom'
const Products = ({ title, products = [] }) => {
  return (
    <section>
      {title && <h2>{title}</h2>}
      <div className={styles.list}>
        {products.map((item) => (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className={styles.product}
          >
            <div
              className={styles.image}
              style={{ backgroundImage: `url(${item.images[0]})` }}
            ></div>
            <div className={styles.wrapper}>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.cat}>{item.category.name}</div>
              <div className={styles.info}>
                <div className={styles.prices}>
                  <div className={styles.price}>{item.price}$</div>
                  <div className={styles.oldPrice}>
                    {Math.floor(item.price * 0.8)}$
                  </div>
                </div>
                <div className={styles.purchases}>
                  {Math.floor(Math.random() * 20 + 1)} purchases
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Products
