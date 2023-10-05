import { Component, FunctionComponent } from "preact";
import { SitePage } from "../types";

interface ReadingTimeProps {
    page: SitePage;
}
const ReadingTime: FunctionComponent<ReadingTimeProps> = ({ page }) => {
    if (page && page.readingTime) {
        return <>
            <span className='reading-time'>
                {page.readingTime} min read
            </span>
            <span className='spacer'>⏺</span>
        </>
    }

    return null;
}

export default ReadingTime;
