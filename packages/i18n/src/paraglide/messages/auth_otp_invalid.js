import { getLocale } from '../runtime.js';

const translations = {"ar":"هذا الرمز غير صالح أو انتهت صلاحيته.","bn":"সেই কোডটি অবৈধ বা মেয়াদোত্তীর্ণ।","de":"Dieser Code ist ungültig oder abgelaufen.","en":"That code is invalid or expired.","es":"Ese código no es válido o ha caducado.","fr":"Ce code est invalide ou a expiré.","hi":"वह कोड अमान्य है या समाप्त हो चुका है.","id":"Kode tersebut tidak valid atau kedaluwarsa.","pt-BR":"Esse código é inválido ou expirou.","ru":"Этот код недействителен или срок его действия истек.","ur":"وہ کوڈ غلط ہے یا ختم ہو چکا ہے۔","zh-CN":"该代码无效或已过期。"};

export function auth_otp_invalid(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
