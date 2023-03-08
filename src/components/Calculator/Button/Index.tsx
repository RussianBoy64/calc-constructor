import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

interface ButtonProps {
  children: ReactNode
}

export default function Button({ children }: ButtonProps) {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  )
}
