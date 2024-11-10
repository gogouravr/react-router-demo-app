import { useParams } from "react-router-dom"

export default function EventDetailPage() {
    const { eventId } = useParams();
    return (
        <div>
            <h1>
                EventDetail
            </h1>
            Event id: {eventId}
        </div>
    )
}
