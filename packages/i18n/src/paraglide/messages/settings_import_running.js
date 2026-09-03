import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ الاستيراد…","bn":"আমদানি করা হচ্ছে...","de":"Importieren…","en":"Importing…","es":"Importando…","fr":"Importation…","hi":"आयात किया जा रहा है...","id":"Mengimpor…","pt-BR":"Importando…","ru":"Импорт…","ur":"درآمد ہو رہا ہے…","zh-CN":"正在导入..."};

export function settings_import_running(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
