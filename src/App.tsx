import React from 'react'
import ConstructorContainer from '@components/ConstructorContainer'
import CalculatorDisplay from '@components/Calculator/Display'
import Operators from '@components/Calculator/Operators'
import Numbers from '@components/Calculator/Numbers'

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.wrapper}>
      <main className={styles.app}>
        <div className={styles.app__column}>
          <ConstructorContainer>
            <CalculatorDisplay />
            <Operators />
            <Numbers />
          </ConstructorContainer>
        </div>
        <div className={styles.app__column}>
          <span>2</span>
          <span>3</span>
        </div>
      </main>
    </div>
  )
}

export default App
