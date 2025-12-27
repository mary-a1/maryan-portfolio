import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export function formatDate(date: string) {
//   let currentDate = new Date().getTime();
//   if (!date.includes("T")) {
//     date = `${date}T00:00:00`;
//   }
//   let targetDate = new Date(date).getTime();
//   let timeDifference = Math.abs(currentDate - targetDate);
//   let daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

//   let fullDate = new Date(date).toLocaleString("en-us", {
//     month: "long",
//     day: "numeric",
//     year: "numeric",
//   });

//   if (daysAgo < 1) {
//     return "Today";
//   } else if (daysAgo < 7) {
//     return `${fullDate} (${daysAgo}d ago)`;
//   } else if (daysAgo < 30) {
//     const weeksAgo = Math.floor(daysAgo / 7);
//     return `${fullDate} (${weeksAgo}w ago)`;
//   } else if (daysAgo < 365) {
//     const monthsAgo = Math.floor(daysAgo / 30);
//     return `${fullDate} (${monthsAgo}mo ago)`;
//   } else {
//     const yearsAgo = Math.floor(daysAgo / 365);
//     return `${fullDate} (${yearsAgo}y ago)`;
//   }
// }
export function formatDate(date?: string) {
  if (!date) return "";

  let normalizedDate = date;

  if (!normalizedDate.includes("T")) {
    normalizedDate = `${normalizedDate}T00:00:00`;
  }

  const targetDate = new Date(normalizedDate).getTime();
  const currentDate = new Date().getTime();
  const difference = currentDate - targetDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  if (days < 1) return "Today";
  if (days === 1) return "Yesterday";
  if (days < 30) return `${days} days ago`;

  const months = Math.floor(days / 30);
  if (months < 12) return `${months} months ago`;

  const years = Math.floor(months / 12);
  return `${years} years ago`;
}
