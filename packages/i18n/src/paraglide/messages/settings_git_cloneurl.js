import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط الاستنساخ","bn":"URL ক্লোন করুন","de":"URL klonen","en":"Clone URL","es":"Clonar URL","fr":"Cloner l'URL","hi":"क्लोन यूआरएल","id":"URL klon","pt-BR":"Clonar URL","ru":"Клонировать URL-адрес","ur":"یو آر ایل کو کلون کریں۔","zh-CN":"克隆网址"};

export function settings_git_cloneurl(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
