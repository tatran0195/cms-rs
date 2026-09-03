import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّرت صياغة المحتوى.","bn":"বিষয়বস্তু খসড়া করা যায়নি.","de":"Inhalt konnte nicht erstellt werden.","en":"Could not draft content.","es":"No se pudo redactar el contenido.","fr":"Impossible de rédiger le contenu.","hi":"सामग्री का प्रारूप तैयार नहीं किया जा सका.","id":"Tidak dapat membuat draf konten.","pt-BR":"Não foi possível redigir o conteúdo.","ru":"Не удалось подготовить контент.","ur":"مواد کا مسودہ تیار نہیں کیا جا سکا۔","zh-CN":"无法起草内容。"};

export function editor_ai_drafterror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
