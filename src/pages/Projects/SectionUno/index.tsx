import React from 'react';

import styles from './SectionUno.module.css'

import Header from '../../../components/Header'
import { gql, useQuery } from '@apollo/client';

const GET_IMAGE = gql`
query MyQuery($slug: String) {
  job(where: {slug: $slug}) {
    images {
      id
      source
    }
  }
}
`

interface imageResponse {
  job: {
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
  const { data } = useQuery<imageResponse>(GET_IMAGE, {
    variables: {
      slug: props.slug
    }
  })

  console.log(data)

  if (!data) {
    return (
      <>
        <Header />
        <div className={styles.content}>
          <div className={styles['c-loader']}></div>
        </div>
      </>
    )
  }
  return (
    <>
      <Header />
      {data.job.images.map(response => {
        return (
          <div key={response.id}>
            <img src={response.source} className="w-full" alt="tst" />
          </div>
        )
      })}


    </>
  );
}

export default SectionUno;