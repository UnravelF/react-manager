import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, HashRouter } from 'react-router-dom';
import './index.css';
import BaseRouter from './router/router1.tsx';
import { pageRouter } from './router/router2.tsx';
import Root from './router/router2.tsx';

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <HashRouter>
//       <BaseRouter />
//     </HashRouter>
//   </StrictMode>
// );
createRoot(document.getElementById('root')! as HTMLElement).render(
  <StrictMode>
    {/* <RouterProvider router={pageRouter} /> */}
    <HashRouter>
      <Root />
    </HashRouter>
  </StrictMode>
);
