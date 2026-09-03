import { getLocale } from '../runtime.js';

const translations = {"ar":"لن يغيّر هذا القالب سمة المسودة الحالية.","bn":"এই টেমপ্লেটটি বর্তমান খসড়া থিম পরিবর্তন করবে না।","de":"Diese Vorlage würde den aktuellen Designentwurf nicht ändern.","en":"This template would not change the current draft theme.","es":"Esta plantilla no cambiaría el tema borrador actual.","fr":"Ce modèle ne modifierait pas le projet de thème actuel.","hi":"यह टेम्प्लेट वर्तमान ड्राफ्ट थीम को नहीं बदलेगा।","id":"Templat ini tidak akan mengubah rancangan tema saat ini.","pt-BR":"Este modelo não alteraria o tema do rascunho atual.","ru":"Этот шаблон не изменит текущую тему проекта.","ur":"یہ ٹیمپلیٹ موجودہ ڈرافٹ تھیم کو تبدیل نہیں کرے گا۔","zh-CN":"此模板不会更改当前草稿主题。"};

export function settings_theme_nochanges(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
