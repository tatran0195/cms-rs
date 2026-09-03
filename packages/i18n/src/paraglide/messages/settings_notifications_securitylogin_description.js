import { getLocale } from '../runtime.js';

const translations = {"ar":"عند اكتشاف تسجيل دخول جديد.","bn":"যখন একটি নতুন সাইন-ইন শনাক্ত করা হয়।","de":"Wenn eine neue Anmeldung erkannt wird.","en":"When a new sign-in is detected.","es":"Cuando se detecta un nuevo inicio de sesión.","fr":"Lorsqu'une nouvelle connexion est détectée.","hi":"जब एक नए साइन-इन का पता चलता है.","id":"Ketika proses masuk baru terdeteksi.","pt-BR":"Quando um novo login é detectado.","ru":"При обнаружении нового входа.","ur":"جب ایک نئے سائن ان کا پتہ چلتا ہے۔","zh-CN":"当检测到新的登录时。"};

export function settings_notifications_securitylogin_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
