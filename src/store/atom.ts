import { atom } from 'recoil'
import { IisAnsClickedList } from 'types/survey'

export const titleState = atom<string>({
  key: 'titleState',
  default: '',
})

export const questionNumState = atom<number>({
  key: 'questionNumState',
  default: 0,
})

export const isAnsClickedState = atom<boolean[]>({
  key: 'isAnsClickedState',
  default: [false],
})

export const isAnsClickedListState = atom<IisAnsClickedList>({
  key: 'isAnsClickedListState',
  default: [],
})
