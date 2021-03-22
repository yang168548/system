import { defineConfig } from 'umi';
import {routes} from './config/route';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: '女娲智能催收系统',
    
    locale: true,
    layout: 'side',
  },
  dva: { //todo  dva 数据流的配置
    immer: true, //todo 表示允许修改reducers 
    hmr: true,
  },
});
