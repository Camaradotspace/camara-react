import React from 'react'
import styles from './styles.module.css'

interface Props {
  text: string
}

const ExampleComponent = ({ text }: Props) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export default ExampleComponent