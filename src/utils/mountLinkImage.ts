const BASE_URL_IMAGE = 'https://image.tmdb.org/t/p';

export function mountLinkImage(file_path: string, file_size: number = 0) {
    if(file_size){
       return `${BASE_URL_IMAGE}/w${file_size}/${file_path}}`
    }

    return `${BASE_URL_IMAGE}/original/${file_path}}`
}