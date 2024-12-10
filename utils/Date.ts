export const formatDateToDashFormat = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

export const timeStringToTimestamp = (timeStr: string): number => {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const today = new Date();
  today.setHours(hours, minutes, 0, 0);
  return Math.floor(today.getTime() / 1000);
};

export const convertTo12Hour = (time24: string): string => {
  if (!time24) return "";

  const [hours, minutes] = time24.split(":").map(Number);
  const period = hours >= 12 ? "PM" : "AM";
  let hours12 = hours % 12;
  hours12 = hours12 === 0 ? 12 : hours12;
  return `${hours12}:${minutes.toString().padStart(2, "0")} ${period}`;
};
