import React from 'react';
import './CenterModal.scss';
import PureModal, { IPureModalProps } from '../../src/pure-modal/Modal';

interface IProps extends IPureModalProps {
  open: boolean;
}

const CenterModal: React.FC<IProps> = ({
  prefixCls = 'center-modal',
  children,
  ...rest
}) => {
  return (
    <PureModal prefixCls={prefixCls} {...rest}>
      {children}
    </PureModal>
  );
};

export default CenterModal;
