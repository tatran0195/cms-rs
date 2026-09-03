import { getLocale } from '../runtime.js';

const translations = {"ar":"هل تريد إزالة مرجع API هذا من عمليات النشر القادمة؟ سيبقى النشر الحالي دون تغيير حتى تنشر مجددًا.","bn":"ভবিষ্যতের প্রকাশনা থেকে এই API রেফারেন্সটি সরাতে চান? আপনি আবার প্রকাশ না করা পর্যন্ত বর্তমান লাইভ স্থাপনা অপরিবর্তিত থাকবে।","de":"Diese API-Referenz aus zukünftigen Veröffentlichungen entfernen? Die aktuelle Live-Bereitstellung bleibt unverändert, bis Sie sie erneut veröffentlichen.","en":"Remove this API reference from future publishes? The current live deployment stays unchanged until you publish again.","es":"¿Eliminar esta referencia API de futuras publicaciones? La implementación en vivo actual permanece sin cambios hasta que la publique nuevamente.","fr":"Supprimer cette référence API des futures publications ? Le déploiement en direct actuel reste inchangé jusqu'à ce que vous le publiiez à nouveau.","hi":"भविष्य के प्रकाशनों से इस API संदर्भ को हटा दें? जब तक आप दोबारा प्रकाशित नहीं करते तब तक वर्तमान लाइव परिनियोजन अपरिवर्तित रहता है।","id":"Hapus referensi API ini dari penerbitan mendatang? Penerapan langsung saat ini tetap tidak berubah hingga Anda memublikasikannya lagi.","pt-BR":"Remover esta referência API de publicações futuras? A implantação ativa atual permanece inalterada até você publicar novamente.","ru":"Удалить эту ссылку API из будущих публикаций? Текущее динамическое развертывание остается неизменным до тех пор, пока вы не опубликуете его снова.","ur":"اس API حوالہ کو مستقبل کی اشاعتوں سے ہٹائیں؟ موجودہ لائیو تعیناتی اس وقت تک برقرار رہے گی جب تک کہ آپ دوبارہ شائع نہ کریں۔","zh-CN":"从未来的发布中删除此 API 引用吗？当前的实时部署保持不变，直到您再次发布。"};

export function settings_openapi_deleteconfirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
