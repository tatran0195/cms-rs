import { getLocale } from '../runtime.js';

const translations = {"ar":"انقل مستنداتك الحالية إلى Nibleaf من منصة أخرى. الاستيراد باتجاه واحد ويمكن إعادة تشغيله بأمان.","bn":"অন্য প্ল্যাটফর্ম থেকে আপনার বিদ্যমান নথিগুলিকে Nibleaf এ আনুন৷ আমদানি একমুখী এবং পুনরায় চালানো নিরাপদ।","de":"Bringen Sie Ihre vorhandenen Dokumente von einer anderen Plattform in Nibleaf. Importe erfolgen nur in eine Richtung und können sicher erneut ausgeführt werden.","en":"Bring your existing docs into Nibleaf from another platform. Imports are one-way and safe to re-run.","es":"Traiga sus documentos existentes a Nibleaf desde otra plataforma. Las importaciones son unidireccionales y seguras de volver a ejecutar.","fr":"Importez vos documents existants dans Nibleaf depuis une autre plateforme. Les importations sont à sens unique et peuvent être réexécutées en toute sécurité.","hi":"अपने मौजूदा दस्तावेज़ों को किसी अन्य प्लेटफ़ॉर्म से Nibleaf में लाएँ। आयात एक तरफ़ा है और दोबारा चलाना सुरक्षित है।","id":"Bawa dokumen Anda yang ada ke Nibleaf dari platform lain. Impor bersifat satu arah dan aman untuk dijalankan kembali.","pt-BR":"Traga seus documentos existentes para Nibleaf de outra plataforma. As importações são unilaterais e seguras para serem executadas novamente.","ru":"Перенесите существующие документы в Nibleaf с другой платформы. Импорт односторонний и его можно безопасно повторить.","ur":"اپنے موجودہ دستاویزات کو کسی دوسرے پلیٹ فارم سے Nibleaf میں لائیں۔ درآمدات یک طرفہ اور دوبارہ چلانے کے لیے محفوظ ہیں۔","zh-CN":"将您现有的文档从另一个平台引入 Nibleaf 。导入是单向的并且可以安全地重新运行。"};

export function settings_import_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
