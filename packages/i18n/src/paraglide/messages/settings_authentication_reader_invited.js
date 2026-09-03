import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت دعوة القارئ. نُسخ الرابط لمرة واحدة عندما كان الوصول إلى الحافظة متاحًا.","bn":"পাঠক আমন্ত্রিত। ক্লিপবোর্ড অ্যাক্সেস উপলব্ধ থাকাকালীন এক-কালীন লিঙ্কটি অনুলিপি করা হয়েছিল৷","de":"Leser eingeladen. Der einmalige Link wurde kopiert, als der Zugriff auf die Zwischenablage verfügbar war.","en":"Reader invited. The one-time link was copied when clipboard access was available.","es":"Lector invitado. El enlace único se copió cuando el acceso al portapapeles estaba disponible.","fr":"Lecteur invité. Le lien unique a été copié lorsque l'accès au presse-papiers était disponible.","hi":"पाठक आमंत्रित. क्लिपबोर्ड एक्सेस उपलब्ध होने पर एक बार का लिंक कॉपी किया गया था।","id":"Pembaca diundang. Tautan satu kali disalin ketika akses papan klip tersedia.","pt-BR":"Leitor convidado. O link único foi copiado quando o acesso à área de transferência estava disponível.","ru":"Читатель приглашен. Одноразовая ссылка была скопирована, когда был доступен доступ к буферу обмена.","ur":"قارئین کو مدعو کیا گیا۔ کلپ بورڈ تک رسائی دستیاب ہونے پر ایک بار کا لنک کاپی کیا گیا تھا۔","zh-CN":"读者受邀。当剪贴板访问可用时，会复制一次性链接。"};

export function settings_authentication_reader_invited(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
