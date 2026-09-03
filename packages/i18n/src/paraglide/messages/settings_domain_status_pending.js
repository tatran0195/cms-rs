import { getLocale } from '../runtime.js';

const translations = {"ar":"في انتظار التحقق","bn":"মুলতুবি যাচাই","de":"Ausstehende Überprüfung","en":"Pending verification","es":"Pendiente de verificación","fr":"En attente de vérification","hi":"सत्यापन लंबित है","id":"Verifikasi tertunda","pt-BR":"Verificação pendente","ru":"Ожидает проверки","ur":"زیر التواء توثیق","zh-CN":"待验证"};

export function settings_domain_status_pending(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
