export function convertBytes(bytes: number) {
  if (bytes < 1024) {
    return bytes + " B";
  } else if (bytes < (1024 * 1024)) {
    return  Math.round((bytes / 1024) * 100) / 100 + " KB";
  } else if (bytes < (1024 * 1024 * 1024)) {
    return Math.round((bytes / (1024 * 1024) * 10)) / 10 + " MB";
  } else {
    return Math.round((bytes / (1024 * 1024 * 1024)) * 10) / 10 + " GB";
  }
}