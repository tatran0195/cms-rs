import { getLocale } from '../runtime.js';

const translations = {"ar":"اكتب \"{name}\" للتأكيد","bn":"নিশ্চিত করতে \"{name}\" টাইপ করুন","de":"Geben Sie zur Bestätigung „{name}“ ein","en":"Type \"{name}\" to confirm","es":"Escribe \"{name}\" para confirmar","fr":"Tapez \"{name}\" pour confirmer","hi":"पुष्टि करने के लिए \"{name}\" टाइप करें","id":"Ketik \"{name}\" untuk mengonfirmasi","pt-BR":"Digite \"{name}\" para confirmar","ru":"Введите «{name}» для подтверждения.","ur":"تصدیق کرنے کے لیے \"{name}\" ٹائپ کریں۔","zh-CN":"输入“{name}”进行确认"};

export function settings_danger_delete_typetoconfirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
