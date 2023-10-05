import { FunctionComponent } from "preact";

interface ReadableDateProps {
    date: number;
    class: string;
}

const ReadableDate: FunctionComponent<ReadableDateProps> = ({ date, class: className }) => {
    if (!date) {
        return null;
    }

    const d = new Date(date).toLocaleDateString('en-US');
    return <span class={className}>{d}</span>
}

export default ReadableDate;
