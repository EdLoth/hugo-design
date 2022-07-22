import React from 'react';

import styles from './SectionUno.module.css'

import Header from '../../../components/Header'
import { gql, useQuery } from '@apollo/client';
import { BsSquareFill } from 'react-icons/bs';

const GET_JOB_BY_SLUG = gql`
query GetJobBySlug($slug: String) {
  job(where: {slug: $slug}) {
    images {
      id
      source
    }
    title
    subtitle
    description
  }
}
`

interface imageResponse {
  job: {
    title: string
    subtitle: string
    description: string
    images: {
      id: string
      source: string
    }[]
  }
}

interface slugProps {
  slug: string;
}

function SectionUno(props: slugProps) {
  const { data } = useQuery<imageResponse>(GET_JOB_BY_SLUG, {
    variables: {
      slug: props.slug
    }
  })

  console.log(data)
  console.log(data?.job.images.source)


  if (!data) {
    return (
      <>
        <div className={styles.content}>
          <div className={styles['c-loader']}></div>
        </div>
      </>
    )
  }
  return (
    <>
      return (
      <>
        <div className={styles.contentBrieffing}>
          <div className={styles.containerInfos}>
            <div className={styles.contentTitles}>
              <h1 className={styles.titleProjects}>{data.job.title}<BsSquareFill className={styles.ponto} color={'#E7392C'} /></h1>
              <span className={styles.subtitleProjects}>{data.job.subtitle}</span>
            </div>
            <div className={styles.contentDescription}>
              <p className={styles.description}>
                {data.job.description}
              </p>
            </div>
          </div>
        </div>
        {data.job.images.map(response => {
          return (
            <div key={response.id}>
              <img src={response.source} className="w-full" alt="tst" />
            </div>
          )
        })}
      </>


    </>
  );
}

export default SectionUno;