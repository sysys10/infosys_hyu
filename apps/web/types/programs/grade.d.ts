type GradeCategoriesType = '전체' | '1학년' | '2학년' | '3학년' | '4학년' | '5학년' | '6학년'

interface SubjectType {
  id: string
  title: string
  imgSrc: string
  grade: string[]
  class: string[]
  theme: string[]
  syllabus: string | null
}

export type { GradeCategoriesType, SubjectType }
