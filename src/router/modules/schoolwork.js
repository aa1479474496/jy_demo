const teachingIndex = () => import(/* webpackChunkName: "teachingIndex" */ "@/views/teaching/index.vue");

//项目本体分析
const projectAnalysisIndex = () => import(/* webpackChunkName: "projectAnalysisIndex" */ "@/views/teaching/projectAnalysis/index.vue"); 

//城市区域宏观分析
const macroAnalysisIndex = () => import(/* webpackChunkName: "macroAnalysisIndex" */ "@/views/teaching/macroAnalysis/index.vue"); 

export const schoolworkRouter =  {
  teaching: {
    component: teachingIndex
  },
  teaching_projectAnalysis: {
    component: projectAnalysisIndex
  },
  teaching_macroAnalysis: {
    component: macroAnalysisIndex
  }
}