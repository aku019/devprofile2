import React, { useState } from 'react';

import ContentHeading from '../component/afterheader';
import Footer from '../component/footer';
import Hero from '../component/header';
import classNames from 'classnames';
import Modal from '../component/Modal';

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onAddDeveloper = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      {isModalOpen && (
        <div className='flex items-center justify-center'>
          <Modal modalClose={onAddDeveloper} />
        </div>
      )}
      <div className={classNames('relative w-auto h-screen font-body', {
        'opacity-50': isModalOpen,
        'overflow-y-hidden': isModalOpen,

      })}>
        <Hero isModalOpen={isModalOpen} />
        <ContentHeading onAddDeveloper={onAddDeveloper}>Explore developer profiles</ContentHeading>
        <Footer />
      </div>
    </>
  )
}

export default HomePage;