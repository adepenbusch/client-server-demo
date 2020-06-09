const mockProducts = [
  {
    name: 'Hand Sanitizer',
    quantity: 1,
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Hand_Sanitizer.JPG/360px-Hand_Sanitizer.JPG',
    price: '$34.99',
  },
  {
    name: 'Face Masks',
    quantity: 10,
    imgUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Surgical_masks_01.jpg/367px-Surgical_masks_01.jpg',
    price: '$24.99',
  },
];

export const getMockProducts = () => {
  return mockProducts;
};

export const putMockProducts = (name: string, incrementValue: number) => {
  const product = mockProducts.find((p) => p.name === name);
  //@ts-ignore
  product.quantity += incrementValue;
};
