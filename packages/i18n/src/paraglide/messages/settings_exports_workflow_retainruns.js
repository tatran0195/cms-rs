import { getLocale } from '../runtime.js';

const translations = {"ar":"عدد العمليات المحفوظة","bn":"ধরে রাখতে দৌড়ায়","de":"Läuft zum Behalten","en":"Runs to retain","es":"Corre para retener","fr":"Fonctionne à retenir","hi":"बनाए रखने के लिए चलाता है","id":"Berlari untuk mempertahankan","pt-BR":"Corre para reter","ru":"Бежит, чтобы сохранить","ur":"برقرار رکھنے کے لیے دوڑتا ہے۔","zh-CN":"运行以保留"};

export function settings_exports_workflow_retainruns(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
