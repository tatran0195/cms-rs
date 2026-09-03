import { getLocale } from '../runtime.js';

const translations = {"ar":"إلغاء كل جلسات القرّاء وتعطيل تسليم JWT فورًا؟ سيفقد القرّاء الوصول مباشرة.","bn":"জরুরী প্রতি পাঠক অধিবেশন প্রত্যাহার করে JWT হ্যান্ডঅফ অক্ষম করবেন? পাঠকরা অবিলম্বে অ্যাক্সেস হারাবেন।","de":"Jede Lesersitzung im Notfall widerrufen und die JWT-Übergabe deaktivieren? Leser verlieren sofort den Zugriff.","en":"Emergency revoke every reader session and disable JWT handoff? Readers will immediately lose access.","es":"¿Revocar de emergencia cada sesión del lector y deshabilitar la transferencia JWT? Los lectores perderán el acceso inmediatamente.","fr":"Révoquer d'urgence chaque session de lecteur et désactiver le transfert JWT ? Les lecteurs perdront immédiatement l’accès.","hi":"आपातकाल प्रत्येक पाठक सत्र को रद्द कर देता है और JWT हैंडऑफ़ को अक्षम कर देता है? पाठक तुरंत पहुंच खो देंगे.","id":"Cabut darurat setiap sesi pembaca dan nonaktifkan handoff JWT? Pembaca akan segera kehilangan akses.","pt-BR":"Revogar emergencialmente todas as sessões do leitor e desativar a transferência de JWT? Os leitores perderão imediatamente o acesso.","ru":"Экстренно отменить каждый сеанс чтения и отключить передачу обслуживания JWT? Читатели сразу потеряют доступ.","ur":"ہر ریڈر سیشن کو ہنگامی طور پر منسوخ کریں اور JWT ہینڈ آف کو غیر فعال کریں؟ قارئین فوری طور پر رسائی سے محروم ہو جائیں گے۔","zh-CN":"紧急撤销每个读取器会话并禁用 JWT 切换？读者将立即失去访问权限。"};

export function settings_authentication_reader_emergencyconfirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
