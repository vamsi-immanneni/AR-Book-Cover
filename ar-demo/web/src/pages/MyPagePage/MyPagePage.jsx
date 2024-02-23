import { Link, routes } from '@redwoodjs/router'
import { Metadata } from '@redwoodjs/web'

const MyPagePage = () => {
  return (
    <>
      <Metadata title="MyPage" description="MyPage page" />

      <h1>MyPagePage</h1>
      <p>
        Find me in <code>./web/src/pages/MyPagePage/MyPagePage.jsx</code>
      </p>
      <p>
        My default route is named <code>myPage</code>, link to me with `
        <Link to={routes.myPage()}>MyPage</Link>`
      </p>
    </>
  )
}

export default MyPagePage
