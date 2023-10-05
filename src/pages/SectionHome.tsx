import { Component } from "preact";
import { PropsWithSite, SiteSection } from "../types";
import sortPosts from "../utils/sortPosts";
import Page from "./Page";

interface SectionHomeProps extends PropsWithSite {
    section: SiteSection;
}

export default class SectionHome extends Component<SectionHomeProps> {

    render() {
        const { site, section } = this.props;
        const { pages } = site;

        const filteredPages = pages?.filter(page => page.path.startsWith(section.id || '')) || [];
        if (filteredPages.length === 0) {
            return <h1>Welcome!</h1>
        }

        // sort them out
        const sortedPages = sortPosts(filteredPages);

        return sortedPages.map(page => {
            return <Page page={page} site={site} />
        });
    }

}
