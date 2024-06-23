import { ENIcon, VIIcon } from "@/assets/png";

export const topicsData = ['Anime', 'New', 'Netflix', 'Love', 'Science Fiction', 'Fantasy'];

export interface OptionLanguages {
    label: string;
    value: string;
    icon: any;
}

export const OPTIONS_LANGUAGES: OptionLanguages[] = [
    { 
        label: 'EN', 
        value: 'en',
        icon: ENIcon,
    },
    { 
        label: 'VI', 
        value: 'vi',
        icon: VIIcon,
    },
];