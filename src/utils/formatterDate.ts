
export const formatterDate = (date?: string, locale: string = 'pt-BR') => {

  const formatter = new Intl.DateTimeFormat(locale, {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  if(date){
    return formatter.format(new Date (date));
  } 

  return '';
}
