import * as React from 'react';
import { Card, Button } from 'antd';
import 'antd/dist/antd.css';

export const ProductCard = ({ name, imageUrl, price, isDisabled, onClick }) => {
  return (
    <div className="productGroup">
      <Card
        hoverable
        style={{ width: 300 }}
        cover={<img alt={name} src={imageUrl} />}
      >
        <Card.Meta title={name} description={price} />
      </Card>
      <Button type="primary" disabled={isDisabled} onClick={() => onClick()}>
        Buy
      </Button>
    </div>
  );
};
