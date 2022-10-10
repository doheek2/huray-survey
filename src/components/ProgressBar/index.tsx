import { Fragment } from 'react'
import cx from 'classnames'

import styles from './progressBar.module.scss'

interface IProps {
  questionCount: number
  progressNum: number
}

const ProgressBar = ({ questionCount, progressNum }: IProps) => {
  const arr = Array(questionCount - 1).fill(0)

  return (
    <div className={styles.container}>
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
    </div>
  )
}

export default ProgressBar
