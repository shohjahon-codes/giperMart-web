import React from 'react';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Header/>
      </header>
      
      <main>{children}</main>

      <footer>
      <Footer/>
      </footer>
    </>
  );
};

export default Layout;
