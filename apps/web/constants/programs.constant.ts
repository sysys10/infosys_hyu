import { ClassItemType, GradeCategoriesType, ProgramNavigationBarItemType, SubjectType } from '@types'

const ProgramNavigationBarList: ProgramNavigationBarItemType[] = [
  {
    label: '학년별',
    value: 'grade',
    to: '/programs/grade'
  },
  {
    label: '수업별',
    value: 'class',
    to: '/programs/class'
  },
  {
    label: '주제별',
    value: 'theme',
    to: '/programs/theme'
  }
]

const gradeCategories: GradeCategoriesType[] = ['전체', '1학년', '2학년', '3학년', '4학년', '5학년', '6학년']

const TempClasses: ClassItemType[] = [
  {
    id: '12656532-bf48-4bc1-ba0d-2f3faf4fe1c0',
    subject_id: '3b0b8baa-35d3-4087-9fea-54864e655e4f',
    order_num: 5,
    url: '<iframe class="w-screen h-screen" src="https://sapiens-school.onrender.com/#/maria"></iframe>',
    handout: null,
    title: '김마리아'
  },
  {
    id: '18ff9513-da77-45b9-919c-705f22a34476',
    subject_id: '0b0be31e-ed2b-4840-96ad-9ebbce5134f2',
    order_num: 8,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGbAlE8O6c/FJQPQkqXM7XEoUiFCK3LLw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '누구부터 도울까요'
  },
  {
    id: '1e74ce8e-0045-4cb2-909a-e8dd562f92a9',
    subject_id: '3b0b8baa-35d3-4087-9fea-54864e655e4f',
    order_num: 4,
    url: '<iframe class="w-screen h-screen" src="https://sapiens-school.onrender.com/#/lincoln"></iframe>',
    handout: null,
    title: '에이브러햄 링컨'
  },
  {
    id: '27631e1b-2cdc-4b04-968a-b839e276d73a',
    subject_id: '53673b39-ca8d-4e3f-8838-e285780f3834',
    order_num: 1,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGNKwEGCXg/pkzvx0NuCg8F3zxkFC6dXA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '세상에는 동그라미가 아주 많아'
  },
  {
    id: '12656532-bf48-4bc1-ba0d-2f3faf4fe1c0',
    subject_id: '3b0b8baa-35d3-4087-9fea-54864e655e4f',
    order_num: 5,
    url: '<iframe class="w-screen h-screen" src="https://sapiens-school.onrender.com/#/maria"></iframe>',
    handout: null,
    title: '김마리아'
  },
  {
    id: '18ff9513-da77-45b9-919c-705f22a34476',
    subject_id: '0b0be31e-ed2b-4840-96ad-9ebbce5134f2',
    order_num: 8,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGbAlE8O6c/FJQPQkqXM7XEoUiFCK3LLw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '누구부터 도울까요'
  },
  {
    id: '1e74ce8e-0045-4cb2-909a-e8dd562f92a9',
    subject_id: '3b0b8baa-35d3-4087-9fea-54864e655e4f',
    order_num: 4,
    url: '<iframe class="w-screen h-screen" src="https://sapiens-school.onrender.com/#/lincoln"></iframe>',
    handout: null,
    title: '에이브러햄 링컨'
  },
  {
    id: '27631e1b-2cdc-4b04-968a-b839e276d73a',
    subject_id: '53673b39-ca8d-4e3f-8838-e285780f3834',
    order_num: 1,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGNKwEGCXg/pkzvx0NuCg8F3zxkFC6dXA/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '세상에는 동그라미가 아주 많아'
  },
  {
    id: '29e37e54-1f8d-4cff-843f-71ebe01755c8',
    subject_id: '0b0be31e-ed2b-4840-96ad-9ebbce5134f2',
    order_num: 20,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGbAvXOpDI/HRb3h9IKA7_u-oVlnH16rw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '신뢰가 만드는 세상'
  },
  {
    id: '2b2df0e7-705f-4a51-88ce-200b4a5158b1',
    subject_id: '0b0be31e-ed2b-4840-96ad-9ebbce5134f2',
    order_num: 9,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGbAu768WI/eb985ANsFJ11cYqnCfoX-g/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '이럴 때 겁이나요'
  },
  {
    id: '2b46167b-bd55-4e25-809d-cdcf1158406c',
    subject_id: '0b0be31e-ed2b-4840-96ad-9ebbce5134f2',
    order_num: 2,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGbAjlIT60/F1-KkHhEH2zgRoO4AS0Qew/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '케이크는 어디에서 왔을까요'
  },
  {
    id: '2b643bf7-cfc2-404d-a129-9687de20ade8',
    subject_id: '0b0be31e-ed2b-4840-96ad-9ebbce5134f2',
    order_num: 3,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGbAq2iQW4/D1JadkSlrM8nomOK0lzCBQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '안녕, 당신은 누구인가요'
  },
  {
    id: '2f8f1233-a822-4013-a7b3-12677f0566d2',
    subject_id: '0b0be31e-ed2b-4840-96ad-9ebbce5134f2',
    order_num: 19,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGbBxJUDAo/PXTeftRnwAWLzPw2Cv29Bw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '신뢰는 서로 연결돼요'
  },
  {
    id: '30ee7970-67f3-4a71-a050-96d843a36acd',
    subject_id: '3b0b8baa-35d3-4087-9fea-54864e655e4f',
    order_num: 1,
    url: '<iframe class="w-screen h-screen" src="https://sapiens-school.onrender.com/#/nobel"></iframe>',
    handout: null,
    title: '알프레드 노벨'
  },
  {
    id: '361748d6-d295-4603-8aa8-fe617830e69f',
    subject_id: '0b0be31e-ed2b-4840-96ad-9ebbce5134f2',
    order_num: 10,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGbAnf_Goc/ygdRuLc-cMc-5zJIE_3oIg/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '용기는 세상을 바꾸지'
  },
  {
    id: '3af811fe-80d1-48fd-a94c-8c8fcb68a90f',
    subject_id: '0b0be31e-ed2b-4840-96ad-9ebbce5134f2',
    order_num: 14,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGbAsQ_yis/7R8NOd6izmdvPv81MpinBw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '가족을 사랑해요'
  },
  {
    id: '3c03b68e-7162-4496-9d6b-586a797f2614',
    subject_id: '3b0b8baa-35d3-4087-9fea-54864e655e4f',
    order_num: 11,
    url: '<iframe class="w-screen h-screen" src="https://sapiens-school.onrender.com/#/polo"></iframe>',
    handout: null,
    title: '마르코 폴로'
  },
  {
    id: '4b23b688-72c4-4bba-b724-d82295cc1ce1',
    subject_id: '3b0b8baa-35d3-4087-9fea-54864e655e4f',
    order_num: 13,
    url: '<iframe class="w-screen h-screen" src="https://sapiens-school.onrender.com/#/disney"></iframe>',
    handout: null,
    title: '디즈니'
  },
  {
    id: '50a8bed4-62ab-4952-aa49-3222c53447fd',
    subject_id: '3b0b8baa-35d3-4087-9fea-54864e655e4f',
    order_num: 3,
    url: '<iframe class="w-screen h-screen" src="https://sapiens-school.onrender.com/#/pulitzer"></iframe>',
    handout: null,
    title: '조지프 퓰리처'
  },
  {
    id: '6aba9e22-16b2-4260-b01b-d1a9751f94b8',
    subject_id: '3b0b8baa-35d3-4087-9fea-54864e655e4f',
    order_num: 6,
    url: '<iframe class="w-screen h-screen" src="https://sapiens-school.onrender.com/#/galileo"></iframe>',
    handout: null,
    title: '갈릴레오 갈릴레오'
  },
  {
    id: '6b036b81-61bf-4c09-8902-b5557c64032c',
    subject_id: '53673b39-ca8d-4e3f-8838-e285780f3834',
    order_num: 2,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGNg8sLLjQ/j-GLf2Sx1vIGJ9ZKro2j-Q/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '세상에는 세모가 아주 많아'
  },
  {
    id: '6beb23cb-641e-47b6-94a7-dfb9911bc784',
    subject_id: '3b0b8baa-35d3-4087-9fea-54864e655e4f',
    order_num: 2,
    url: '<iframe class="w-screen h-screen" src="https://sapiens-school.onrender.com/#/anderson"></iframe>',
    handout: null,
    title: '한스 크리스티안 안데르센'
  },
  {
    id: '6ef35f2b-3820-4880-a5f8-d0d4090ce36c',
    subject_id: '0b0be31e-ed2b-4840-96ad-9ebbce5134f2',
    order_num: 13,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGbAmTHh08/iRHlZevFuAhqojN-1-dLRw/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '나를 사랑해요'
  },
  {
    id: '7a669f59-9208-40aa-8110-259dd42b73d8',
    subject_id: '0b0be31e-ed2b-4840-96ad-9ebbce5134f2',
    order_num: 6,
    url: '<iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;" src="https://www.canva.com/design/DAGbAlprLJo/fns6R7Ude2YhR-r6ULZlcg/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen"></iframe>',
    handout: null,
    title: '차별이 무엇일까요'
  }
]

const TempSubjects: SubjectType[] = [
  {
    id: '0b0be31e-ed2b-4840-96ad-9ebbce5134f2',
    title: '캐릭터 에듀케이션 공감스쿨',
    imgSrc: 'empathy.png',
    grade: ['1학년', '2학년'],
    class: [],
    theme: [],
    syllabus: null
  },
  {
    id: '3b0b8baa-35d3-4087-9fea-54864e655e4f',
    title: 'AI 위인 탐구 살롱',
    imgSrc: 'sapiens.png',
    grade: ['1학년', '2학년'],
    class: [],
    theme: [],
    syllabus: null
  },
  {
    id: '53673b39-ca8d-4e3f-8838-e285780f3834',
    title: '세상에 모양이 아주 많아',
    imgSrc: 'shapes.png', // 이미지 없습니다.
    grade: ['1학년'],
    class: [],
    theme: [],
    syllabus: null
  },
  {
    id: '8bcf6191-83a5-4b47-9eb9-9c58c35fd90b',
    title: '아트앤스피치',
    imgSrc: 'artnspeech.png', // 이미지 없습니다.
    grade: ['1학년', '2학년', '3학년'],
    class: [],
    theme: [],
    syllabus: null
  }
]

export { ProgramNavigationBarList, gradeCategories, TempClasses, TempSubjects }
