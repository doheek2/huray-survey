import { useNavigate } from 'react-router-dom'
import BackIcon from 'images/icon-back-black.png'
import styles from './header.module.scss'

interface IProps {
  text: string
}
const Header = ({ text }: IProps) => {
  const navigate = useNavigate()
  const btnClickHandler = () => {
    if (text === '') navigate(-1)
  }

  return (
    <header className={styles.header}>
      <button type='button' onClick={btnClickHandler}>
        <img src={BackIcon} alt='back button' />
      </button>
      <span>{text}</span>
    </header>
  )
}

export default Header
