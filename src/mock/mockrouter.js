const routerList = [
  {
    name: 'teaching',
    menuName: '实训教学',
    children: [
      { name: 'teaching_projectAnalysis', menuName: '项目本体分析' },
      { name: 'teaching_macroAnalysis', menuName: '城市区域宏观分析' },
    ]
  },
  {
    name: 'schoolwork',
    menuName: '作业管理',
    children: [
      { name: 'schoolwork_demo1', menuName: '作业管理demo1' },
      { name: 'schoolwork_demo2', menuName: '作业管理demo2' },
    ]
  },
  // {
  //   name: 'cases',
  //   menuName: '实战案例'
  // },
  // {
  //   name: 'exercises',
  //   menuName: '实训习题'
  // }
]

export default routerList;