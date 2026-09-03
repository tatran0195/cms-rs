import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ التحقّق من الاتصال…","bn":"সংযোগ যাচাই করা হচ্ছে...","de":"Verbindung wird überprüft…","en":"Verifying connection…","es":"Verificando conexión…","fr":"Vérification de la connexion…","hi":"कनेक्शन सत्यापित किया जा रहा है…","id":"Memverifikasi koneksi…","pt-BR":"Verificando conexão…","ru":"Проверка соединения…","ur":"کنکشن کی تصدیق ہو رہی ہے…","zh-CN":"正在验证连接..."};

export function settings_git_workflow_verifying(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
