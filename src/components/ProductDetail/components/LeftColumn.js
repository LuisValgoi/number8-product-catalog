import React from 'react';

import { Avatar, AvatarShape, AvatarSize, Text } from '@ui5/webcomponents-react';

const LeftColumn = ({ product }) => (
  <>
    <Avatar size={AvatarSize.XL} shape={AvatarShape.Square} image={product.PictureURL} />
    <Text>{`Brand: ${product.Brand}`}</Text>
    <Text>{`Color: ${product.Color}`}</Text>
  </>
);

export default LeftColumn;
