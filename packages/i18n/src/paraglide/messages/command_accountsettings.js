import { getLocale } from '../runtime.js';

const translations = {"ar":"إعدادات الحساب","bn":"অ্যাকাউন্ট সেটিংস","de":"Kontoeinstellungen","en":"Account settings","es":"Configuración de la cuenta","fr":"Paramètres du compte","hi":"खाता सेटिंग","id":"Pengaturan akun","pt-BR":"Configurações da conta","ru":"Настройки аккаунта","ur":"اکاؤنٹ کی ترتیبات","zh-CN":"账户设置"};

export function command_accountsettings(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
