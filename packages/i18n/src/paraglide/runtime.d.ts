export const baseLocale: "en";
export const locales: readonly ["ar","bn","de","en","es","fr","hi","id","pt-BR","ru","ur","zh-CN"];
export type Locale = (typeof locales)[number];
export function getLocale(): string;
export function setLocale(locale: string, options?: { reload?: boolean }): Promise<void>;
