import { getLocale } from '../runtime.js';

const translations = {"ar":"إعادة التوجيه إلى المسار","bn":"পথে পুনঃনির্দেশ করুন","de":"Zum Pfad weiterleiten","en":"Redirect to path","es":"Redirigir a la ruta","fr":"Redirection vers le chemin","hi":"पथ पर पुनर्निर्देशित करें","id":"Arahkan ulang ke jalur","pt-BR":"Redirecionar para o caminho","ru":"Перенаправление на путь","ur":"راستے پر ری ڈائریکٹ کریں۔","zh-CN":"重定向到路径"};

export function settings_redirects_tolabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
