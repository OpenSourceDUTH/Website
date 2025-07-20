export function getLocaleFromPath(path: string): 'en' | 'el' {
  return path.startsWith('/el/') ? 'el' : 'en';
}

export function withLocalePrefix(path: string, locale: 'en' | 'el'): string {
  // If path is already localized, return as is
  if (locale === 'el' && path.startsWith('/el/')) {
    return path;
  }
  if (locale === 'en' && !path.startsWith('/el/')) {
    return path;
  }
  
  // Add or remove locale prefix
  if (locale === 'el') {
    return '/el' + (path.startsWith('/') ? path : '/' + path);
  } else {
    // Remove /el prefix for English
    return path.replace(/^\/el/, '') || '/';
  }
}

export function getLocalizedPath(path: string, currentUrl: URL): string {
  const currentLocale = getLocaleFromPath(currentUrl.pathname);
  return withLocalePrefix(path, currentLocale);
}
