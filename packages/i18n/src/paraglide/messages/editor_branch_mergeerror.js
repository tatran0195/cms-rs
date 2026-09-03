import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّرت ترقية الإصدار","bn":"সংস্করণ প্রচার করা যায়নি","de":"Die Version konnte nicht hochgestuft werden","en":"Could not promote the version","es":"No se pudo promocionar la versión.","fr":"Impossible de promouvoir la version","hi":"संस्करण का प्रचार नहीं किया जा सका","id":"Tidak dapat mempromosikan versi tersebut","pt-BR":"Não foi possível promover a versão","ru":"Не удалось продвигать версию","ur":"ورژن کو فروغ نہیں دیا جا سکا","zh-CN":"无法升级版本"};

export function editor_branch_mergeerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
