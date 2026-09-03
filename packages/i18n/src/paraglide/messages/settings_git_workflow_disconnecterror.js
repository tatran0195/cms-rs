import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر قطع اتصال GitHub.","bn":"GitHub সংযোগ বিচ্ছিন্ন করা যায়নি।","de":"GitHub konnte nicht getrennt werden.","en":"Could not disconnect GitHub.","es":"No se pudo desconectar GitHub.","fr":"Impossible de déconnecter GitHub.","hi":"GitHub को डिस्कनेक्ट नहीं किया जा सका.","id":"Tidak dapat memutuskan sambungan GitHub.","pt-BR":"Não foi possível desconectar GitHub.","ru":"Не удалось отключить GitHub.","ur":"GitHub کو منقطع نہیں کیا جا سکا۔","zh-CN":"无法断开 GitHub 的连接。"};

export function settings_git_workflow_disconnecterror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
