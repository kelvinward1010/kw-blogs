export const cutString = (s: string) => {
    if (s === "") return;
    return s?.substring(0, 2)?.toLocaleUpperCase();
}