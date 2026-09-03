import { getLocale } from '../runtime.js';

const translations = {"ar":"انسخ هذا السر الآن. لن يظهر مرة أخرى.","bn":"এখন এই গোপন অনুলিপি. এটা আর দেখানো হবে না।","de":"Kopieren Sie dieses Geheimnis jetzt. Es wird nicht erneut angezeigt.","en":"Copy this secret now. It will not be shown again.","es":"Copia este secreto ahora. No se volverá a mostrar.","fr":"Copiez ce secret maintenant. Il ne sera plus affiché.","hi":"अब इस रहस्य को कॉपी करें. इसे दोबारा नहीं दिखाया जाएगा.","id":"Salin rahasia ini sekarang. Itu tidak akan ditampilkan lagi.","pt-BR":"Copie este segredo agora. Não será mostrado novamente.","ru":"Скопируйте этот секрет сейчас. Оно больше не будет показано.","ur":"اب اس راز کو کاپی کریں۔ اسے دوبارہ نہیں دکھایا جائے گا۔","zh-CN":"现在复制这个秘密。它将不会再次显示。"};

export function settings_apikeys_created_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
