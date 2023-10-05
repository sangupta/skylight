import { Component } from "preact";
import { PropsWithSite } from "./types";
import EventNames from "./EventNames";
import Evem from "./Evem";
import NotFound from "./pages/NotFound";
import Page from "./pages/Page";
import SiteHome from "./pages/SiteHome";
import SectionHome from "./pages/SectionHome";

interface RouterState {
    route?: string;
}

export default class Router extends Component<PropsWithSite> {

    state: RouterState = {
        route: window.location.pathname
    };

    componentDidMount(): void {
        window.addEventListener('popstate', this.handleBrowserBackButton);
        Evem.on(EventNames.ROUTE_CHANGE, this.changeRoute);
    }

    componentWillUnmount(): void {
        window.removeEventListener('popstate', this.handleBrowserBackButton);
        Evem.off(EventNames.ROUTE_CHANGE, this.changeRoute);
    }

    handleBrowserBackButton = (e: Event): void => {
        e.preventDefault();
        e.stopPropagation();

        const { pathname } = window.location;
        this.setState({ route: pathname });
    }

    changeRoute = (e: Event): void => {
        const ce = e as CustomEvent;
        const route = ce.detail.route;

        if (route !== this.state.route) {
            window.history.pushState({}, '', ce.detail.route);
            this.setState({ route: ce.detail.route });
        }
    }

    render() {
        const { site } = this.props;
        const { route = '' } = this.state;

        const cleanRoute = route.trim();
        const question = cleanRoute.indexOf('?');
        const path = question > -1 ? cleanRoute.substring(0, question) : cleanRoute;

        const page = site.pages?.find(page => page.path === path);
        if (!page) {
            // check if this page is the home page
            if (path === '/') {
                return <SiteHome site={site} />
            }

            // check if this is a blog home
            const section = site.sections?.find(section => section.id === path);
            if (section) {
                return <SectionHome site={site} section={section} />
            }

            // nothing to do
            return <NotFound />
        }

        return <Page page={page} site={site} />
    }

}
