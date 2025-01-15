import { HomeButtonElement } from '@types'

const HomeButtonElements: HomeButtonElement[] = [
  {
    label: '프로그램',
    secondaryLabel: '선택',
    to: '/programs/grade',
    className: 'w-full flex row-span-2 flex-col gap-2 bg-skyblue h-full text-4xl rounded-xl p-4 hover:ring-2 ring-skyblue'
  },
  {
    label: '수업계획서',
    secondaryLabel: '생성',
    to: '/#',
    className: 'w-full bg-btn-green row-span-2 flex flex-col h-full rounded-xl text-2xl p-4 hover:ring-2 ring-btn-green'
  },
  {
    label: '학습지',
    secondaryLabel: '다운로드',
    to: '/#',
    className: 'w-full flex flex-col rounded-xl text-2xl p-4 bg-btn-red hover:ring-2 ring-btn-red'
  },
  {
    label: '학생관리',
    secondaryLabel: '관리',
    to: '/#',
    className: 'w-full flex flex-col rounded-xl text-2xl p-4 bg-btn-yellow hover:ring-2 ring-btn-yellow'
  }
]
export { HomeButtonElements }
