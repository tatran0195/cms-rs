import { getLocale } from '../runtime.js';

const translations = {"ar":"تظهر الإشعارات داخل التطبيق تحت أيقونة الجرس في الشريط العلوي.","bn":"শিরোনামে বেল আইকনের নিচে অ্যাপ-মধ্যস্থ বিজ্ঞপ্তিগুলি উপস্থিত হয়৷","de":"In-App-Benachrichtigungen werden unter dem Glockensymbol in der Kopfzeile angezeigt.","en":"In-app notifications appear under the bell icon in the header.","es":"Las notificaciones dentro de la aplicación aparecen debajo del ícono de campana en el encabezado.","fr":"Les notifications dans l'application apparaissent sous l'icône en forme de cloche dans l'en-tête.","hi":"इन-ऐप सूचनाएं हेडर में घंटी आइकन के नीचे दिखाई देती हैं।","id":"Notifikasi dalam aplikasi muncul di bawah ikon lonceng di header.","pt-BR":"As notificações no aplicativo aparecem sob o ícone de sino no cabeçalho.","ru":"Уведомления в приложении отображаются под значком колокольчика в заголовке.","ur":"درون ایپ اطلاعات ہیڈر میں گھنٹی کے آئیکن کے نیچے ظاہر ہوتی ہیں۔","zh-CN":"应用内通知显示在标题中的响铃图标下方。"};

export function notifications_settingshint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
