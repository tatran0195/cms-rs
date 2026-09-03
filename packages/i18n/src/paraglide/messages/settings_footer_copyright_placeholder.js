import { getLocale } from '../runtime.js';

const translations = {"ar":"© 2026 Acme. جميع الحقوق محفوظة.","bn":"© 2026 Acme. সর্বস্বত্ব সংরক্ষিত","de":"© 2026 Acme. Alle Rechte vorbehalten.","en":"© 2026 Acme. All rights reserved.","es":"© 2026 Acme. Reservados todos los derechos.","fr":"© 2026 Acmé. Tous droits réservés.","hi":"© 2026 एक्मे। सर्वाधिकार सुरक्षित।","id":"© 2026 Puncak. Semua hak dilindungi undang-undang.","pt-BR":"© 2026 Acme. Todos os direitos reservados.","ru":"© 2026 Акме. Все права защищены.","ur":"© 2026 Acme. جملہ حقوق محفوظ ہیں۔","zh-CN":"© 2026 Acme。版权所有。"};

export function settings_footer_copyright_placeholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
