import { getLocale } from '../runtime.js';

const translations = {"ar":"تم حفظ اتصال GitHub.","bn":"GitHub সংযোগ সংরক্ষিত হয়েছে৷","de":"GitHub Verbindung gespeichert.","en":"GitHub connection saved.","es":"GitHub conexión guardada.","fr":"Connexion GitHub enregistrée.","hi":"GitHub कनेक्शन सहेजा गया.","id":"GitHub koneksi disimpan.","pt-BR":"GitHub conexão salva.","ru":"Соединение GitHub сохранено.","ur":"GitHub کنکشن محفوظ ہو گیا۔","zh-CN":"GitHub 连接已保存。"};

export function settings_git_workflow_connected(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
