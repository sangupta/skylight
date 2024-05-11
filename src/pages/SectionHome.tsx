import { Component } from "preact";
import { PropsWithSite, SiteSection } from "../types";
import Page from "./Page";
import filterPages from "../utils/filterPages";

interface SectionHomeProps extends PropsWithSite {
    section?: SiteSection;
}

export default class SectionHome extends Component<SectionHomeProps> {

    render() {
        const { site, section } = this.props;
        const { pages = [] } = site;

        const filtered = filterPages(pages, '', section?.id);
        return filtered.pages.map(page => {
            return <Page key={page.id} page={page} site={site} />
        });
    }

}
