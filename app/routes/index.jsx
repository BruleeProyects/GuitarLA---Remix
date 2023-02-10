import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import { getCurso } from '~/models/curso.server'
import { useLoaderData } from '@remix-run/react'
import ListadoGuitarras from '~/components/listado-guitarras'
import ListadoPost from '../components/listado-posts'
import Curso from '~/components/curso'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'

export function meta() {

}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader() {

  //Mejor performance que llamarlas de forma separada.
  const [guitarras, posts, curso] = await Promise.all([
    getGuitarras(),
    getPosts(),
    getCurso()
  ])

  return {
    guitarras: guitarras.data,
    posts: posts.data,
    curso : curso.data
  }
}

//Ruta por defecto, todas las demás serían x ej "localhost:300/nosotros"
function Index() {

  const { guitarras, posts, curso } = useLoaderData()

  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras
          guitarras={guitarras}
        />

        <Curso curso={curso.attributes}/>

        <section>
          <ListadoPost
            posts={posts}
          />
        </section>
      </main>
    </>
  )
}

export default Index