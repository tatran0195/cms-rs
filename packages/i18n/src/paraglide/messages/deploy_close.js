import { getLocale } from '../runtime.js';

const translations = {"ar":"إغلاق","bn":"বন্ধ","de":"Schließen","en":"Close","es":"Cerrar","fr":"Fermer","hi":"बंद करें","id":"Tutup","pt-BR":"Fechar","ru":"Закрыть","ur":"بند","zh-CN":"关闭"};

export function deploy_close(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
