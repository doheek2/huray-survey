# π ν΄λ μ΄ν¬μ§ν°λΈ κΈ°μ κ³Όμ 
<img src="https://user-images.githubusercontent.com/97458345/194878946-5adc34f2-ff44-42b0-9eed-7a30312558ae.jpg">
π ν΄λ μ΄ν¬μ§ν°λΈ μ€λ¬Έ WebApp

- **Github Repository URL** <br/> https://github.com/doheek2/huray-survey
- **λ°°ν¬ URL** <br/> https://huray-survey.netlify.app

<br/>

# μ€ν λ°©λ²
>1. git clone https://github.com/doheek2/huray-survey.git
>2. cd huray-survey
>3. yarn install
>4. yarn start

<br/>

# π νλ‘μ νΈ μκ°
- **κ°λ° κΈ°κ°** 22.10.06 - 22.10.11
- **νλ‘μ νΈ κ°μ** <br/>
λ³Έ νλ‘μ νΈλ ν΄λ μ΄ν¬μ§ν°λΈ κ³Όμ λ‘, JSONμ νμ©ν΄ μ€λ¬Έ WebAppμ κ΅¬νν νλ‘μ νΈμλλ€.


<br/>

# π ν΄λ κ΅¬μ‘°
<details>
    <summary>νΌμΉκΈ°</summary>
ββ src<br/>
β  ββ index.tsx<br/>
β  ββ logo.svg<br/>
β  ββ react-app-env.d.ts<br/>
β  ββ reportWebVitals.ts<br/>
β  ββ routes<br/>
β  β  ββ SurveyStart<br/>
β  β  β  ββ index.tsx<br/>
β  β  β  ββ surveyStart.module.scss<br/>
β  β  ββ Routes.module.scss<br/>
β  β  ββ index.tsx<br/>
β  β  ββ SurveyForm<br/>
β  β  β  ββ index.tsx<br/>
β  β  β  ββ surveyForm.module.scss<br/>
β  β  ββ Survey<br/>
β  β  β  ββ index.tsx<br/>
β  β  β  ββ survey.module.scss<br/>
β  β  ββ SurveyFinish<br/>
β  β     ββ index.tsx<br/>
β  β     ββ surveyFinish.module.scss<br/>
β  ββ setupTests.ts<br/>
β  ββ styles<br/>
β  β  ββ base<br/>
β  β  β  ββ _fonts.scss<br/>
β  β  β  ββ _more.scss<br/>
β  β  β  ββ _reset.scss<br/>
β  β  ββ constants<br/>
β  β  β  ββ _colors.scss<br/>
β  β  ββ index.js<br/>
β  β  ββ index.scss<br/>
β  β  ββ fonts<br/>
β  β     ββ NotoSansKR-Bold.otf<br/>
β  β     ββ NotoSansKR-Light.otf<br/>
β  β     ββ NotoSansKR-Medium.otf<br/>
β  β     ββ NotoSansKR-Regular.otf<br/>
β  β     ββ NotoSansKR-Thin.otf<br/>
β  ββ data<br/>
β  β  ββ answers.json<br/>
β  β  ββ questions.json<br/>
β  β  ββ surveys.json<br/>
β  ββ components<br/>
β  β  ββ Header<br/>
β  β  β  ββ index.tsx<br/>
β  β  β  ββ header.module.scss<br/>
β  β  ββ ProgressBar<br/>
β  β  β  ββ index.tsx<br/>
β  β  β  ββ progressBar.module.scss<br/>
β  β  ββ FooterBtn<br/>
β  β     ββ index.tsx<br/>
β  β     ββ footerBtn.module.scss<br/>
β  ββ images<br/>
β  β  ββ image-survey.png<br/>
β  β  ββ image-survey-done.png<br/>
β  β  ββ icon-back-black.png<br/>
β  β  ββ icon-back-grey.png<br/>
β  β  ββ icon-back-primary.png<br/>
β  β  ββ icon-next-icon.png<br/>
β  ββ store<br/>
β  β  ββ atom.ts<br/>
β  ββ types<br/>
β     ββ survey.d.ts<br/>
ββ tsconfig.json<br/>
ββ yarn.lock<br/>
</details>

<br/>

# π¨ κΈ°μ  μ€ν
<div align="center">
 <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
 <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
 <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
 <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
 <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
 <img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Recoil&logoColor=white"/>

 <br/>

|λΌμ΄λΈλ¬λ¦¬|λ΄μ©|λ²μ |
|:---:|:---:|:---:|
| classnames | styles κ΄λ ¨ | 2.3.1 |
| lodash | μλ°μ€ν¬λ¦½νΈ νΈμ | 4.17.21 |
| react-router-dom | route νΈμ | 6 |

<br/>

</div>

# π κΈ°λ₯ μ€λͺ

### 'μ΄κΈ° μ λ³΄ μλ ₯' νλ©΄

<img src="https://user-images.githubusercontent.com/97458345/194881516-1fb6ec14-1bf3-4973-9563-707de6697a28.jpg">

<br/>

### idμ μ΄λ¦ GET λ°©μμΌλ‘ μ λ¬

<details>
    <summary>κ΅¬ν λ°©λ²</summary>

1. inputμ μλ ₯λ κ°μ μ μ₯νλ stateμ button list μ€ μ νλ κ°μ μ μ₯νλ stateλ₯Ό μμ±ν©λλ€.
```ts
const navigate = useNavigate()
const [inputValue, setInputValue] = useState('')
const [isBtnClickedList, setIsBtnClickedList] = useState([true, false, false])
```
2. input κ°μ΄ λ°λ λλ§λ€ inputValueμ κ°μ΄ μ μ₯λ©λλ€.
```ts
const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  const { value } = e.currentTarget
  //...μλ΅
  setInputValue(value)
}
```
3. buttonμ΄ ν΄λ¦­λ  λλ§λ€ λ³΅μ μ νμ΄ μλ λ¨μ μ νμ΄ λ  μ μλλ‘ νμ¬ booleanμ΄ λ΄κΈ΄ λ°°μ΄μ μ μ₯ν©λλ€.
```ts
const btnListClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
  const value = Number(e.currentTarget.value)
  const tmpArr = Array(dataList.surveys.length).fill(false)
  tmpArr[value] = true
  setIsBtnClickedList(tmpArr)
}
```
4. μ¬μ©μκ° formμ λ€ μμ±νκ³  μλ£ λ²νΌμ ν΄λ¦­νλ©΄ isBtnClickedList λ°°μ΄μμ trueμΈ μμμ indexκ°μ μ»κ³  κ·Έ κ°μ idλ‘ μ§μ νκ³ , nameμ inputμ μμ±λ κ°μΌλ‘ μ§μ νμ¬ navigateλ₯Ό ν΅ν΄ URL Queryμ λνλκ² ν©λλ€.
```ts
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
```
</details>

<br/>

### 'μ€λ¬Έ μ‘°μ¬ μμ' νλ©΄

<img src="https://user-images.githubusercontent.com/97458345/194878946-5adc34f2-ff44-42b0-9eed-7a30312558ae.jpg">

<br/>

### 'μ€λ¬Έ μ‘°μ¬' νλ©΄

<img src="https://user-images.githubusercontent.com/97458345/194885794-54f11259-aa4a-42da-88a5-f440b77fca42.jpg">

<br/>

### λ¨μ/λ³΅μν μ€λ¬Έ λ²νΌ

<details>
    <summary>κ΅¬ν λ°©λ²</summary>

1. button list μ€ μ νλ κ°μ μ μ₯νλ stateλ₯Ό μμ±ν©λλ€.
```ts
const [isAnswersClicked, setIsAnswersClicked] = useRecoilState(isAnsClickedState)
```
2. λ¨μνμΈ κ²½μ° buttonμ΄ ν΄λ¦­λ  λλ§λ€ answers κΈΈμ΄λ§νΌμ falseκ° λ΄κ²¨μλ λ°°μ΄μ μμ±νκ³  index μμΉμ λ°°μ΄ μμλ§ trueλ‘ μ§μ ν©λλ€. λ³΅μνμΈ κ²½μ° index μμΉμ λ°°μ΄ μμλ₯Ό trueλ‘ λ³κ²½ν©λλ€. λ¨μ/λ³΅μν μκ΄ μμ΄ μ νλμ΄ μλ buttonμ ν΄λ¦­νλ©΄ λ°°μ΄μ μμκ° λͺ¨λ falseλ‘ λ³κ²½λ©λλ€.
```ts
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
```
</details>

<br/>

### Progress Bar

<details>
    <summary>κ΅¬ν λ°©λ²</summary>

1. μ΄ μ§λ¬Έ κ°―μλ₯Ό λ΄κ³  μλ questionCountμ νμ¬ μ§λ¬Έ μμΉλ₯Ό λ΄κ³  μλ progressNumλ₯Ό propsλ‘ κ°μ Έμ΅λλ€.
```ts
const ProgressBar = ({ questionCount, progressNum }: IProps) => {
  //...μλ΅
}
```
2. μ΄ μ§λ¬Έ κ°―μλ§νΌ λ°λ³΅λ¬Έμ μ¬μ©νκΈ° μν΄ μμλ‘ λ°°μ΄μ μμ±ν©λλ€.
```ts
const arr = Array(questionCount - 1).fill(0)
```
3. map()μ μ΄μ©ν΄ progressNumμ΄ i + 1λ³΄λ€ ν¬κ±°λ κ°μΌλ©΄ μμ± μλ£λλ€λ μ€νμΌ(λΈλμ)μ μ μ©ν΄μ£Όκ³ , κ·Έλ μ§ μμΌλ©΄ μμ±μ΄ λμ§ μμλ€λ μ€νμΌ(νμ)μ μ μ©ν©λλ€. μ§μ μ κΈΈμ΄λ μ΄ μ§λ¬Έ κ°―μλ₯Ό 100%μμ λλ  μ μ©ν©λλ€.
```ts
<div className={cx(styles.dot, styles.completionDot)} />
{arr.map((_, i) => {
  const key = `progress${i}`
  if (i + 1 <= progressNum) {
    return (
      <Fragment key={key}>
        <div
          className={cx(styles.line, styles.completionLine)}
          style={{ width: `calc(100% / ${questionCount})` }}
        />
        <div className={cx(styles.dot, styles.completionDot)} />
      </Fragment>
    )
  }
  return (
    <Fragment key={key}>
      <div className={cx(styles.line, styles.progressLine)} style={{ width: `calc(100% / ${questionCount})` }} />
      <div className={cx(styles.dot, styles.progressDot)} />
    </Fragment>
  )
})}
```
</details>

<br/>

### 'μ€λ¬Έ μ‘°μ¬ κ²°κ³Ό' νλ©΄

<img src="https://user-images.githubusercontent.com/97458345/194893258-abcc1deb-6c3c-42be-8209-d369c4775355.jpg">
<img src="https://user-images.githubusercontent.com/97458345/194893619-6ffb9f6e-4386-494b-b3a5-849301a92ee3.jpg">