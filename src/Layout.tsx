import * as React from 'react';
import { NotFoundBoundary } from 'react-navi';
import { Footer, ToolbarMenu } from './Components';
import CssBaseline from '@material-ui/core/CssBaseline';

function renderNotFound() {
  return (
    <div className='Layout-error'>
      <h1>404 - Not Found</h1>
    </div>
  )
}

export default function Layout({ setContent, children }) {
  return (
    <div className="Layout" >
      <CssBaseline />
      <header className="Layout-header">
        <ToolbarMenu setContent={setContent}></ToolbarMenu>
      </header>
      <main>
        <NotFoundBoundary render={renderNotFound}>
            {children}
            <Footer setContent={setContent}></Footer>
        </NotFoundBoundary>
      </main>
    </div>
  )
}