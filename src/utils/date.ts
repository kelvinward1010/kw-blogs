export function formatDate(timestamp: string): string {
    const date = new Date(timestamp);
    const year = date.getFullYear().toString().slice(-4); // Get the last two digits of the year
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based, so add 1
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
}
