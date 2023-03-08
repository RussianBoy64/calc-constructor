import React, { ReactNode } from 'react'

import styles from './styles.module.scss'

export enum ItemWrapperLayout {
  oneColumn,
  threeColumns,
  fourColumns,
}

interface ItemWrapperProps {
  layout: ItemWrapperLayout
  children: ReactNode
}

export default function ItemWrapper({ layout, children }: ItemWrapperProps) {
  const itemWrapperStyles = [styles.itemWrapper]

  switch (layout) {
    case ItemWrapperLayout.oneColumn:
      itemWrapperStyles.push(styles.itemWrapper_oneColumn)
      break
    case ItemWrapperLayout.threeColumns:
      itemWrapperStyles.push(styles.itemWrapper_threeColumns)
      break
    case ItemWrapperLayout.fourColumns:
      itemWrapperStyles.push(styles.itemWrapper_fourColumns)
      break
    default:
      break
  }

  return <div className={itemWrapperStyles.join(' ')}>{children}</div>
}
