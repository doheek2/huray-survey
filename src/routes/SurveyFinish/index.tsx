import { useRecoilValue } from 'recoil'

import FooterBtn from 'components/FooterBtn'
import { titleState } from 'store/atom'

import doneImage from 'images/image-survey-done.png'
import styles from './surveyFinish.module.scss'

const SurveyFinish = () => {
  const title = useRecoilValue(titleState)
  return (
    <main>
      <section className={styles.finishContainer}>
        <img src={doneImage} alt='done' />
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>평가설문이 끝났습니다.</p>
      </section>
      <FooterBtn type='finish' questionsLength={-1} />
    </main>
  )
}

export default SurveyFinish
