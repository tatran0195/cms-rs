import { getLocale } from '../runtime.js';

const translations = {"ar":"ما الذي تغيّر؟","bn":"কি পরিবর্তন হয়েছে?","de":"Was hat sich geändert?","en":"What changed?","es":"¿Qué cambió?","fr":"Qu'est-ce qui a changé ?","hi":"क्या बदला?","id":"Apa yang berubah?","pt-BR":"O que mudou?","ru":"Что изменилось?","ur":"کیا بدلا؟","zh-CN":"发生了什么变化？"};

export function publish_whatchanged(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
