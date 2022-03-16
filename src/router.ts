import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchPage from './components/SwitchPage.vue';
import ButtonPage from './components/ButtonPage.vue';
import DialogPage from './components/DialogPage.vue';
import TabsPage from './components/TabsPage.vue';
import Markdown from './components/Markdown.vue';
import {h} from 'vue';
import ToastPage from './components/ToastPage.vue';
import InputPage from './components/InputPage.vue';
import LayoutPage from './components/LayoutPage.vue';

const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc,
      children: [
        {path: 'intro', component: md('intro')},
        {path: 'get-started', component: md('get-started')},
        {path: 'install', component: md('install')},
        {path: 'switch', component: SwitchPage},
        {path: 'button', component: ButtonPage},
        {path: 'dialog', component: DialogPage},
        {path: 'tabs', component: TabsPage},
        {path: 'layout', component: LayoutPage},
        {path: 'input', component: InputPage},
        {path: 'toast', component: ToastPage},
      ]
    },
  ]
});