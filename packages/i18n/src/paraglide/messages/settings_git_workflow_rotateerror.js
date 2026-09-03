import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تدوير سر الـ webhook.","bn":"ওয়েবহুক গোপন ঘোরানো যায়নি।","de":"Webhook-Geheimnis konnte nicht rotiert werden.","en":"Could not rotate webhook secret.","es":"No se pudo rotar el secreto del webhook.","fr":"Impossible de faire pivoter le secret du webhook.","hi":"वेबहुक रहस्य को घुमाया नहीं जा सका.","id":"Tidak dapat memutar rahasia webhook.","pt-BR":"Não foi possível girar o segredo do webhook.","ru":"Не удалось повернуть секретный веб-перехватчик.","ur":"ویب ہک راز کو نہیں گھمایا جا سکا۔","zh-CN":"无法轮换 Webhook 机密。"};

export function settings_git_workflow_rotateerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
