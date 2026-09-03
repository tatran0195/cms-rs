import { getLocale } from '../runtime.js';

const translations = {"ar":"ألصق قالب nibleaf-theme بصيغة JSON لفحصه…","bn":"এটি পরিদর্শন করতে একটি nibleaf-থিম JSON টেমপ্লেট আটকান...","de":"Fügen Sie eine Nibleaf-Theme-Vorlage JSON ein, um sie zu überprüfen.","en":"Paste a nibleaf-theme JSON template to inspect it…","es":"Pegue una plantilla JSON de tema nibleaf para inspeccionarla...","fr":"Collez un modèle JSON du thème nibleaf pour l'inspecter…","hi":"इसका निरीक्षण करने के लिए एक nibleaf-थीम JSON टेम्पलेट चिपकाएँ…","id":"Tempelkan templat JSON tema nibleaf untuk memeriksanya…","pt-BR":"Cole um modelo nibleaf-theme JSON para inspecioná-lo…","ru":"Вставьте шаблон JSON темы nibleaf, чтобы проверить его…","ur":"اس کا معائنہ کرنے کے لیے ایک nibleaf-theme JSON ٹیمپلیٹ چسپاں کریں…","zh-CN":"粘贴 nibleaf 主题 JSON 模板来检查它......"};

export function settings_theme_importplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
