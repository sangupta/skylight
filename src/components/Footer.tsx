import { Component } from "preact";
import { PropsWithSite } from "../types";

export default class Footer extends Component<PropsWithSite> {

    renderName = () => {
        const { site } = this.props;
        const baseUrl = site.baseUrl || '';
        const name = site?.author?.name

        if (!name) {
            return null;
        }

        return baseUrl ? <>, <a href={baseUrl}>{name}</a></> : ', ' + name;
    }

    render() {
        const year = new Date().getFullYear();

        return <footer>
            Made with <span class='heart'>&hearts;</span> on a cloudy super moon night. Copyright &copy; {year}{this.renderName()}.
        </footer>
    }

}
