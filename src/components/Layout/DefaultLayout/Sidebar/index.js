import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';

import Menu, { MenuItem } from './Menu';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveIcon,
    UserGroupIcon,
    LiveActionIcon,
    UserGroupActionIcon,
} from '~/components/Icons';
import SuggestedAccounts from '~/components/SuggestedAccounts/SuggestedAccounts';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to="/" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to="/following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActionIcon />}
                />
                <MenuItem title="LIVE" to="/live" icon={<LiveIcon />} activeIcon={<LiveActionIcon />} />
            </Menu>

            <SuggestedAccounts lable="Suggested accounts" />
            <SuggestedAccounts lable="Following accounts" />
        </aside>
    );
}

export default Sidebar;
