import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر الاتصال بـ GitHub.","bn":"GitHub সংযোগ করা যায়নি।","de":"GitHub konnte nicht verbunden werden.","en":"Could not connect GitHub.","es":"No se pudo conectar GitHub.","fr":"Impossible de connecter GitHub.","hi":"GitHub कनेक्ट नहीं हो सका.","id":"Tidak dapat menghubungkan GitHub.","pt-BR":"Não foi possível conectar GitHub.","ru":"Не удалось подключить GitHub.","ur":"GitHub کو مربوط نہیں کیا جا سکا۔","zh-CN":"无法连接 GitHub。"};

export function settings_git_workflow_connecterror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
