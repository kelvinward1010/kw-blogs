export const cutString = (s?: string) => {
    if (s === "") return;
    return s?.substring(0, 2)?.toLocaleUpperCase();
};

interface SearchPostsProps {
    topic?: string[];
    title?: string;
    limit?: number | string;
    neworold?: number | string;
}

export function convertToQueryString(props: SearchPostsProps): string {
    const { topic, title, limit, neworold } = props;

    const queryParams = [];
    if (topic) {
        queryParams.push(...topic.map((t) => `topic=${encodeURIComponent(t)}`));
    }
    if (title) {
        queryParams.push(`title=${encodeURIComponent(title)}`);
    }
    if (limit !== undefined) {
        queryParams.push(`limit=${limit}`);
    }
    if (neworold !== undefined) {
        queryParams.push(`neworold=${neworold}`);
    }

    // If no parameters are provided, return null or an empty string
    if (queryParams.length === 0) {
        return ""; // You can also return null here if that's more appropriate for your use case
    }

    const queryString = queryParams.join("&");
    return `?${queryString}`; // Add a question mark at the beginning
}
