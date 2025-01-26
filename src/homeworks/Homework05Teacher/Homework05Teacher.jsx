import "./styles.css";
import ProductTeacher from "../../components/ProductTeacher/ProductTeacher";
import { products } from "./data";

function Homework05Teacher() {
  const productsElements = products.map((product) => {
    return (
      <ProductTeacher
      // внутреннее свойство элементов, передаётся внутри метода map (через props в компонент передавать не нужно!)
        key={product.id}
        productName={product.name}
        productPrice={product.price}
      />
    );
  });

  return <div className="homework05-wrapper">{productsElements}</div>;
}

export default Homework05Teacher;