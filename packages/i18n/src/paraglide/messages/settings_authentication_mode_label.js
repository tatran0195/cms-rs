import { getLocale } from '../runtime.js';

const translations = {"ar":"الوصول إلى التوثيق","bn":"ডক্স অ্যাক্সেস","de":"Zugriff auf Dokumente","en":"Docs access","es":"Acceso a documentos","fr":"Accès aux documents","hi":"दस्तावेज़ पहुंच","id":"Akses dokumen","pt-BR":"Acesso aos documentos","ru":"Доступ к документам","ur":"دستاویزات تک رسائی","zh-CN":"文档访问"};

export function settings_authentication_mode_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
