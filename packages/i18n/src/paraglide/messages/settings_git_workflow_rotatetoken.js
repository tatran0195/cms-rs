import { getLocale } from '../runtime.js';

const translations = {"ar":"تدوير الرمز (اختياري)","bn":"টোকেন ঘোরান (ঐচ্ছিক)","de":"Token drehen (optional)","en":"Rotate token (optional)","es":"Rotar token (opcional)","fr":"Faire pivoter le jeton (facultatif)","hi":"टोकन घुमाएँ (वैकल्पिक)","id":"Putar token (opsional)","pt-BR":"Girar token (opcional)","ru":"Поворот токена (необязательно)","ur":"ٹوکن گھمائیں (اختیاری)","zh-CN":"旋转令牌（可选）"};

export function settings_git_workflow_rotatetoken(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
