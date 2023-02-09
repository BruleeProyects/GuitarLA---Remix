import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,

} from '@remix-run/react'
import styles from '~/styles/index.css' // al colocar '~' ayuda a redirigir por defecto desde ./app/ como se muestra en tsconfig.json en paths
import Header from '~/components/header'
import Footer from '~/components/footer'

//Para mejorar el seo
export function meta() {
    return(
        {
            charset: 'utf-8',
            title: 'GuitarLA - Remix',
            viewport: 'width=device-width,initial-scale=1'
        }
    )
}


//Para enlazar hojas de estilos
export function links(){
    return[
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
       
        //Agregar fuentes de google fonts
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        //Primero carga las fuentes de google font y luego la hoja de estilos propia.
        {
            rel: 'stylesheet',
            href: styles
        },
    ]
}

export default function App() {
    return(
        <Document>
            <Outlet/>
        </Document>
    ) 
}
//Reemplaza el html común
function Document({children}) {
    return (
        <html lang="es">
            <head>
                <Meta/>
                <Links/>
            </head>
            <body>
                <Header/>
                {children}
                <Footer/>

                {/* Ayuda a que no se refresque la pag cada vez que se navega desde el nav. */}
                <Scripts/> 
                {/* Para aplicar cambios automaticos en desarrollo */}
                <LiveReload/> 
            </body>
        </html>
    )
}