import { createSearchParams, useNavigate } from 'react-router-dom'
import { FormEvent, ChangeEvent, MouseEvent, useEffect, useMemo, useState } from 'react'
import cx from 'classnames'

import dataList from 'data/surveys.json'
import styles from './surveyForm.module.scss'

const SurveyForm = () => {
  const navigate = useNavigate()
  const regex = useMemo(() => /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣]{2,10}$/, [])
  const [isShowText, setIsShowText] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [isBtnClickedList, setIsBtnClickedList] = useState([true, false, false])
  const [isShowBtn, setIsShowBtn] = useState(false)

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = String(isBtnClickedList.findIndex((v: boolean) => v === true))
    navigate({
      pathname: 'surveyStart',
      search: createSearchParams({
        id,
        name: inputValue,
      }).toString(),
    })
  }

  const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget

    if (regex.test(value) || value === '') setIsShowText(false)
    else if (!regex.test(value)) setIsShowText(true)
    setInputValue(value)
  }

  const btnListClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const value = Number(e.currentTarget.value)
    const tmpArr = Array(dataList.surveys.length).fill(false)
    tmpArr[value] = true
    setIsBtnClickedList(tmpArr)
  }

  useEffect(() => {
    if (isBtnClickedList.includes(true) && regex.test(inputValue)) {
      setIsShowBtn(true)
    } else {
      setIsShowBtn(false)
    }
  }, [inputValue, isBtnClickedList, isShowText, regex])

  return (
    <form onSubmit={formSubmitHandler}>
      <article className={styles.mainContainer}>
        <div className={styles.nameContainer}>
          <label htmlFor='name'>이름</label>
          <input type='text' id='name' min='2' max='10' value={inputValue} onChange={inputChangeHandler} />
          {isShowText && <p>2-10자 내외로 작성해주세요.</p>}
        </div>
        <div className={styles.btnListContainer}>
          <p>아래 항목 중 1개를 골라주세요.</p>
          {dataList.surveys.map((data, i) => {
            const key = `survey${i}`
            return (
              <button
                key={key}
                type='button'
                value={i}
                className={cx(isBtnClickedList[i] && styles.selectedBtn)}
                onClick={btnListClickHandler}
              >
                {data.title}
              </button>
            )
          })}
        </div>
      </article>
      <article className={styles.footerContainer}>{isShowBtn && <button type='submit'>등록하기</button>}</article>
    </form>
  )
}

export default SurveyForm
