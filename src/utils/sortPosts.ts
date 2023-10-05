import { SitePage } from "../types";

export default function sortPosts(posts: SitePage[]): SitePage[] {
    return posts.sort((a, b) => b.date - a.date);
}
