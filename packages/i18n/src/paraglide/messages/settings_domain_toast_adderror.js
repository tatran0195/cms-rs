import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّرت إضافة النطاق","bn":"ডোমেইন যোগ করা যায়নি","de":"Die Domäne konnte nicht hinzugefügt werden","en":"Could not add the domain","es":"No se pudo agregar el dominio","fr":"Impossible d'ajouter le domaine","hi":"डोमेन नहीं जोड़ा जा सका","id":"Tidak dapat menambahkan domain","pt-BR":"Não foi possível adicionar o domínio","ru":"Не удалось добавить домен","ur":"ڈومین شامل نہیں کیا جا سکا","zh-CN":"无法添加域"};

export function settings_domain_toast_adderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
