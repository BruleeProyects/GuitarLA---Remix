import { getPosts } from "~/models/posts.server"
import { useLoaderData } from '@remix-run/react'
import ListadoPost from "~/components/listado-posts"

export async function loader() {
    const posts = await getPosts()
    return posts.data
}

export function meta() {
    return {
        title: 'GuitarLA - Nuestro Blog',
        description: 'GuitarLA, Venta de guitarras y blog de música'
    }
}

function Blog() {
    const posts = useLoaderData()
    return (
        <ListadoPost
            posts={posts}
        />
    )
}

export default Blog