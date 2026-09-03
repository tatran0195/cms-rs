import { getLocale } from '../runtime.js';

const translations = {"ar":"تلقَّ إشعارات النشر والتعليقات في قناة.","bn":"একটি চ্যানেলে স্থাপন এবং মন্তব্য বিজ্ঞপ্তি পান ।","de":"Erhalten Sie Bereitstellungs- und Kommentarbenachrichtigungen in einem Kanal.","en":"Get deploy and comment notifications in a channel.","es":"Obtenga notificaciones de implementación y comentarios en un canal.","fr":"Obtenez des notifications de déploiement et de commentaires dans un canal.","hi":"एक चैनल में तैनाती और टिप्पणी अधिसूचनाएं प्राप्त करें।","id":"Dapatkan menyebarkan dan komentar pemberitahuan dalam saluran.","pt-BR":"Obtenha notificações de implantação e comentários em um canal.","ru":"Развернуть и комментировать уведомления в канале.","ur":"چینل میں تعیناتی اور تبصروں کی اطلاعات حاصل کریں۔","zh-CN":"在频道中部署并评论通知。"};

export function settings_integrations_slack_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
