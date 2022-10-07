import { useLocation } from 'react-router-dom'
import { useState } from 'react'

import Header from 'components/Header'
import ProgressBar from 'components/ProgressBar'

import dataList from 'data/questions.json'
import answerList from 'data/answers.json'

import prevBtn from 'images/icon-back-grey.png'
import nextPrimaryBtn from 'images/icon-back-primary.png'
import styles from './survey.module.scss'

// TODO :: 단답형/복수형 선택 기능, 버튼 Clicked 디자인, footer 버튼 로직 수정, next disable 로직 및 디자인
const Survey = () => {
  const location = useLocation()
  const state = location.state as { title: string; questions: Array<number> }
  const { title, questions } = state
  const questionsLength = questions.length

  const [questionNum, setQuestionNum] = useState(0)
  const currentNum = questions[questionNum]

  const prevBtnClickHandler = () => setQuestionNum((prev) => prev - 1)
  const nextBtnClickHandler = () => setQuestionNum((prev) => prev + 1)

  return (
    <>
      <Header text='' />
      <main>
        <article className={styles.header}>
          <ProgressBar num={questionsLength} />
          <p>{title}</p>
        </article>
        <article className={styles.main}>
          <p className={styles.questionCount}>
            <span>{questionNum + 1}</span>/ {questionsLength}
          </p>
          <p className={styles.question}>{dataList.questions[currentNum].title}</p>
          <div className={styles.answersBtnContainer}>
            {dataList.questions[currentNum].answers.map((answerNum, i) => {
              const key = `answer${i}`
              return (
                <button type='button' key={key}>
                  {answerList.answers[answerNum]}
                </button>
              )
            })}
          </div>
        </article>
      </main>
      <footer className={styles.footer}>
        <button type='button' className={styles.prevBtn} onClick={prevBtnClickHandler}>
          <img src={prevBtn} alt='prev button' />
          이전
        </button>
        <button type='button' className={styles.nextBtn} onClick={nextBtnClickHandler}>
          다음
          <img src={nextPrimaryBtn} alt='next button' />
        </button>
      </footer>
    </>
  )
}

export default Survey
