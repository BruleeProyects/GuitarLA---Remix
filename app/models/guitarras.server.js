//Trae todas als guitarras
export async function getGuitarras() {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
    const resultado = await respuesta.json()
    return resultado
}

//trae una guitarra en específico
export async function getGuitarra(url) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
    const resultado = await respuesta.json()
    return resultado 
}