import { Component } from "preact";
import { PropsWithSite, Site } from "./types";
import Sidebar from "./Sidebar";
import MainContent from "./components/MainContent";

export default class Skylight extends Component<PropsWithSite> {

    render() {
        const { site } = this.props;

        return <>
            <header>
                <a href='/' class='brand'>
                    <img class='brand-logo' src='/public/letter-s.jpg' alt='S' />
                    <span class='brand-name'>sangupta</span>
                </a>
            </header>
            <div className='content'>
                <aside className='sidebar'>
                    <Sidebar site={site} />
                </aside>
                <main>
                    <MainContent site={site} />
                </main>
            </div>
            <footer>
                Copyright &copy; 2023, Sandeep Gupta. Made with <span class='heart'>&hearts;</span> on a cloudy super moon night.
            </footer>
        </>
    }
}
