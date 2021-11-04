export const normalizeText = (text: string): string => {
  return text.replace(/(<([^>]+)>)/gi, '');
};
