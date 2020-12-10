const schoolworkIndex = () => import(/* webpackChunkName: "schoolworkIndex" */ "@/views/schoolwork/index.vue");

//作业管理demo1
const schoolworkDemo1 = () => import(/* webpackChunkName: "schoolworkDemo1" */ "@/views/schoolwork/demo1/index.vue"); 

//城市区域宏观分析
const schoolworkDemo2 = () => import(/* webpackChunkName: "schoolworkDemo2" */ "@/views/schoolwork/demo2/index.vue"); 

export const teachingRouter =  {
  schoolwork: {
    component: schoolworkIndex
  },
  schoolwork_demo1: {
    component: schoolworkDemo1
  },
  schoolwork_demo2: {
    component: schoolworkDemo2
  }
}