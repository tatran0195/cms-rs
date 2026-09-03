import { getLocale } from '../runtime.js';

const translations = {"ar":"لم تتغير اتصالاتك الحالية. حاول تحميل الدليل مرة أخرى.","bn":"আপনার বিদ্যমান সংযোগগুলি পরিবর্তন করা হয়নি । ক্যাটালগটি আবার লোড করার চেষ্টা করুন ।","de":"Ihre bestehenden Verbindungen wurden nicht geändert. Versuchen Sie, den Katalog erneut zu laden.","en":"Your existing connections were not changed. Try loading the catalog again.","es":"Tus conexiones existentes no se han modificado. Intenta cargar el catálogo de nuevo.","fr":"Vos connexions n'ont pas été changées. Essayez de charger le catalogue à nouveau.","hi":"आपके मौजूदा कनेक्शन में बदलाव नहीं हुआ। फिर से कैटलॉग लोड करने की कोशिश करें।","id":"Koneksi Anda yang ada tidak berubah. Coba memuat katalog lagi.","pt-BR":"Suas conexões existentes não foram alteradas. Tente carregar o catálogo novamente.","ru":"Существующие связи не изменились. Попробуйте загрузить каталог еще раз.","ur":"آپ کے موجودہ کنکشنز تبدیل نہیں کیے گئے ۔ کیٹلاگ دوبارہ لوڈ کرنے کی کوشش کریں ۔","zh-CN":"您已有的连接没有更改 。 再加载目录一次"};

export function settings_integrations_loaderrordescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
