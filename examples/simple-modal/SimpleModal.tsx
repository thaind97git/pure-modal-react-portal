import React from 'react';
import './SimpleModal.scss';
import PureModal, { IPureModalProps } from '../../src/pure-modal/Modal';

const AntdModal: React.FC<IPureModalProps> = ({
  prefixCls = 'antd-modal',
  children,
  ...rest
}) => {
  return (
    <PureModal prefixCls={prefixCls} {...rest}>
      {children}
    </PureModal>
  );
};

export default AntdModal;
