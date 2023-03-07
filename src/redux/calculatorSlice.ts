import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CalculatorState {
  firstOperand: number
  secondOperand: number
  sign: string
  isFinished: boolean
  result: number
}

const initialState: CalculatorState = {
  firstOperand: 0,
  secondOperand: 0,
  sign: '',
  isFinished: false,
  result: 0,
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    increment: (state) => ({
      ...state,
    }),
    decrement: (state) => ({
      ...state,
    }),
    incrementByAmount: (state, action: PayloadAction<number>) => ({
      ...state,
      firstOperand: action.payload,
    }),
  },
})

export const { increment, decrement, incrementByAmount } =
  calculatorSlice.actions

export default calculatorSlice.reducer
