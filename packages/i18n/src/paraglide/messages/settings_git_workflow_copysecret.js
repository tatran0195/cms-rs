import { getLocale } from '../runtime.js';

const translations = {"ar":"انسخ هذا السر الآن","bn":"এখন এই গোপন অনুলিপি","de":"Kopieren Sie dieses Geheimnis jetzt","en":"Copy this secret now","es":"Copia este secreto ahora","fr":"Copiez ce secret maintenant","hi":"अब इस रहस्य को कॉपी करें","id":"Salin rahasia ini sekarang","pt-BR":"Copie este segredo agora","ru":"Скопируйте этот секрет сейчас","ur":"اب اس راز کو کاپی کریں۔","zh-CN":"立即复制此秘密"};

export function settings_git_workflow_copysecret(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
