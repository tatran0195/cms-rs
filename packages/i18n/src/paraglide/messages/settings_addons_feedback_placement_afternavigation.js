import { getLocale } from '../runtime.js';

const translations = {"ar":"بعد روابط السابق والتالي","bn":"আগের ও পরের লিংকের পরে","de":"Nach den Links „Zurück“ und „Weiter“","en":"After previous and next links","es":"Después de los enlaces anterior y siguiente","fr":"Après les liens précédent et suivant","hi":"पिछले और अगले लिंक के बाद","id":"Setelah tautan sebelumnya dan berikutnya","pt-BR":"Após os links anterior e seguinte","ru":"После ссылок «Назад» и «Далее»","ur":"پچھلے اور اگلے روابط کے بعد","zh-CN":"上一页和下一页链接之后"};

export function settings_addons_feedback_placement_afternavigation(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
