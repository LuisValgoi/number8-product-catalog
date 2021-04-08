import React from 'react';

import { RatingIndicator, Text, Title } from '@ui5/webcomponents-react';

const MiddleColumn = ({ product }) => (
  <>
    <Title>{product.Name}</Title>
    <RatingIndicator value={product.RatingAvg} style={{ marginBottom: '5px' }} />
    <Text>{product.Description}</Text>
  </>
);

export default MiddleColumn;
