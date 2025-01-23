import Product from "../../components/Product/Product";
import "./styles.css";

function Homework05() {
    const products = [
      { id: 1, name: 'Apple', price: 1.5 },
      { id: 2, name: 'Banana', price: 1.0 },
      { id: 3, name: 'Orange', price: 2.0 },
    ];
  
    return (
      <div className="homework05">
        <h2>Products</h2>
        <div className="productsList">
          {products.map(product => (
            <Product key={product.id} name={product.name} price={product.price} />
          ))}
        </div>
      </div>
    );
  }
  
  export default Homework05;