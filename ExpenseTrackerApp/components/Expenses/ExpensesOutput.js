import React from 'react'
import { StyleSheet, View } from 'react-native'

import ExpensesList from './ExpensesList'
import ExpensesSummary from './ExpensesSummary'

const DUMMY_EXPENSES = [
  {
    id:'e1',
    description:'A pair of shoes',
    amount: 59.99,
    date: new Date('2021-12-19')
  },
  {
    id:'e2',
    description:'A pair of trousers',
    amount: 89.29,
    date: new Date('2022-01-17')
  },
  {
    id:'e3',
    description:'Some bananas',
    amount: 5.99,
    date: new Date('2022-01-19')
  },
  {
    id:'e4',
    description:'A book',
    amount: 19.99,
    date: new Date('2022-02-11')
  },
  {
    id:'e5',
    description:'A book',
    amount: 22.99,
    date: new Date('2022-02-21')
  }
]

export default function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View>
      <ExpensesSummary period={expensesPeriod} expenses={DUMMY_EXPENSES}/>
      <ExpensesList expenses={DUMMY_EXPENSES}/>
    </View>
  )
}

const styles = StyleSheet.create({})