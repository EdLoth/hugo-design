import styles from './SectionUno.module.css'
import { BsSquareFill } from 'react-icons/bs';
import { useGetJobBySlugQuery } from '../../../graphql/generated';



interface slugProps {
  slug: string;
}

function SectionUno(props: slugProps) {
  const { data } = useGetJobBySlugQuery({
    variables: {
      slug: props.slug
    }
  })

  console.log(data)


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

  );
}

export default SectionUno;