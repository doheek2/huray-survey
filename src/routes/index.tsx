import { Routes, Route } from 'react-router-dom'

import SurveyForm from './SurveyForm'
import SurveyStart from './SurveyStart'
import Survey from './Survey'
import SurveyFinish from './SurveyFinish'

import styles from './Routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<SurveyForm />} />
          <Route path='surveyStart' element={<SurveyStart />} />
          <Route path='survey' element={<Survey />} />
          <Route path='surveyFinish' element={<SurveyFinish />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
