import { Component } from "preact";
import { SiteLink } from "../types";

interface SidebarLinkProps {
    label: string;
    path: string;
    description?: string;
    links?: SiteLink[];
}

export default class SidebarLink extends Component<SidebarLinkProps> {

    render() {
        const { label, path, description, links } = this.props;

        return <div class='sidebar-link'>
            <a href={path}>{label}</a>
            {description && <div class='sidebar-kick'>{description}</div>}
            {links && <div class='sidebar-links'>
                {links.map(link => {
                    return <>
                        <a href={link.path}>{link.label}</a>
                        {link.description && <div class='link-desc'>{link.description}</div>}
                    </>
                })}
            </div>
            }
        </div>
    }

}
