import { getLocale } from '../runtime.js';

const translations = {"ar":"مخطط Mermaid","bn":"মারমেইড ডায়াগ্রাম","de":"Meerjungfrau-Diagramm","en":"Mermaid diagram","es":"Diagrama de sirena","fr":"Diagramme de sirène","hi":"जलपरी आरेख","id":"Diagram putri duyung","pt-BR":"Diagrama de sereia","ru":"Схема русалки","ur":"متسیستری خاکہ","zh-CN":"美人鱼图"};

export function editor_slash_mermaid_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
