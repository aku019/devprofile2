import React from 'react';

import { ReactComponent as Heart } from '../logo/favorite.svg';

const Footer = () => {
    return (
        <footer className='bottom-0 flex items-center justify-center w-full text-xl text-center text-white lg:static text-xxs lg:text-2xl bg-primary h-13 lg:h-25'>
            Made with
            <Heart className='w-2 h-2 mx-1 fill-current lg:w-auto lg:h-auto' />
              by Asish
        </footer>
    )
}

export default Footer;