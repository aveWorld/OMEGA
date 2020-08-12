

import '../styles/cart.css'

const Cart = ({title, subtitle, img}) => (
    <div className="card">
       <div className="card__head">
        <img src={img} alt="cart image"/>
       </div>
       <div className="card__body">
        <h3 className="card__body__title">{title}</h3>
        <p className="card__body__subtitle">{subtitle}</p>
        <div className="card__body__more bold-font"><img src="/arrow.svg" alt="arrow"/><span>Show More</span></div>
       </div>
    </div>
);

export default Cart;