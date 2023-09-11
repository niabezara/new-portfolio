export function formatDate(date: string | number | Date) {
  const format: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
  };
  return new Date(date).toLocaleDateString("us-US", format);
}

export function formatName(name: string) {
  const formattedName = name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return formattedName;
}
