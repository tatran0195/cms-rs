import { getLocale } from '../runtime.js';

const translations = {"ar":"اختبار JWT","bn":"পরীক্ষা JWT","de":"Testen Sie JWT","en":"Test JWT","es":"Prueba JWT","fr":"Testez JWT","hi":"परीक्षण JWT","id":"Uji JWT","pt-BR":"Teste JWT","ru":"Тест JWT","ur":"ٹیسٹ JWT","zh-CN":"测试 JWT"};

export function settings_authentication_reader_jwttest(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
