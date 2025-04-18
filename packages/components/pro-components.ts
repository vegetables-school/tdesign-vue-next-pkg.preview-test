import { App } from 'vue';
import * as components from './chat';

export function install(app: App, config?: Record<string, unknown>): void {
  Object.keys(components).forEach((key) => {
    if (/directive/i.test(key)) return;
    // @ts-ignore
    /plugin/i.test(key) ? app.use(components[key]) : app.use(components[key], config);
  });
}

export * from './chat';
export * from './common';
export default {
  install,
  version: typeof PKG_VERSION === 'undefined' ? '' : PKG_VERSION, // eslint-disable-line
};
