import styles from './progressBar.module.scss'
import cx from 'classnames'

interface IProps {
  num: number
}
const ProgressBar = ({ num }: IProps) => {
  return (
    <div className={styles.container}>
      <div className={cx(styles.dot, styles.completionDot)} />
      <div className={cx(styles.line, styles.completionLine)} style={{ width: `calc(100% / ${num})` }} />
      <div className={cx(styles.dot, styles.completionDot)} />
      <div className={cx(styles.line, styles.progressLine)} style={{ width: `calc(100% / ${num})` }} />
      <div className={cx(styles.dot, styles.progressDot)} />
    </div>
  )
}

export default ProgressBar
