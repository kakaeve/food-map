import React from 'react'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
  return (
    <main>
      {NavigationPreloadManager.state === 'loading' && <p>로딩중</p>}
      <Outlet />
    </main>
  )
}

export default RootPage
