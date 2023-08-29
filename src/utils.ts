export function convertUnixTimeStamp(timestamp: number) {
  const milliseconds = timestamp * 1000;
  const dateObj = new Date(milliseconds);
  const timeFormatter = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return timeFormatter.format(dateObj);
}

export function getDate() {
  const dateFormatter = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    weekday: "long",
  });
  return dateFormatter.format(new Date());
}

export function getTime() {
  const timeFormatter = new Intl.DateTimeFormat("en", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return timeFormatter.format(new Date());
}

export function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function getNameOfDay() {
  const dateFormatter = new Intl.DateTimeFormat("en", {
    weekday: "long",
  });
  return dateFormatter.format(new Date());
}
