import React from 'react'
import ItemWrapper, {
  ItemWrapperLayout,
} from '@components/Calculator/ItemWrapper'
import Button from '@components/Calculator/Button/Index'
import { NUMBERS_ARRAY } from '@src/constants/calculatorConstants'

export default function Numbers() {
  return (
    <ItemWrapper layout={ItemWrapperLayout.threeColumns}>
      {NUMBERS_ARRAY.map((number) => (
        <Button key={number}>{number}</Button>
      ))}
    </ItemWrapper>
  )
}
