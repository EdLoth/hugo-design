import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './Projects.module.css'

import Header from '../../components/Header'
import SectionDue from './SectionDue';
import SectionUno from './SectionUno'
import { BsSquareFill } from 'react-icons/bs';




function Projects() {
  const { slug } = useParams<{ slug: string }>()
  return (
    <>
    <Header />

    {slug ?
       <SectionUno slug={slug} />: 
       <div className="flex-1 " />
       } 
    
    </>
  );
}

export default Projects;