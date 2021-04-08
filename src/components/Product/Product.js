import { Avatar, AvatarShape, Button, ButtonDesign, Card } from '@ui5/webcomponents-react';
import React from 'react';

export default function Product({ name, price, image, onDetailClick }) {
  return (
    <Card
      avatar={<Avatar shape={AvatarShape.Square} image={image} />}
      heading={name}
      action={
        <div style={{ marginTop: '5px' }}>
          <Button onClick={onDetailClick} design={ButtonDesign.Transparent}>
            View Details
          </Button>
        </div>
      }
      style={{
        width: '600px',
        marginBottom: '10px',
      }}
      subheading={price}
    />
  );
}
