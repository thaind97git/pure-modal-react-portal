import React, { useState } from 'react';
import { render } from 'react-dom';
import './index.css';
import WithoutStyleModal from './without-style-modal/WithoutStyleModal';
import AnimationModal from './animation-modal/AnimationModal';
import SimpleModal from './simple-modal/SimpleModal';
import CenterModal from './center-modal/CenterModal';

const exampleChildren = (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fringilla
    ex a feugiat blandit. Sed tempor placerat dui et hendrerit. Nunc fringilla
    vel orci at lacinia. Duis vitae nulla sit amet justo faucibus ornare. Nunc
    nec lacinia dolor. Vestibulum egestas condimentum ante, id semper sem
    facilisis eu. Sed aliquam eget est eget finibus. Quisque vehicula massa et
    elit maximus, vel euismod erat lacinia. Morbi ut risus eget nunc feugiat
    cursus.{' '}
  </div>
);
const PureModalPortal: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openCustomModal, setOpenCustomModal] = useState(false);
  const [openAnimationModal, setOpenAnimationModal] = useState(false);
  const [openCustomModalCenter, setOpenCustomModalCenter] = useState(false);
  return (
    <>
      <WithoutStyleModal
        header={<h2 style={{ margin: 0, padding: '20px 0px' }}>Header</h2>}
        footer={
          <div>
            <h2 style={{ margin: 0, padding: '20px 0px' }}>Footer</h2>
          </div>
        }
        open={openModal}
        onClose={() => setOpenModal(false)}
        destroyOnClose
      >
        {exampleChildren}
      </WithoutStyleModal>
      <SimpleModal
        header={<h4 style={{ margin: 0 }}>Simple Modal Title</h4>}
        footer={<span>Footer</span>}
        open={openCustomModal}
        onClose={() => setOpenCustomModal(false)}
        destroyOnClose
      >
        {exampleChildren}
      </SimpleModal>
      <AnimationModal
        header={<h4 style={{ margin: 0 }}>Animation Modal Title</h4>}
        footer={<span>Footer</span>}
        open={openAnimationModal}
        onClose={() => setOpenAnimationModal(false)}
        destroyOnClose
      >
        {exampleChildren}
      </AnimationModal>
      <CenterModal
        header={<h4 style={{ margin: 0 }}>Center Modal Title</h4>}
        footer={<span>Footer</span>}
        open={openCustomModalCenter}
        onClose={() => setOpenCustomModalCenter(false)}
        destroyOnClose
      >
        {exampleChildren}
      </CenterModal>
      <button onClick={() => setOpenModal(true)}>
        Modal without style custom
      </button>
      <button onClick={() => setOpenCustomModal(true)}>
        Modal custom style
      </button>
      <button onClick={() => setOpenCustomModalCenter(true)}>
        Center modal custom style
      </button>
      <button onClick={() => setOpenAnimationModal(true)}>
        Animation modal
      </button>
    </>
  );
};

render(<PureModalPortal />, document.getElementById('root'));
