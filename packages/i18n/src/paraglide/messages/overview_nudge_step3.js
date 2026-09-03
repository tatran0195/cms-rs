import { getLocale } from '../runtime.js';

const translations = {"ar":"اربط نطاقًا مخصصًا","bn":"একটি কাস্টম ডোমেন সংযোগ করুন","de":"Verbinden Sie eine benutzerdefinierte Domäne","en":"Connect a custom domain","es":"Conectar un dominio personalizado","fr":"Connecter un domaine personnalisé","hi":"एक कस्टम डोमेन कनेक्ट करें","id":"Hubungkan domain khusus","pt-BR":"Conecte um domínio personalizado","ru":"Подключите личный домен","ur":"اپنی مرضی کے مطابق ڈومین کو جوڑیں۔","zh-CN":"连接自定义域"};

export function overview_nudge_step3(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
