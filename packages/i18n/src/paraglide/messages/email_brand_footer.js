import { getLocale } from '../runtime.js';

const translations = {"ar":"أُرسلت هذه الرسالة الآلية من نيبليف. إذا لم تطلبها، يمكنك تجاهلها بأمان.","bn":"This automated message was sent by Nibleaf. If you did not request it, you can safely ignore it.","de":"This automated message was sent by Nibleaf. If you did not request it, you can safely ignore it.","en":"This automated message was sent by Nibleaf. If you did not request it, you can safely ignore it.","es":"This automated message was sent by Nibleaf. If you did not request it, you can safely ignore it.","fr":"This automated message was sent by Nibleaf. If you did not request it, you can safely ignore it.","hi":"This automated message was sent by Nibleaf. If you did not request it, you can safely ignore it.","id":"This automated message was sent by Nibleaf. If you did not request it, you can safely ignore it.","pt-BR":"This automated message was sent by Nibleaf. If you did not request it, you can safely ignore it.","ru":"This automated message was sent by Nibleaf. If you did not request it, you can safely ignore it.","ur":"This automated message was sent by Nibleaf. If you did not request it, you can safely ignore it.","zh-CN":"This automated message was sent by Nibleaf. If you did not request it, you can safely ignore it."};

export function email_brand_footer(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
