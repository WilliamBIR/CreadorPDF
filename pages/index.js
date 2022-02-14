import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const columnas=['Descripcion','Precio','Cantidad','Subtotal']
  const datos=[
    {
      descripcion:'Comercio electronico',
      precio:3299.00,
      cantidad:1,
      subtotal:3299.00
    },{
      descripcion:'Blog',
      precio:599.00,
      cantidad:1,
      subtotal:599.00
    },{
      descripcion:'CMS',
      precio:499.00,
      cantidad:1,
      subtotal:499.00
    },{
      descripcion:'Hosting',
      precio:1299.00,
      cantidad:1,
      subtotal:1299.00
    },
  ]
  const datos2=[
    [
      'Comercio electronico',
      3299.00,
      1,
      3299.00
    ],[
      'Blog',
      599.00,
      1,
      599.00
    ],[
      'CMS',
      499.00,
      1,
      499.00
    ],[
      'Hosting',
      1299.00,
      1,
      1299.00
    ],
  ]
  async function handleGuardar(e){
    e.preventDefault()
    const resultados= await fetch('api/pdf/crearconjslib',{
      method:'POST',
      body:JSON.stringify({
        datos,
        columnas
      })
    }).then(res=>res.json())
    alert('Success!!')
  }
  return (
    <div>
      <form onSubmit={handleGuardar}>
      <button type='onSubmit'>Guardar</button>
      </form>
    </div>
  )
}
