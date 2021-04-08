import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useLocalStorageState } from '../../../hooks/useLocalStorageState';

import { Title, TitleLevel, Toast, ToastPlacement } from '@ui5/webcomponents-react';
import CenteredContent from '../../../components/Layout/CenteredContent';
import Layout from '../../../components/ProductDetail/layout/ProductDetailLayout';
import LeftColumn from '../../../components/ProductDetail/components/LeftColumn';
import MiddleColumn from '../../../components/ProductDetail/components/MiddleColumn';
import RightColumn from '../../../components/ProductDetail/components/RightColumn';
import NavBack from '../../../components/NavBack/NavBack';

const ProductDetail = ({ match }) => {
  const id = match.params.id;
  const [catalog] = useLocalStorageState('PRODUCT_CATALOG');
  const product = catalog.find((c) => c.ProductID === parseInt(id, 10));
  const toast = useRef();

  const showToast = () => {
    toast.current.show();
  };

  return (
    <CenteredContent>
      <Helmet title="Detail - Product Catalogs" />
      <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
        <NavBack />
        <Title level={TitleLevel.H1}>Product Detail</Title>
      </div>
      <br />
      <Toast placement={ToastPlacement.TopCenter} ref={toast} duration={3000}>
        Product Added Successfully
      </Toast>
      {!product && <Title level={TitleLevel.H4}>We couldn't find any element with this ID</Title>}
      {product && (
        <Layout leftLayout={<LeftColumn product={product} />} middleLayout={<MiddleColumn product={product} />} rightLayout={<RightColumn onClickAddToCart={() => showToast()} product={product} />} />
      )}
    </CenteredContent>
  );
};

export default ProductDetail;
