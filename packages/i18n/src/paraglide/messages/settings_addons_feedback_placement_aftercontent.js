import { getLocale } from '../runtime.js';

const translations = {"ar":"بعد محتوى الصفحة","bn":"পাতার বিষয়বস্তুর পরে","de":"Nach dem Seiteninhalt","en":"After page content","es":"Después del contenido de la página","fr":"Après le contenu de la page","hi":"पृष्ठ की सामग्री के बाद","id":"Setelah konten halaman","pt-BR":"Após o conteúdo da página","ru":"После содержимого страницы","ur":"صفحے کے مواد کے بعد","zh-CN":"页面内容之后"};

export function settings_addons_feedback_placement_aftercontent(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
