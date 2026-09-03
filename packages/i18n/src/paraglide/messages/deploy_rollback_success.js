import { getLocale } from '../runtime.js';

const translations = {"ar":"تم التراجع إلى الإصدار v{version}","bn":"v{version} এ রোল ব্যাক করা হয়েছে","de":"Rollback auf v{version}","en":"Rolled back to v{version}","es":"Revertido a v{version}","fr":"Restauré à v{version}","hi":"v{version} पर वापस लाया गया","id":"Dikembalikan ke v{version}","pt-BR":"Revertido para v{version}","ru":"Откатился на v{version}.","ur":"v{version} پر واپس رول کیا گیا","zh-CN":"回滚到 v{version}"};

export function deploy_rollback_success(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
