import { Routes, Route } from 'react-router-dom'
import SurveyStart from './SurveyStart'

import styles from './Routes.module.scss'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <div className={styles.app}>
        <Routes>
          <Route path='/' element={<SurveyStart />} />
          <Route path='*' element={<div>404</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App
