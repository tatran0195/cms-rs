import { getLocale } from '../runtime.js';

const translations = {"ar":"مستوى تحكم MCP للقراءة فقط","bn":"শুধু-পঠন MCP control plane","de":"Schreibgeschützte MCP-Steuerungsebene","en":"Read-only MCP control plane","es":"Plano de control MCP de solo lectura","fr":"Plan de contrôle MCP en lecture seule","hi":"केवल-पढ़ने योग्य MCP control plane","id":"Control plane MCP hanya-baca","pt-BR":"Plano de controle MCP somente leitura","ru":"Панель управления MCP только для чтения","ur":"صرف پڑھنے کے لیے MCP control plane","zh-CN":"只读 MCP 控制平面"};

export function marketing_release_mcpTitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
