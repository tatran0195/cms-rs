import { getLocale } from '../runtime.js';

const translations = {"ar":"تشغيل الآن","bn":"এখন চালান","de":"Lauf jetzt","en":"Run now","es":"Corre ahora","fr":"Courez maintenant","hi":"अभी भागो","id":"Jalankan sekarang","pt-BR":"Corra agora","ru":"Беги сейчас","ur":"اب دوڑو","zh-CN":"立即运行"};

export function settings_exports_workflow_runnow(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
