# 🎉 휴레이포지티브 기업 과제
<img src="https://user-images.githubusercontent.com/97458345/194878946-5adc34f2-ff44-42b0-9eed-7a30312558ae.jpg">
🍀 휴레이포지티브 설문 WebApp

- **Github Repository URL** <br/> https://github.com/doheek2/huray-survey
- **배포 URL** <br/> https://huray-survey.netlify.app

<br/>

# 실행 방법
>1. git clone https://github.com/doheek2/huray-survey.git
>2. cd huray-survey
>3. yarn install
>4. yarn start

<br/>

# 🗂 프로젝트 소개
- **개발 기간** 22.10.06 - 22.10.11
- **프로젝트 개요** <br/>
본 프로젝트는 휴레이포지티브 과제로, JSON을 활용해 설문 WebApp을 구현한 프로젝트입니다.


<br/>

# 📁 폴더 구조
<details>
    <summary>펼치기</summary>
├─ src<br/>
│  ├─ index.tsx<br/>
│  ├─ logo.svg<br/>
│  ├─ react-app-env.d.ts<br/>
│  ├─ reportWebVitals.ts<br/>
│  ├─ routes<br/>
│  │  ├─ SurveyStart<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ surveyStart.module.scss<br/>
│  │  ├─ Routes.module.scss<br/>
│  │  ├─ index.tsx<br/>
│  │  ├─ SurveyForm<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ surveyForm.module.scss<br/>
│  │  ├─ Survey<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ survey.module.scss<br/>
│  │  └─ SurveyFinish<br/>
│  │     ├─ index.tsx<br/>
│  │     └─ surveyFinish.module.scss<br/>
│  ├─ setupTests.ts<br/>
│  ├─ styles<br/>
│  │  ├─ base<br/>
│  │  │  ├─ _fonts.scss<br/>
│  │  │  ├─ _more.scss<br/>
│  │  │  └─ _reset.scss<br/>
│  │  ├─ constants<br/>
│  │  │  └─ _colors.scss<br/>
│  │  ├─ index.js<br/>
│  │  ├─ index.scss<br/>
│  │  └─ fonts<br/>
│  │     ├─ NotoSansKR-Bold.otf<br/>
│  │     ├─ NotoSansKR-Light.otf<br/>
│  │     ├─ NotoSansKR-Medium.otf<br/>
│  │     ├─ NotoSansKR-Regular.otf<br/>
│  │     └─ NotoSansKR-Thin.otf<br/>
│  ├─ data<br/>
│  │  ├─ answers.json<br/>
│  │  ├─ questions.json<br/>
│  │  └─ surveys.json<br/>
│  ├─ components<br/>
│  │  ├─ Header<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ header.module.scss<br/>
│  │  ├─ ProgressBar<br/>
│  │  │  ├─ index.tsx<br/>
│  │  │  └─ progressBar.module.scss<br/>
│  │  └─ FooterBtn<br/>
│  │     ├─ index.tsx<br/>
│  │     └─ footerBtn.module.scss<br/>
│  ├─ images<br/>
│  │  ├─ image-survey.png<br/>
│  │  ├─ image-survey-done.png<br/>
│  │  ├─ icon-back-black.png<br/>
│  │  ├─ icon-back-grey.png<br/>
│  │  ├─ icon-back-primary.png<br/>
│  │  └─ icon-next-icon.png<br/>
│  ├─ store<br/>
│  │  └─ atom.ts<br/>
│  └─ types<br/>
│     └─ survey.d.ts<br/>
├─ tsconfig.json<br/>
└─ yarn.lock<br/>
</details>

<br/>

# 🔨 기술 스택
<div align="center">
 <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
 <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
 <img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white"/>
 <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
 <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
 <img src="https://img.shields.io/badge/Recoil-764ABC?style=flat-square&logo=Recoil&logoColor=white"/>

 <br/>

|라이브러리|내용|버전|
|:---:|:---:|:---:|
| classnames | styles 관련 | 2.3.1 |
| lodash | 자바스크립트 편의 | 4.17.21 |
| react-router-dom | route 편의 | 6 |

<br/>

</div>

# 🏞 기능 설명

### '초기 정보 입력' 화면

<img src="https://user-images.githubusercontent.com/97458345/194881516-1fb6ec14-1bf3-4973-9563-707de6697a28.jpg">

<br/>

### id와 이름 GET 방식으로 전달

<details>
    <summary>구현 방법</summary>

1. input에 입력된 값을 저장하는 state와 button list 중 선택된 값을 저장하는 state를 생성합니다.
```ts
const navigate = useNavigate()
const [inputValue, setInputValue] = useState('')
const [isBtnClickedList, setIsBtnClickedList] = useState([true, false, false])
```
2. input 값이 바뀔 때마다 inputValue에 값이 저장됩니다.
```ts
const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
  const { value } = e.currentTarget
  //...생략
  setInputValue(value)
}
```
3. button이 클릭될 때마다 복수 선택이 아닌 단수 선택이 될 수 있도록 하여 boolean이 담긴 배열을 저장합니다.
```ts
const btnListClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
  const value = Number(e.currentTarget.value)
  const tmpArr = Array(dataList.surveys.length).fill(false)
  tmpArr[value] = true
  setIsBtnClickedList(tmpArr)
}
```
4. 사용자가 form을 다 작성하고 완료 버튼을 클릭하면 isBtnClickedList 배열에서 true인 원소의 index값을 얻고 그 값을 id로 지정하고, name은 input에 작성된 값으로 지정하여 navigate를 통해 URL Query에 나타나게 합니다.
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

### '설문 조사 시작' 화면

<img src="https://user-images.githubusercontent.com/97458345/194878946-5adc34f2-ff44-42b0-9eed-7a30312558ae.jpg">

<br/>

### '설문 조사' 화면

<img src="https://user-images.githubusercontent.com/97458345/194885794-54f11259-aa4a-42da-88a5-f440b77fca42.jpg">

<br/>

### 단수/복수형 설문 버튼

<details>
    <summary>구현 방법</summary>

1. button list 중 선택된 값을 저장하는 state를 생성합니다.
```ts
const [isAnswersClicked, setIsAnswersClicked] = useRecoilState(isAnsClickedState)
```
2. 단수형인 경우 button이 클릭될 때마다 answers 길이만큼의 false가 담겨있는 배열을 생성하고 index 위치의 배열 원소만 true로 지정합니다. 복수형인 경우 index 위치의 배열 원소를 true로 변경합니다. 단수/복수형 상관 없이 선택되어 있는 button을 클릭하면 배열의 원소가 모두 false로 변경됩니다.
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
    <summary>구현 방법</summary>

1. 총 질문 갯수를 담고 있는 questionCount와 현재 질문 위치를 담고 있는 progressNum를 props로 가져옵니다.
```ts
const ProgressBar = ({ questionCount, progressNum }: IProps) => {
  //...생략
}
```
2. 총 질문 갯수만큼 반복문을 사용하기 위해 임의로 배열을 생성합니다.
```ts
const arr = Array(questionCount - 1).fill(0)
```
3. map()을 이용해 progressNum이 i + 1보다 크거나 같으면 작성 완료됐다는 스타일(노란색)을 적용해주고, 그렇지 않으면 작성이 되지 않았다는 스타일(회색)을 적용합니다. 직선의 길이는 총 질문 갯수를 100%에서 나눠 적용합니다.
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

### '설문 조사 결과' 화면

<img src="https://user-images.githubusercontent.com/97458345/194893258-abcc1deb-6c3c-42be-8209-d369c4775355.jpg">
<img src="https://user-images.githubusercontent.com/97458345/194893619-6ffb9f6e-4386-494b-b3a5-849301a92ee3.jpg">