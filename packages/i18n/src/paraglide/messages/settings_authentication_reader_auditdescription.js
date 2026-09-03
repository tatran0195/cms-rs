import { getLocale } from '../runtime.js';

const translations = {"ar":"تُحتفظ بالإجراءات الحساسة أمنيًا دون رموز أو JWT أو مفاتيح.","bn":"নিরাপত্তা-সংবেদনশীল ক্রিয়াগুলি টোকেন, JWT, বা কী ছাড়াই রাখা হয়।","de":"Sicherheitsrelevante Aktionen werden ohne Token, JWTs oder Schlüssel beibehalten.","en":"Security-sensitive actions are retained without tokens, JWTs, or keys.","es":"Las acciones sensibles a la seguridad se conservan sin tokens, JWT ni claves.","fr":"Les actions sensibles à la sécurité sont conservées sans jetons, JWT ou clés.","hi":"सुरक्षा-संवेदनशील कार्रवाइयों को टोकन, जेडब्ल्यूटी या कुंजियों के बिना बनाए रखा जाता है।","id":"Tindakan sensitif terhadap keamanan dipertahankan tanpa token, JWT, atau kunci.","pt-BR":"As ações sensíveis à segurança são retidas sem tokens, JWTs ou chaves.","ru":"Действия, чувствительные к безопасности, сохраняются без токенов, JWT или ключей.","ur":"حفاظتی حساس کارروائیوں کو بغیر ٹوکن، JWTs، یا کیز کے برقرار رکھا جاتا ہے۔","zh-CN":"安全敏感操作无需令牌、JWT 或密钥即可保留。"};

export function settings_authentication_reader_auditdescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
