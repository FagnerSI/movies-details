export function limitString(text: string, limit = 200) {
  if (text.length > limit) {
    return text.slice(0, limit); 
  }
  return text;
}