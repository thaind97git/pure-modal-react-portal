import React from 'react';
import PureModal, { IPureModalProps } from '../../src/pure-modal/Modal';
import './AnimationModal.scss';

const AnimationModal: React.FC<IPureModalProps> = ({
  prefixCls = 'animation-modal',
  children,
  ...rest
}) => {
  return (
    <PureModal prefixCls={prefixCls} {...rest}>
      {children}
    </PureModal>
  );
};

export default AnimationModal;
