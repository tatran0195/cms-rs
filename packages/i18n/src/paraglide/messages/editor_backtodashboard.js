import { getLocale } from '../runtime.js';

const translations = {"ar":"العودة إلى لوحة التحكم","bn":"ড্যাশবোর্ডে ফিরে যান","de":"Zurück zum Dashboard","en":"Back to dashboard","es":"Volver al tablero","fr":"Retour au tableau de bord","hi":"डैशबोर्ड पर वापस जाएँ","id":"Kembali ke dasbor","pt-BR":"Voltar ao painel","ru":"Вернуться к панели управления","ur":"ڈیش بورڈ پر واپس جائیں۔","zh-CN":"返回仪表板"};

export function editor_backtodashboard(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
