import { Component } from "preact";
import { PageContent, PropsWithSite, SitePage } from "../types";
import Link from "../components/Link";
import ReadingTime from "../components/ReadingTime";
import PageCategory from "../components/PageCategory";
import ReadableDate from "../components/ReadableDate";

interface PageProps extends PropsWithSite {
    page: SitePage;
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
        const { page } = this.props;
        const { content, contentPath } = page;
        if (content) {
            return;
        }

        if (!contentPath) {
            return;
        }

        try {
            const response = await fetch(contentPath);
            const json = await response.json();
            this.setState({ contentJson: json, loading: false });
        } catch (e: any) {
            this.setState({ error: e, loading: false });
        }
    }

    renderContent = () => {
        const { page } = this.props;
        const { contentJson, loading, error } = this.state;

        if (page.content) {
            return page.content;
        }

        if (loading) {
            return <div class='loading'>Loading...</div>
        }

        if (error || !contentJson) {
            return <div class='alert alert-warning'>Unable to load page contents.</div>
        }

        const value = atob(contentJson.data);
        return value;
    }

    render() {
        const { page } = this.props;

        return <article class='page'>
            <h1>
                <Link href={page.path}>{page.title}</Link>
            </h1>
            <div class='page-metadata text-muted'>
                <PageCategory page={page} />
                <ReadingTime page={page} />
                <ReadableDate class='published' date={page.date} />
            </div>
            <hr />
            <div class='page-content'>
                {this.renderContent()}
            </div>
        </article>
    }

}
