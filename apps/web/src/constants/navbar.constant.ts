const NavigationBarLists = [
  {
    name: 'About us',
    dropdownList: [
      { name: '소개', path: '/about' },
      { name: '조직도', path: '/about/organization' },
      { name: 'contact', path: '/about/contact' }
    ]
  },
  {
    name: 'Notice',
    dropdownList: [
      { name: '공지사항', path: '/notice' },
      // { name: '투표', path: '/about' },
      { name: '결산안', path: '/notice/financial' }
    ]
  },
  {
    name: 'Activity',
    dropdownList: [
      { name: '갤러리', path: '/activity/gallery' },
      { name: '활동일정', path: '/activity/calendar' }
    ]
  },
  {
    name: 'Wiki',
    dropdownList: [
      { name: '리얼 강의평', path: '/wiki/lecture' },
      { name: '꿀교양', path: '/wiki/honey' },
      { name: '맛집', path: '/wiki/restaurant' },
      { name: '새내기 TIPS', path: '/wiki/tips' }
    ]
  },
  {
    name: '마이 페이지',
    dropdownList: [
      { name: '마이 페이지', path: '/' },
      { name: '로그아웃', path: '/' },
      { name: '회원가입', path: '/' }
    ]
  }
]
export { NavigationBarLists }
