import { getLocale } from '../runtime.js';

const translations = {"ar":"التوثيق العام متاح للجميع. التوثيق الخاص يتطلب عضوًا مسجّلًا في مساحة العمل.","bn":"পাবলিক ডক্স সকলের কাছে দৃশ্যমান। ব্যক্তিগত নথির জন্য একজন সাইন-ইন করা ওয়ার্কস্পেস সদস্য প্রয়োজন।","de":"Öffentliche Dokumente sind für alle sichtbar. Für private Dokumente ist ein angemeldetes Workspace-Mitglied erforderlich.","en":"Public docs are visible to everyone. Private docs require a signed-in workspace member.","es":"Los documentos públicos son visibles para todos. Los documentos privados requieren que un miembro del espacio de trabajo haya iniciado sesión.","fr":"Les documents publics sont visibles par tous. Les documents privés nécessitent un membre de l'espace de travail connecté.","hi":"सार्वजनिक दस्तावेज़ सभी के लिए दृश्यमान होते हैं. निजी दस्तावेज़ों के लिए एक साइन-इन कार्यक्षेत्र सदस्य की आवश्यकता होती है।","id":"Dokumen publik dapat dilihat oleh semua orang. Dokumen pribadi memerlukan anggota ruang kerja yang masuk.","pt-BR":"Os documentos públicos são visíveis para todos. Documentos privados exigem um membro do espaço de trabalho conectado.","ru":"Публичные документы видны всем. Для частных документов требуется вошедший в систему участник рабочей области.","ur":"عوامی دستاویزات ہر کسی کے لیے مرئی ہیں۔ نجی دستاویزات کے لیے سائن ان کردہ ورک اسپیس ممبر کی ضرورت ہوتی ہے۔","zh-CN":"公共文档对所有人都可见。私人文档需要已登录的工作区成员。"};

export function settings_authentication_mode_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
