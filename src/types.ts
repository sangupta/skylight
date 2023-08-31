export interface Site {
    blogs?: Blog[];
    sidebar: SiteSidebar;
    socials?: SocialLink[];
}

export interface Blog {
    label: string;
    path: string;
    description: string;
    archivePath: string;
    feedPath: string;
}

export interface SiteSidebar {
    showBlogs: boolean;
    links?: SiteLink[];
}

export interface SiteLink {
    label: string;
    path: string;
    description?: string;
}

export interface PropsWithSite {
    site: Site;
}

export interface SocialLink {
    type: string;
    link: string;
}
