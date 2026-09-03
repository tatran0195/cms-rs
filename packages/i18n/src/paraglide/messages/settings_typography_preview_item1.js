import { getLocale } from '../runtime.js';

const translations = {"ar":"اربط نطاقك الخاص خلال دقائق","bn":"মিনিটের মধ্যে একটি কাস্টম ডোমেন সংযুক্ত করুন","de":"Verbinden Sie in wenigen Minuten eine benutzerdefinierte Domäne","en":"Connect a custom domain in minutes","es":"Conecte un dominio personalizado en minutos","fr":"Connectez un domaine personnalisé en quelques minutes","hi":"मिनटों में एक कस्टम डोमेन कनेक्ट करें","id":"Hubungkan domain khusus dalam hitungan menit","pt-BR":"Conecte um domínio personalizado em minutos","ru":"Подключите личный домен за считанные минуты","ur":"منٹوں میں اپنی مرضی کے مطابق ڈومین سے رابطہ کریں۔","zh-CN":"在几分钟内连接自定义域"};

export function settings_typography_preview_item1(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
