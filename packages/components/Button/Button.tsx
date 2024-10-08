import { useState } from 'react'
import styles from './Button.module.css'
import { ButtonProps } from './types'

const Button = (props: ButtonProps) => {
  const [count, setCount] = useState(0)

  return (
    <button
      onClick={() => {
        props.onClick?.()
        setCount(count + 1)
      }}
      className={styles.custom}
    >
      Clicked {count} times!!!
    </button>
  )
}

export default Button
