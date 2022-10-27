import React from 'react';
import PureModal, { IPureModalProps } from '../../src/pure-modal/Modal';

const WithoutStyleModal: React.FC<IPureModalProps> = ({
  children,
  prefixCls = 'without-style-modal',
  ...rest
}) => {
  return (
    <PureModal prefixCls={prefixCls} {...rest}>
      {children}
    </PureModal>
  );
};

export default WithoutStyleModal;
