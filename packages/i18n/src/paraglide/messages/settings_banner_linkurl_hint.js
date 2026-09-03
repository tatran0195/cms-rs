import { getLocale } from '../runtime.js';

const translations = {"ar":"وجهة رابط الشريط. لا يظهر الرابط إلا عند تعيين عنوان URL.","bn":"যেখানে ব্যানার লিঙ্ক পয়েন্ট. একটি URL সেট করা হলেই লিঙ্কটি দেখায়।","de":"Wohin der Banner-Link zeigt. Der Link wird nur angezeigt, wenn eine URL festgelegt ist.","en":"Where the banner link points. The link only shows when a URL is set.","es":"Donde apunta el enlace del banner. El enlace solo se muestra cuando se establece una URL.","fr":"Où pointe le lien de la bannière. Le lien s'affiche uniquement lorsqu'une URL est définie.","hi":"जहां बैनर लिंक इंगित करता है. लिंक केवल तभी दिखता है जब कोई यूआरएल सेट किया जाता है।","id":"Dimana link banner menunjuk. Tautan hanya muncul ketika URL disetel.","pt-BR":"Para onde o link do banner aponta. O link só aparece quando um URL é definido.","ru":"Куда указывает ссылка на баннер. Ссылка отображается только в том случае, если задан URL-адрес.","ur":"جہاں بینر لنک پوائنٹس۔ لنک صرف تب ظاہر ہوتا ہے جب URL سیٹ کیا جاتا ہے۔","zh-CN":"横幅链接指向的位置。该链接仅在设置 URL 时显示。"};

export function settings_banner_linkurl_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
