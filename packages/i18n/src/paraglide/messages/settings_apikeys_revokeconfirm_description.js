import { getLocale } from '../runtime.js';

const translations = {"ar":"سيؤدي هذا إلى تعطيل {name} نهائيًا، وستفقد التطبيقات التي تستخدمه الوصول فورًا.","bn":"এটি {name} স্থায়ীভাবে অক্ষম করবে। এটি ব্যবহারকারী ক্লায়েন্টরা সঙ্গে সঙ্গে অ্যাক্সেস হারাবে।","de":"Dadurch wird {name} dauerhaft deaktiviert. Verwendende Clients verlieren sofort den Zugriff.","en":"This permanently disables {name}. Clients using it will lose access immediately.","es":"Esto desactivará {name} de forma permanente. Los clientes que la usen perderán el acceso de inmediato.","fr":"Cette action désactivera définitivement {name}. Les clients qui l’utilisent perdront immédiatement l’accès.","hi":"यह {name} को स्थायी रूप से अक्षम कर देगा। इसका उपयोग करने वाले क्लाइंट तुरंत पहुँच खो देंगे।","id":"Tindakan ini menonaktifkan {name} secara permanen. Klien yang menggunakannya akan langsung kehilangan akses.","pt-BR":"Isso desativará {name} permanentemente. Os clientes que a usam perderão o acesso imediatamente.","ru":"Это навсегда отключит {name}. Использующие его клиенты немедленно потеряют доступ.","ur":"یہ {name} کو مستقل طور پر غیر فعال کر دے گا۔ اسے استعمال کرنے والے کلائنٹس فوراً رسائی کھو دیں گے۔","zh-CN":"这将永久禁用 {name}。使用该密钥的客户端将立即失去访问权限。"};

export function settings_apikeys_revokeconfirm_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
