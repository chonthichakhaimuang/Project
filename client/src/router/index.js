import Vue from 'vue'
import Router from 'vue-router'
// Sunscreens
import SunscreenIndex from '@/components/Sunscreens/Index'
import SunscreenCreate from '@/components/Sunscreens/CreateSunscreen'
import SunscreenEdit from '@/components/Sunscreens/EditSunscreen'
import SunscreenShow from '@/components/Sunscreens/ShowSunscreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sunscreens',
      name: 'sunscreens',
      component: SunscreenIndex
    },
    {
      path: '/sunscreen/create',
      name: 'sunscreens-create',
      component: SunscreenCreate
    },
    {
      path: '/sunscreen/edit/:sunscreenId',
      name: 'sunscreen-edit',
      component: SunscreenEdit
    },
    {
      path: '/sunscreen/:sunscreenId',
      name: 'sunscreen',
      component: SunscreenShow
    },
  ]
})
