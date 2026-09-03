import { getLocale } from '../runtime.js';

const translations = {"ar":"ألواح محتوى بتبويبات.","bn":"ট্যাব করা বিষয়বস্তু প্যান।","de":"Inhaltsbereiche mit Registerkarten.","en":"Tabbed content panes.","es":"Paneles de contenido con pestañas.","fr":"Volets de contenu à onglets.","hi":"टैब्ड सामग्री फलक.","id":"Panel konten bertab.","pt-BR":"Painéis de conteúdo com guias.","ru":"Панели содержимого с вкладками.","ur":"ٹیب شدہ مواد کے پین۔","zh-CN":"选项卡式内容窗格。"};

export function editor_slash_tabs_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
