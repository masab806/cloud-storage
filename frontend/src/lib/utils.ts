import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatFileSize = (bytes: number): string => {
  if (bytes >= 1073741824) { // 1 GB
    return (bytes / 1073741824).toFixed(2) + " GB";
  } else if (bytes >= 1048576) { // 1 MB
    return (bytes / 1048576).toFixed(2) + " MB";
  } else if (bytes >= 1024) { // 1 KB
    return (bytes / 1024).toFixed(2) + " KB";
  } else {
    return bytes + " B";
  }
};

export const formatDate = (isoString: string): string => {
  const date = new Date(isoString);

  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "short",   
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
};
