import { formatDistanceToNow, parseISO } from "date-fns";


const TimeAgo = ({ timestamp }) => {
    let timeAgo = ''
    const date = parseISO(timestamp)
    const timePeriod = formatDistanceToNow(date)
    timeAgo = `${timePeriod} ago`

    return (
        <small> <i>

            {timeAgo}
        </i>
        </small>
    )
}

export default TimeAgo