import { Component } from "preact";
import { PageContent, PropsWithSite, Site, SitePage } from "../types";
import Link from "../components/Link";
import ReadingTime from "../components/ReadingTime";
import PageCategory from "../components/PageCategory";
import ReadableDate from "../components/ReadableDate";
import resolveUrl from "../utils/resolveUrl";
import PostContent from "../components/PostContent";

interface PageProps extends PropsWithSite {
    page: SitePage;
    summaryOnly?: boolean;
}

interface PageState {
    loading: boolean;
    error?: any;
    contentJson?: PageContent;
}

export default class Page extends Component<PageProps, PageState> {

    state: PageState = {
        loading: true
    }

    componentDidMount = async (): Promise<void> => {
        const { page, site } = this.props;
        const { content, contentPath } = page;
        if (content) {
            return;
        }

        if (!contentPath) {
            return;
        }

        const url = resolveUrl(site.baseUrl, contentPath);
        try {
            const response = await fetch(url);
            const json = await response.json();
            this.setState({ contentJson: json, loading: false });
        } catch (e: any) {
            this.setState({ error: e, loading: false });
        }
    }

    renderContent = () => {
        const { site, page, summaryOnly = false } = this.props;
        const { contentJson, loading, error } = this.state;

        if (page.content) {
            return <PostContent key={page.id} content={page.content} />
        }

        if (loading) {
            return <div class='loading'>Loading...</div>
        }

        if (error || !contentJson) {
            return <div class='alert alert-warning'>Unable to load page contents.</div>
        }

        const value = contentJson.data;
        return <PostContent key={page.id} content={value} summaryOnly={summaryOnly} />
    }

    render() {
        const { page, summaryOnly = false } = this.props;

        return <article class='post'>
            <h1 class='post-title'>
                <Link href={page.path}>{page.title}</Link>
            </h1>
            {!summaryOnly && <>
                <div class='post-metadata text-muted'>
                    <PageCategory page={page} />
                    <ReadingTime page={page} />
                    <ReadableDate class='published' date={page.date} />
                </div>
                <hr />
            </>
            }
            {this.renderContent()}
        </article>
    }

}
