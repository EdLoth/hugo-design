import React from 'react';

import styles from './Home.module.css';

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import SectionDue from './Sections/SectionDue'
import SectionTrei from './Sections/SectionTrei'
import SectionUno from './Sections/SectionUno'
import { BackToTop } from '../../components/BackToTop';

export default function Home() {
  return (
    <>
      <Header />
      <BackToTop />
      <SectionUno />
      <SectionDue />
      <SectionTrei />
      <Footer />
    </>
  )
}
