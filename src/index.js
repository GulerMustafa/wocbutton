import React from 'react'
import styles from './styles.module.css'

export const Button = (props) => {
  // Button selection with entered prop type
  if (props.type === 'primary') {
    return <button className={styles.success}>{props.text}</button>
  } else if (props.type === 'dashed') {
    return <button className={styles.error}>{props.text}</button>
  } else if (props.type === 'text') {
    return <button className={styles.warning}>{props.text}</button>
  } else if (props.type === 'link') {
    return <button className={styles.link}>{props.text}</button>
  } else return <button className={styles.default}>{props.text}</button>
}
