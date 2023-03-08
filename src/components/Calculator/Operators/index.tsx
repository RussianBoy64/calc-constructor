import React from 'react'
import ItemWrapper, {
  ItemWrapperLayout,
} from '@components/Calculator/ItemWrapper'
import Button from '@components/Calculator/Button/Index'
import { OPERATORS_ARRAY } from '@src/constants/calculatorConstants'

export default function Operators() {
  return (
    <ItemWrapper layout={ItemWrapperLayout.fourColumns}>
      {OPERATORS_ARRAY.map((operator) => (
        <Button key={operator}>{operator}</Button>
      ))}
    </ItemWrapper>
  )
}
