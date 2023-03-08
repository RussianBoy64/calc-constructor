import React from 'react'
import ItemWrapper, { ItemWrapperLayout } from '../ItemWrapper'

import styles from './styles.module.scss'

export default function CalculatorDisplay() {
  return (
    <ItemWrapper layout={ItemWrapperLayout.oneColumn}>
      <div
        className={styles.display}
        style={{ fontSize: '2.6rem', lineHeight: '3.15rem' }}
      >
        0
      </div>
    </ItemWrapper>
  )
}
