import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const ArPage = () => {
  return (
    <>
      <Metadata title="Ar" description="Ar page" />

      <h1>ArPage</h1>
      <p>
        Find me in <code>./web/src/pages/ARPage/ARPage.jsx</code>
      </p>
      <p>
        My default route is named <code>ar</code>, link to me with `
        <Link to={routes.ar()}>Ar</Link>`
      </p>
    </>
  )
}

export default ArPage
