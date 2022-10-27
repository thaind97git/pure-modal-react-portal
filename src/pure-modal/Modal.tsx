import React, { useRef } from 'react';
import ReactPortal from './ReactPortal';
import Mask from './Mask';
import './Modal.scss';

const defaultPrefixCls = 'pure-modal';
const zIndexDefault = 1000;

const getClsx = (classes: string[]) => {
  return classes.filter(Boolean).join(' ');
};

export interface IPureModalProps {
  children: JSX.Element | string;
  header?: JSX.Element | string;
  footer?: JSX.Element | string;
  open: boolean;
  onClose?: () => void;
  destroyOnClose?: boolean;
  closeIcon?: JSX.Element;
  prefixCls?: string;
  maskCloseable?: boolean;
  zIndex?: number;
}

const Modal: React.FC<IPureModalProps> = ({
  open = false,
  onClose = () => {},
  children,
  destroyOnClose = false,
  closeIcon = null,
  prefixCls = '',
  header = null,
  footer = null,
  maskCloseable = true,
  zIndex = zIndexDefault,
}) => {
  const wrapRef = useRef(null);

  const getElementClassName = React.useCallback(
    (className: string) => {
      if (!prefixCls) {
        return '';
      }
      return `${prefixCls}__${className}`;
    },
    [prefixCls],
  );

  const getModifierClassName = React.useCallback(
    (className: string, modifier: string) => {
      return `${className}--${modifier}`;
    },
    [],
  );

  if (!open && destroyOnClose) {
    return null;
  }

  const closeIconToRender = (
    <div
      className={getClsx([
        'close-element',
        getElementClassName('close-element'),
      ])}
      onClick={onClose}
      style={{ zIndex: zIndex }}
    >
      {closeIcon || (
        <span
          className={getClsx(['close-icon', getElementClassName('close-icon')])}
        >
          ×
        </span>
      )}
    </div>
  );

  const rootCls = prefixCls;
  const rootId = `${defaultPrefixCls}-root`;
  const maskCls = getClsx(['mask', getElementClassName('mask')]);
  const wrapperCls = getClsx([
    'wrapper',
    open
      ? getModifierClassName('wrapper', 'open')
      : getModifierClassName('wrapper', 'close'),
    getElementClassName('wrapper'),
  ]);
  const wrapContentCls = getClsx([
    'wrapper-content',
    getElementClassName('wrapper-content'),
  ]);
  const contentCls = getClsx(['content', getElementClassName('content')]);

  let onWrapperClick: (e: React.SyntheticEvent) => void = () => {};
  if (maskCloseable) {
    onWrapperClick = (e: React.SyntheticEvent) => {
      if (e.target === wrapRef.current) {
        onClose();
      }
    };
  }

  return (
    <ReactPortal>
      <div id={rootId} className={rootCls}>
        {open && <Mask zIndex={zIndex} className={maskCls} />}
        <div
          tabIndex={-1}
          ref={wrapRef}
          onClick={onWrapperClick}
          className={wrapperCls}
          style={{ zIndex }}
        >
          <div className={wrapContentCls}>
            <div className={contentCls}>
              {closeIconToRender}
              {header && <div className="header">{header}</div>}
              <div className="body">{children}</div>
              {footer && <div className="footer">{footer}</div>}
            </div>
          </div>
        </div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
