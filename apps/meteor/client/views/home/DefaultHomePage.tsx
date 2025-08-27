import { Box, CardGroup } from '@rocket.chat/fuselage';
import { useAtLeastOnePermission, useSetting, useTranslation, useRole, usePermission } from '@rocket.chat/ui-contexts';
import type { ReactElement } from 'react';

import CustomContentCard from './cards/CustomContentCard';
import Page from '../../components/Page/Page';
import PageScrollableContent from '../../components/Page/PageScrollableContent';

const CREATE_CHANNEL_PERMISSIONS = ['create-c', 'create-p'];

const DefaultHomePage = (): ReactElement => {
	const t = useTranslation();
	const canAddUsers = usePermission('view-user-administration');
	const isAdmin = useRole('admin');
	const canCreateChannel = useAtLeastOnePermission(CREATE_CHANNEL_PERMISSIONS);
	const isCustomContentBodyEmpty = useSetting('Layout_Home_Body', '') === '';
	const isCustomContentVisible = useSetting('Layout_Home_Custom_Block_Visible', false);

	return (
		<Page color='default' data-qa='page-home' data-qa-type='default' background='tint'>
			<PageScrollableContent>
				<Box mi='neg-x8'>
					<CardGroup wrap stretch>
						{(isAdmin || (isCustomContentVisible && !isCustomContentBodyEmpty)) && <CustomContentCard />}
					</CardGroup>
				</Box>
			</PageScrollableContent>
		</Page>
	);
};

export default DefaultHomePage;
