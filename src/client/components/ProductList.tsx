import * as React from 'react';
import { ProductCard } from './ProductCard';
import { fetchHelper } from '../utils/fetchHelper';

type Product = {
  name: string;
  quantity: number;
  imgUrl: string;
  price: string;
};

function buyProduct(name: string) {
  fetchHelper('http://localhost:9000/api/products', {
    method: 'PUT',
    body: { name },
  }).then(() => {});
}

export class ProductList extends React.Component<{}, { products: Product[] }> {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    fetchHelper('http://localhost:9000/api/products').then((res) =>
      this.setState({ products: res }),
    );
  }

  render() {
    return (
      <>
        {this.state.products.map((prod) => (
          <ProductCard
            key={prod.name}
            name={prod.name}
            imageUrl={prod.imgUrl}
            price={prod.price}
            isDisabled={prod.quantity <= 0}
            onClick={() => buyProduct(prod.name)}
          />
        ))}
      </>
    );
  }
}
