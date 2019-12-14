import * as React from 'react';
import { NotFoundBoundary } from 'react-navi';
import { Footer, Menu } from './Components';
import CssBaseline from '@material-ui/core/CssBaseline';

export default function Layout({ children }) {
  return (
    <div className="Layout" >
      <CssBaseline />
      <header className="Layout-header">
        <Menu></Menu>
      </header>
      <main>
        <NotFoundBoundary render={renderNotFound}>
            {children}
            <Footer></Footer>
        </NotFoundBoundary>
      </main>
    </div>
  )
}

function renderNotFound() {
  return (
    <div className='Layout-error'>
      <h1>404 - Not Found</h1>
    </div>
  )
}