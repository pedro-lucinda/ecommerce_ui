import { addDays, getUnixTime } from "date-fns";

type IAddDateAndFormatToString = {
	date: Date | string;
	days: number;
};
export const addDateAndFormatToString = ({
	date,
	days,
}: IAddDateAndFormatToString) =>
	addDays(new Date(date), days + 1).toDateString();

export const addDaysToDate = (date: number, days: number) =>
	addDays(new Date(date), days);

export const toTimeStamp = (date: Date) => getUnixTime(new Date(date));

export const covertISODateToString = (date: Date) =>
	String(new Date(date).toISOString().substr(0, 10));
