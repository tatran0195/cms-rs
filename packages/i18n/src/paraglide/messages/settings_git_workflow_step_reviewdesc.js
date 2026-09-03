import { getLocale } from '../runtime.js';

const translations = {"ar":"أكّد الإعداد","bn":"সেটআপ নিশ্চিত করুন","de":"Bestätigen Sie die Einrichtung","en":"Confirm the setup","es":"Confirmar la configuración","fr":"Confirmez la configuration","hi":"सेटअप की पुष्टि करें","id":"Konfirmasikan pengaturannya","pt-BR":"Confirme a configuração","ru":"Подтвердите настройку","ur":"سیٹ اپ کی تصدیق کریں۔","zh-CN":"确认设置"};

export function settings_git_workflow_step_reviewdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
