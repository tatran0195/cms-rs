import { getLocale } from '../runtime.js';

const translations = {"ar":"حفظ الاتصال","bn":"সংযোগ সংরক্ষণ করুন","de":"Verbindung speichern","en":"Save connection","es":"Guardar conexión","fr":"Enregistrer la connexion","hi":"कनेक्शन सहेजें","id":"Simpan koneksi","pt-BR":"Salvar conexão","ru":"Сохранить соединение","ur":"کنکشن محفوظ کریں۔","zh-CN":"保存连接"};

export function settings_git_workflow_saveconnection(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
