import { getLocale } from '../runtime.js';

const translations = {"ar":"رسالة الالتزام","bn":"প্রতিশ্রুতি বার্তা","de":"Commit-Nachricht","en":"Commit message","es":"mensaje de confirmación","fr":"Message de validation","hi":"प्रतिबद्ध संदेश","id":"Pesan komit","pt-BR":"Confirmar mensagem","ru":"Зафиксировать сообщение","ur":"عہد کا پیغام","zh-CN":"提交消息"};

export function settings_git_workflow_commitmessage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
