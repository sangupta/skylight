import { Component } from "preact";
import { PropsWithSite } from "../types";
import sortPosts from "../utils/sortPosts";
import Page from "./Page";

export default class SiteHome extends Component<PropsWithSite> {

    render() {
        const { site } = this.props;
        const { pages, blogs } = site;

        // filter pages that are part of blogs
        const filteredPages = pages?.filter(page => {
            const blog = blogs?.find(blog => page.path.startsWith(blog.path));
            return !!blog;
        }) || [];

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
