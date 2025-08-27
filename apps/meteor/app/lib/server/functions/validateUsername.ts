import { settings } from '../../../settings/server';

export const validateUsername = (username: string): boolean => {
	const settingsRegExp = settings.get('UTF8_User_Names_Validation');
	const defaultPattern = /^.+$/u;

	let usernameRegExp: RegExp;
	try {
		usernameRegExp = settingsRegExp ? new RegExp(`^${settingsRegExp}$`) : defaultPattern;
	} catch (e) {
		usernameRegExp = defaultPattern;
	}

	return usernameRegExp.test(username);
};
