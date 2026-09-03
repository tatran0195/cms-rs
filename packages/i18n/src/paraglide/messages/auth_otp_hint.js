import { getLocale } from '../runtime.js';

const translations = {"ar":"تنتهي صلاحية الرمز خلال 10 دقائق ولا يمكن استخدامه إلا مرة واحدة.","bn":"কোডটি 10 মিনিটের মধ্যে শেষ হয়ে যায় এবং একবার ব্যবহার করা যেতে পারে।","de":"Der Code läuft in 10 Minuten ab und kann einmal verwendet werden.","en":"The code expires in 10 minutes and can be used once.","es":"El código caduca en 10 minutos y se puede utilizar una vez.","fr":"Le code expire dans 10 minutes et peut être utilisé une fois.","hi":"कोड 10 मिनट में समाप्त हो जाता है और इसका उपयोग एक बार किया जा सकता है।","id":"Kode kedaluwarsa dalam 10 menit dan dapat digunakan satu kali.","pt-BR":"O código expira em 10 minutos e pode ser usado uma vez.","ru":"Срок действия кода истекает через 10 минут, и его можно использовать один раз.","ur":"کوڈ کی میعاد 10 منٹ میں ختم ہو جاتی ہے اور اسے ایک بار استعمال کیا جا سکتا ہے۔","zh-CN":"该代码10分钟后过期，只能使用一次。"};

export function auth_otp_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
