import { Component, render } from 'preact';
import { Blog, PropsWithSite, Site, SiteLink, SocialLink } from './types';
import SidebarLink from './components/SidebarLink';
import SvgIcon from './components/SvgIcon';

export default class Sidebar extends Component<PropsWithSite> {

    renderBlogs(blogs?: Blog[]) {
        if (!blogs || blogs.length === 0) {
            return null;
        }

        return blogs?.map(blog => {
            const links: SiteLink[] = [];
            if (blog.archivePath) {
                links.push({ label: 'Archive', path: blog.archivePath });
            }
            if (blog.feedPath) {
                links.push({ label: 'RSS', path: blog.feedPath });
            }
            return <SidebarLink label={blog.label} path={blog.path} description={blog.description} links={links} />
        });
    }

    renderSocialLinks(socials?: SocialLink[]) {
        if (!socials) {
            return null;
        }

        return <div class='sidebar-socials'>
            {socials.map(social => {
                return <a class='social-link' href={social.link} target='_blank'>
                    <SvgIcon type={social.type} />
                </a>
            })}
        </div>
    }

    render() {
        const { site } = this.props;

        return <>
            {this.renderBlogs(site.blogs)}
            {this.renderSocialLinks(site.socials)}
        </>
    }

}
