import { getLocale } from '../runtime.js';

const translations = {"ar":"متصل","bn":"সংযুক্ত","de":"Verbunden","en":"Connected","es":"Conectado","fr":"Connecté","hi":"जुड़ा हुआ","id":"Terhubung","pt-BR":"Conectado","ru":"Подключено","ur":"جڑا ہوا","zh-CN":"已连接"};

export function settings_git_connected(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
