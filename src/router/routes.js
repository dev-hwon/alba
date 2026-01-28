
import MainPage from '@/views/MainPage.vue'
import CustomsPage from '@/views/CustomsPage.vue'
import SchedulePage from '@/views/SchedulePage.vue'
import LocalPage from '@/views/LocalPage.vue'
export const routes = [
  {
    path: '/',
    name: 'main',
    component: MainPage
  }, {
    path: '/customs',
    name: 'customs',
    component: CustomsPage
  }, {
    path: '/schedule',
    name: 'schedule',
    component: SchedulePage
  }, {
    path: '/local',
    name: 'local',
    component: LocalPage
  },
]