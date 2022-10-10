import { useLocation } from 'react-router-dom'
import { MouseEvent, useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import cx from 'classnames'

import Header from 'components/Header'
import ProgressBar from 'components/ProgressBar'
import FooterBtn from 'components/FooterBtn'

import { isAnsClickedState, questionNumState, titleState } from 'store/atom'
import questionData from 'data/questions.json'
import answerData from 'data/answers.json'

import styles from './survey.module.scss'

const Survey = () => {
  const location = useLocation()

  const state = location.state as { questions: Array<number> }
  const { questions } = state

  const title = useRecoilValue(titleState)
  const questionNum = useRecoilValue(questionNumState)
  const [isAnswersClicked, setIsAnswersClicked] = useRecoilState(isAnsClickedState)

  const currentNum = questions[questionNum]
  const currenData = questionData.questions[currentNum]

  const answerBtnClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const index = Number(e.currentTarget.value)
    let arr = []

    if (isAnswersClicked[index] || currenData.mode === 0) {
      arr = Array(currenData.answers.length).fill(false)
    } else {
      arr = [...isAnswersClicked]
    }

    if (!isAnswersClicked[index]) arr[index] = true
    setIsAnswersClicked(arr)
  }

  useEffect(() => {
    const arr = Array(currenData.answers.length).fill(false)
    setIsAnswersClicked(arr)
  }, [currenData.answers.length, setIsAnswersClicked])

  return (
    <>
      <Header text='' />
      <main>
        <article className={styles.header}>
          <ProgressBar questionCount={questions.length} progressNum={questionNum} />
          <p>{title}</p>
        </article>
        <article className={styles.main}>
          <p className={styles.questionCount}>
            <span>{questionNum + 1}</span>/ {questions.length}
          </p>
          <p className={styles.question}>{questionData.questions[currentNum].title}</p>
          <div className={styles.answersBtnContainer}>
            {currenData.answers.map((answerNum, i) => {
              const key = `answer${i}`
              return (
                <button
                  type='button'
                  key={key}
                  value={i}
                  className={cx(isAnswersClicked[i] && styles.clicked)}
                  onClick={answerBtnClickHandler}
                >
                  {answerData.answers[answerNum]}
                </button>
              )
            })}
          </div>
        </article>
      </main>
      <FooterBtn type='proceeding' questionsLength={questions.length} />
    </>
  )
}

export default Survey
