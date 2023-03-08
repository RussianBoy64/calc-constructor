import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

interface ItemWrapperProps {
  children: ReactNode
}

export default function ItemWrapper({ children }: ItemWrapperProps) {
  return <div className={styles.itemWrapper}>{children}</div>
}
