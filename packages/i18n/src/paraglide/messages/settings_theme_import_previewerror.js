import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر التحقق من قالب السمة","bn":"থিম টেমপ্লেট যাচাই করা যায়নি","de":"Die Designvorlage konnte nicht validiert werden","en":"Could not validate the theme template","es":"No se pudo validar la plantilla del tema.","fr":"Impossible de valider le modèle de thème","hi":"थीम टेम्पलेट सत्यापित नहीं किया जा सका","id":"Tidak dapat memvalidasi template tema","pt-BR":"Não foi possível validar o modelo do tema","ru":"Не удалось проверить шаблон темы.","ur":"تھیم ٹیمپلیٹ کی توثیق نہیں ہو سکی","zh-CN":"无法验证主题模板"};

export function settings_theme_import_previewerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
