'use client'
import Home from '../templates/Home'

export default async function Index() {
  const props = {
    heading: 'Olha eu aqui',
  }


  return <Home {...props} />
}

// export function getServerSideProps() {

//   return {
//     props: {
//       heading: 'Olha eu aqui'
//     }
//   }
// }
