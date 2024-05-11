import { Component } from "preact";
import { PropsWithSite, SitePage } from "../types";
import ReadableDate from "./ReadableDate";
import Tags from "./Tags";

interface ArchiveTileProps extends PropsWithSite {
    page: SitePage;
}

export default class ArchiveTile extends Component<ArchiveTileProps> {

    render() {
        const { page } = this.props;

        return <div class='archive-tile'>
            <div class='metadata'>
                <ReadableDate date={page.date} />
                <Tags tags={page.tags} />
            </div>
            <div class='post-details'>
                <h2>{page.title}</h2>
                <div class='summary'>{page.summary}</div>
            </div>
        </div>
    }

}
