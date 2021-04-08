import React from 'react';
import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import { useLocalStorageState } from '../../../hooks/useLocalStorageState';

import { getRoute, ROUTES } from '../../../routes/Routes';
import { Title, TitleLevel } from '@ui5/webcomponents-react';
import CenteredContent from '../../../components/Layout/CenteredContent';
import Product from '../../../components/Product/Product';

const ProductList = () => {
  const history = useHistory();
  const [catalog] = useLocalStorageState('PRODUCT_CATALOG');

  const onHeaderClick = (id) => {
    history.push(getRoute(ROUTES.PRODUCT_DETAIL, { id }));
  };

  return (
    <CenteredContent>
      <Helmet title="List - Product Catalogs" />
      <Title level={TitleLevel.H1}>List of Products</Title>
      <br />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {catalog.map((record) => (
          <Product key={record.ProductID} image={record.ThumbnailURL} name={record.Name} price={record.Price} onDetailClick={() => onHeaderClick(record.ProductID)} />
        ))}
      </div>
    </CenteredContent>
  );
};

export default ProductList;
