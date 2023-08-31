const iconMap: Record<string, string> = {
    github: '/public/github.svg',
    twitter: '/public/twitter.svg',
    instagram: '/public/instagram.svg',
    linkedin: '/public/linkedin.svg',
    ycombinator: '/public/ycombinator.svg',
    facebook: '/public/facebook.svg',
    stackoverflow: '/public/stackoverflow.svg',
    gitlab: '/public/gitlab.svg',
    medium: '/public/medium.svg',
}

const SvgIcon = ({ type }: { type: string }) => {
    type = type.toLowerCase().trim();
    if (iconMap[type]) {
        return <img width='24' height='24' class='svg-icon' src={iconMap[type]} alt={type} />
    }

    return null;
}

export default SvgIcon;
