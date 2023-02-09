import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta(){
  return {
    title: 'GuitarLA - Sobre Nosotros',
    description: 'Venta de guitarras y blog de música'
  }
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    },
    {
      rel: 'preload', //Sive para indicarle al navegador que en cuanto termine dem cargar, tambien carge esta img ya que puede ser muy pesada
      href: imagen,
      as: 'image'
    }
  ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
      <h2 className="heading">Nosotros</h2>

      <div className="contenido">
        <img src={imagen} alt='imagen sobre nosotros' />

        <div>
          <p>Quisque vulputate a turpis nec tincidunt. Cras egestas in orci in ullamcorper. Nunc quis auctor mauris. Aenean congue at mauris vitae accumsan.
            Fusce convallis magna in tellus rutrum gravida. Quisque efficitur orci sed ipsum commodo scelerisque. Pellentesque sollicitudin metus accumsan
            purus fringilla sollicitudin.</p>

          <p>Quisque vulputate a turpis nec tincidunt. Cras egestas in orci in ullamcorper. Nunc quis auctor mauris. Aenean congue at mauris vitae accumsan.
            Fusce convallis magna in tellus rutrum gravida. Quisque efficitur orci sed ipsum commodo scelerisque. Pellentesque sollicitudin metus accumsan
            purus fringilla sollicitudin.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros