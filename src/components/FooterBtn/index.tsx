import { useRecoilState, useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { cloneDeep } from 'lodash'

import { isAnsClickedListState, isAnsClickedState, questionNumState, titleState } from 'store/atom'
import prevBtn from 'images/icon-back-grey.png'
import nextBtn from 'images/icon-next-icon.png'
import nextPrimaryBtn from 'images/icon-back-primary.png'

import questionData from 'data/questions.json'
import answerData from 'data/answers.json'

import styles from './footerBtn.module.scss'

interface IProps {
  type: string
  questionsLength: number
}

const FooterBtn = ({ type, questionsLength }: IProps) => {
  const navigate = useNavigate()
  const title = useRecoilValue(titleState)
  const isAnswersClicked = useRecoilValue(isAnsClickedState)
  const [questionNum, setQuestionNum] = useRecoilState(questionNumState)
  const [isAnsClickedList, setIsAnsClickedList] = useRecoilState(isAnsClickedListState)

  const prevBtnClickHandler = () => {
    if ((type === 'proceeding' && questionNum === 0) || type === 'finish') {
      navigate(-1)
    }
    if ((type === 'proceeding' && questionNum !== 0) || type === 'finish') {
      setQuestionNum((prev) => prev - 1)
    }
  }

  const nextBtnClickHandler = () => {
    if (type === 'proceeding') {
      if (questionNum === questionsLength - 1) navigate('/surveyFinish')

      const copyObj = cloneDeep(isAnsClickedList)
      copyObj[questionNum].selectedAns = isAnswersClicked
      setIsAnsClickedList(copyObj)

      setQuestionNum((prev) => prev + 1)
    } else {
      let text = ''
      isAnsClickedList.forEach((ansClicked, index) => {
        const question = questionData.questions[ansClicked.questionNm]
        text += `\n${index + 1}. ${question.title}`
        ansClicked.selectedAns.forEach((isSelectedAns, i) => {
          if (isSelectedAns === true) {
            const a = question.answers[i]
            text += `\n- ${answerData.answers[a]}`
          }
        })
      })
      // eslint-disable-next-line no-alert
      alert(`<<${title}에 대한 설문 결과>>${text}`)
    }
  }

  const nextBtnChangeHandler = () => {
    if (isAnswersClicked.includes(true)) {
      return (
        <button type='button' className={styles.nextPrimaryBtn} onClick={nextBtnClickHandler}>
          다음
          <img src={nextPrimaryBtn} alt='next button' />
        </button>
      )
    }
    return (
      <button type='button' className={styles.nextBtn} onClick={nextBtnClickHandler} disabled>
        다음
        <img src={nextBtn} alt='next button' />
      </button>
    )
  }

  return (
    <footer className={styles.footer}>
      <button type='button' className={styles.prevBtn} onClick={prevBtnClickHandler}>
        <img src={prevBtn} alt='prev button' />
        이전
      </button>
      {nextBtnChangeHandler()}
    </footer>
  )
}

export default FooterBtn
