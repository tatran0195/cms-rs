import { getLocale } from '../runtime.js';

const translations = {"ar":"{matched} من أصل {total} صفحة مصدر","bn":"{matched} এর {total} উৎস পৃষ্ঠা","de":"{matched} von {total} Quellseiten","en":"{matched} of {total} source pages","es":"{matched} de {total} páginas fuente","fr":"{matched} sur {total} pages sources","hi":"{total} स्रोत पृष्ठों में से {matched}","id":"{matched} dari {total} halaman sumber","pt-BR":"{matched} de {total} páginas de origem","ru":"{matched} из {total} исходных страниц","ur":"{matched} از {total} ماخذ صفحات","zh-CN":"{matched}（共 {total} 个源页面）"};

export function settings_languages_coverage_summary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
