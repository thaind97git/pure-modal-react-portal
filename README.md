<h1>pure-modal-react-portal
<p>
<a href="https://github.com/thaind97git/pure-modal-react-portal/issues" target="_blank" rel="noopener"><img src="https://img.shields.io/github/issues/thaind97git/pure-modal-react-portal" data-origin="https://img.shields.io/github/issues/thaind97git/pure-modal-react-portal" alt="Git issue"></a> 
<a href="https://github.com/thaind97git/pure-modal-react-portal/network/members" target="_blank" rel="noopener"><img src="https://img.shields.io/github/forks/thaind97git/pure-modal-react-portal" data-origin="https://img.shields.io/github/forks/thaind97git/pure-modal-react-portal" alt="Git forks"></a> 
<a href="https://github.com/thaind97git/pure-modal-react-portal/stargazers" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/thaind97git/pure-modal-react-portal" data-origin="https://img.shields.io/github/stars/thaind97git/pure-modal-react-portal" alt="Git star"></a> 
<a href="https://github.com/thaind97git/pure-modal-react-portal/blob/main/LICENSE" target="_blank" rel="noopener"><img src="https://img.shields.io/github/license/thaind97git/pure-modal-react-portal" data-origin="https://img.shields.io/github/license/thaind97git/pure-modal-react-portal" alt="Git MIT"></a> 
</p>
</h1>

[![NPM](https://nodei.co/npm/pure-modal-react-portal.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/pure-modal-react-portal/)
<br  />

Simple modal component for ReactJS with Portal

- Without dependencies
- Support React Portal
- Easy to custom style

## Demo

[https://thaind97git.github.io/pure-modal-react-portal](https://thaind97git.github.io/pure-modal-react-portal/)

## Installation

```bash
npm install --save pure-modal-react-portal
```

## Usage

### Jsx Component:

```js
import React, { useState } from 'react';
import PureModal from 'pure-modal-react-portal';

const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <PureModal
        prefixCls="custom-modal"
        open={open}
        onClose={() => setOpen(false)}
      >
        <div>Modal Content</div>
      </PureModal>
    </div>
  );
};
export default Modal;
```

### Styling:

```css
.custom-modal {
  &__close-element {
    display: block;
    width: 54px;
    height: 54px;
    line-height: 54px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__wrapper-content {
    padding-bottom: 24px;
    top: 100px;
  }
  &__content {
    .header {
      padding: 16px 24px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.06);
      border-radius: 2px 2px 0 0;
    }
    .body {
      padding: 24px;
    }
    .footer {
      padding: 10px 16px;
      border-top: 1px solid rgba(0, 0, 0, 0.06);
      border-radius: 0 0 2px 2px;
    }
  }
}
```

### Props:

| Name                  | Type                  | Default  | Description                        |
| --------------------- | --------------------- | -------- | ---------------------------------- |
| <b>open</b>           | boolean               | false    | State to open/close modal          |
| <b>onClose</b>        | void                  | () => {} | Close modal callback               |
| <b>destroyOnClose</b> | boolean               | false    | Unmount modal when closed          |
| <b>maskCloseable</b>  | boolean               | true     | Close outside modal to close       |
| <b>zIndex</b>         | number                | 1000     | Z-index of modal                   |
| <b>prefixCls</b>      | string                | ""       | Prefix class modal to custom style |
| <b>closeIcon</b>      | JSX.Element or string | null     | Custom close modal icon            |
| <b>header</b>         | JSX.Element or string | null     | Header section                     |
| <b>footer</b>         | JSX.Element or string | null     | Footer section                     |
| <b>children</b>       | JSX.Element or string |          | Modal children                     |
