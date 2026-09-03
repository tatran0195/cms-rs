import { getLocale } from '../runtime.js';

const translations = {"ar":"معامل طلب API (الاسم، النوع، مطلوب).","bn":"একটি API অনুরোধ প্যারামিটার (নাম, প্রকার, প্রয়োজনীয়)।","de":"Ein API-Anforderungsparameter (Name, Typ, erforderlich).","en":"An API request parameter (name, type, required).","es":"Un parámetro de solicitud API (nombre, tipo, obligatorio).","fr":"Un paramètre de requête API (nom, type, obligatoire).","hi":"एक API अनुरोध पैरामीटर (नाम, प्रकार, आवश्यक)।","id":"Parameter permintaan API (nama, jenis, wajib diisi).","pt-BR":"Um parâmetro de solicitação API (nome, tipo, obrigatório).","ru":"Параметр запроса API (имя, тип, обязательный).","ur":"ایک API درخواست پیرامیٹر (نام، قسم، مطلوبہ)۔","zh-CN":"API 请求参数（名称、类型、必需）。"};

export function editor_slash_paramfield_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
