import React from 'react'
import ItemWrapper from '../ItemWrapper'

import styles from './styles.module.scss'

export default function CalculatorDisplay() {
  return (
    <ItemWrapper>
      <div
        className={styles.display}
        style={{ fontSize: '2.6rem', lineHeight: '3.15rem' }}
      >
        0
      </div>
    </ItemWrapper>
  )
}
