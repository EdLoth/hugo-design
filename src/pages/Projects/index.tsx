import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header'
import SectionDue from './SectionDue';
import SectionUno from './SectionUno'




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