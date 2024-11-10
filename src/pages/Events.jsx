import { Link } from "react-router-dom"

const EVENTS = [
    {
        id: 'e1',
        title: 'First event'
    },
    {
        id: 'e2',
        title: 'Second event'
    }
]

export default function EventsPage() {
    return (
        <div>
            <h1>Events Page</h1>
            <ul>
                {EVENTS.map(event => <li key={event.id}>
                    <Link to={event.id}>{event.title} </Link>
                </li>)}
            </ul>
        </div>
    )
}
