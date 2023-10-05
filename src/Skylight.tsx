import { Component } from "preact";
import { PropsWithSite, Site } from "./types";
import Sidebar from "./Sidebar";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default class Skylight extends Component<PropsWithSite> {

    render() {
        const { site } = this.props;

        return <>
            <Header site={site} />
            <div className='content'>
                <aside className='sidebar'>
                    <Sidebar site={site} />
                </aside>
                <main>
                    <MainContent site={site} />
                </main>
            </div>
            <Footer site={site} />
        </>
    }
}
