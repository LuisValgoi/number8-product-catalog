import React from 'react';

const style = {
  centered: {
    padding: '1rem',
    margin: '0 auto',
  },
};

const CenteredContent = (props) => {
  return (
    <div data-testid="centered-content" style={style.centered} {...props}>
      {props.children}
    </div>
  );
};

export default CenteredContent;
