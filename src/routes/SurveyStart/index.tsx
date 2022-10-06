import dataList from 'data/surveys.json'
import styles from './surveyStart.module.scss'

// TODO :: 이름 2-10자 조건, button list 디자인, 그 외 디자인
const SurveyStart = () => {
  return (
    <form>
      <article className={styles.mainContainer}>
        <div>
          <label htmlFor='name'>이름</label>
          <input type='text' id='name' min='2' max='10' />
          <p>2-10자 내외로 작성해주세요.</p>
        </div>
        <div className={styles.btnListContainer}>
          <p>아래 항목 중 1개를 골라주세요.</p>
          {dataList.surveys.map((data, i) => {
            const key = `survey${i}`
            return (
              <button key={key} type='button'>
                {data.title}
              </button>
            )
          })}
        </div>
      </article>
      <article className={styles.footerContainer}>
        <button type='submit'>등록하기</button>
      </article>
    </form>
  )
}

export default SurveyStart
