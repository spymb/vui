import {createWebHashHistory, createRouter} from 'vue-router';
import Home from './views/Home.vue';
import Doc from './views/Doc.vue';
import SwitchPage from './components/page/SwitchPage.vue';
import ButtonPage from './components/page/ButtonPage.vue';
import DialogPage from './components/page/DialogPage.vue';
import TabsPage from './components/page/TabsPage.vue';
import Markdown from './components/Markdown.vue';
import {h} from 'vue';
import ToastPage from './components/page/ToastPage.vue';
import InputPage from './components/page/InputPage.vue';
import LayoutPage from './components/page/LayoutPage.vue';
import PopoverPage from './components/page/PopoverPage.vue';
import intro from './markdown/intro.md';

const md = string => h(Markdown, { content: string, key: string })
const history = createWebHashHistory();
export const router = createRouter({
  history: history,
  routes: [
    {path: '/', component: Home},
    {
      path: '/doc', component: Doc,
      children: [
        {path: 'intro', component: md(intro)},
        {path: 'switch', component: SwitchPage},
        {path: 'button', component: ButtonPage},
        {path: 'dialog', component: DialogPage},
        {path: 'tabs', component: TabsPage},
        {path: 'layout', component: LayoutPage},
        {path: 'input', component: InputPage},
        {path: 'toast', component: ToastPage},
        {path: 'popover', component: PopoverPage},
      ]
    },
  ]
});