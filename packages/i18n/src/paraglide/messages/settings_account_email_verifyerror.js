import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز التحقق غير صالح أو انتهت صلاحيته","bn":"সেই যাচাইকরণ কোডটি অবৈধ বা মেয়াদোত্তীর্ণ","de":"Dieser Bestätigungscode ist ungültig oder abgelaufen","en":"That verification code is invalid or expired","es":"Ese código de verificación no es válido o ha caducado","fr":"Ce code de vérification est invalide ou a expiré","hi":"वह सत्यापन कोड अमान्य है या समाप्त हो गया है","id":"Kode verifikasi tersebut tidak valid atau kedaluwarsa","pt-BR":"Esse código de verificação é inválido ou expirou","ru":"Этот код подтверждения недействителен или срок его действия истек.","ur":"وہ توثیقی کوڈ غلط ہے یا ختم ہو چکا ہے۔","zh-CN":"该验证码无效或已过期"};

export function settings_account_email_verifyerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
