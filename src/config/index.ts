import { ENIcon, VIIcon } from "@/assets/png";

export const topicsData = [
    "Anime",
    "New",
    "Netflix",
    "Love",
    "Science Fiction",
    "Fantasy",
    "Science",
    "Education",
    "Environment",
    "Technology",
    "Food",
    "Life",
    "Defense and security",
];

export interface OptionLanguages {
    label: string;
    value: string;
    icon: any;
}

export const TOPICSOPTIONS = [
    {
        value: "Anime",
        label: "Anime",
    },
    {
        value: "New",
        label: "New",
    },
    {
        value: "Netflix",
        label: "Netflix",
    },
    {
        value: "Love",
        label: "Love",
    },
    {
        value: "Science Fiction",
        label: "Science Fiction",
    },
    {
        value: "Fantasy",
        label: "Fantasy",
    },
    {
        value: "Science",
        label: "Science",
    },
    {
        value: "Education",
        label: "Education",
    },
    {
        value: "Environment",
        label: "Environment",
    },
    {
        value: "Technology",
        label: "Technology",
    },
    {
        value: "Food",
        label: "Food",
    },
    {
        value: "Life",
        label: "Life",
    },
    {
        value: "Defense and security",
        label: "Defense and security",
    },
];

export const OPTIONS_LANGUAGES: OptionLanguages[] = [
    {
        label: "EN",
        value: "en",
        icon: ENIcon,
    },
    {
        label: "VI",
        value: "vi",
        icon: VIIcon,
    },
];
