import { getLocale } from '../runtime.js';

const translations = {"ar":"مكوّنات المحتوى","bn":"বিষয়বস্তু উপাদান","de":"Inhaltskomponenten","en":"Content components","es":"Componentes de contenido","fr":"Composants de contenu","hi":"सामग्री घटक","id":"Komponen konten","pt-BR":"Componentes de conteúdo","ru":"Компоненты контента","ur":"مواد کے اجزاء","zh-CN":"内容组成部分"};

export function settings_theme_components(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
