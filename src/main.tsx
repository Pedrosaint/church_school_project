import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import appRouter from "./config/routes";
import "leaflet/dist/leaflet.css";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Toaster } from 'sonner';


const routes = createBrowserRouter(appRouter());
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes} />
      <Toaster richColors position="top-right" />
    </Provider>
  </StrictMode>,
);
