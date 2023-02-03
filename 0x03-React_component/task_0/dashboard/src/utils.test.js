import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("returns current year", () => {
	expect(getFullYear()).toBe(2022);
});

test("correct footer copy", () => {
	expect(getFooterCopy(true)).toBe("Holberton School");
	expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("latest notifications", () => {
	expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});
