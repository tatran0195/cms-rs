import { getLocale } from '../runtime.js';

const translations = {"ar":"مخطط انسيابي أو تسلسلي.","bn":"একটি ফ্লোচার্ট বা সিকোয়েন্স ডায়াগ্রাম।","de":"Ein Flussdiagramm oder Sequenzdiagramm.","en":"A flowchart or sequence diagram.","es":"Un diagrama de flujo o diagrama de secuencia.","fr":"Un organigramme ou un diagramme de séquence.","hi":"एक फ़्लोचार्ट या अनुक्रम आरेख.","id":"Diagram alur atau diagram urutan.","pt-BR":"Um fluxograma ou diagrama de sequência.","ru":"Блок-схема или диаграмма последовательности.","ur":"ایک فلو چارٹ یا ترتیب کا خاکہ۔","zh-CN":"流程图或顺序图。"};

export function editor_slash_mermaid_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
