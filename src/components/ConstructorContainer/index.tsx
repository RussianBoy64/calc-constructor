import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

interface ConstructorContainerProps {
  children: ReactNode
}

export default function ConstructorContainer({
  children,
}: ConstructorContainerProps) {
  return <div className={styles.constructorContainer}>{children}</div>
}
