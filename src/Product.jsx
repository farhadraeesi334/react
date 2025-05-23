import './Product.css';
export default function Product(props){
   return(
        <>
        <div className="product-box">
        <img src={props.image} alt="محصول ۱"/>
        <h3>{props.title}</h3>
        <p>{props.detail}</p>
        <div className="price">{props.price}</div>
        <button>افزودن به سبد خرید</button>
        </div>
        </>
    )
}