import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './Layout/RootLayout';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [{
        index: true,
        element: <HomePage />
      },
      {
        path: 'events',
        element: <EventsPage />,
      },
      {
        path: 'events/:eventId',
        element: <EventDetailPage />
      },
      {
        path: 'events/new',
        element: <NewEventPage />
      },
      {
        path: 'events/:eventId/new',
        element: <EditEventPage />
      }]
    }
  ])


  return (
    <RouterProvider router={router} />
  )
}

export default App
