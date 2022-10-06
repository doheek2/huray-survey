import SurveyImage from 'images/image-survey.png'
import Header from 'components/Header'
import styles from './main.module.scss'

const Main = () => {
  return (
    <>
      <Header text='기초설문' />
      <main className={styles.mainContainer}>
        <article>
          <p className={styles.firstText}>
            나쁜 생활습관을 바로 잡으면 <br /> 건강이 개선됩니다.
          </p>
          <p className={styles.lastText}>
            설문을 통해 나의 건강 상태를 확인하고, <br />
            개선할 습관이 무엇인지 알아보아요! <br />
            결과에 따라 나만의 관리 목표를 설정하면 <br />
            헬스매니저가 $이름$님께 맞는 <br />
            건강관리 서비스를 제공합니다.
          </p>
        </article>
        <img src={SurveyImage} alt='survey' />
      </main>
      <footer className={styles.footerContainer}>
        <p>
          설문은 총 <span>22문항</span>입니다.
        </p>
        <button type='button'>설문 시작</button>
      </footer>
    </>
  )
}

export default Main
