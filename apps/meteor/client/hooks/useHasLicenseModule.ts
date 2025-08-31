import type { LicenseModule } from '@rocket.chat/core-typings';

export const useHasLicenseModule = (licenseName: LicenseModule | undefined): 'loading' | boolean => {
	return true;
};
