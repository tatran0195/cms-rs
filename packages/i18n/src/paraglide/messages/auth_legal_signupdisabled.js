import { getLocale } from '../runtime.js';

const translations = {"ar":"التسجيل معطّل حاليًا في هذه النسخة.","bn":"সাইন-আপগুলি বর্তমানে এই উদাহরণে অক্ষম করা হয়েছে৷","de":"Anmeldungen sind für diese Instanz derzeit deaktiviert.","en":"Sign-ups are currently disabled on this instance.","es":"Los registros están actualmente deshabilitados en esta instancia.","fr":"Les inscriptions sont actuellement désactivées sur cette instance.","hi":"इस उदाहरण पर साइन-अप वर्तमान में अक्षम हैं।","id":"Pendaftaran saat ini dinonaktifkan pada contoh ini.","pt-BR":"As inscrições estão atualmente desativadas nesta instância.","ru":"В настоящее время регистрация в этом экземпляре отключена.","ur":"سائن اپ فی الحال اس مثال پر غیر فعال ہیں۔","zh-CN":"目前此实例上已禁用注册。"};

export function auth_legal_signupdisabled(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
