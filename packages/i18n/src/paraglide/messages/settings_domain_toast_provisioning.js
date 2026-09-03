import { getLocale } from '../runtime.js';

const translations = {"ar":"DNS جاهز وما زال تجهيز TLS جاريًا","bn":"DNS প্রস্তুত; TLS এখনও ব্যবস্থা করছে","de":"DNS ist bereit; TLS wird noch bereitgestellt","en":"DNS is ready; TLS is still provisioning","es":"El DNS está listo; TLS todavía está aprovisionando","fr":"Le DNS est prêt ; TLS est toujours en cours de provisionnement","hi":"डीएनएस तैयार है; टीएलएस अभी भी प्रावधान कर रहा है","id":"DNS sudah siap; TLS masih menyediakan","pt-BR":"O DNS está pronto; O TLS ainda está provisionando","ru":"DNS готов; TLS все еще инициализируется","ur":"DNS تیار ہے؛ TLS اب بھی فراہم کر رہا ہے۔","zh-CN":"DNS 已准备就绪； TLS 仍在配置中"};

export function settings_domain_toast_provisioning(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
