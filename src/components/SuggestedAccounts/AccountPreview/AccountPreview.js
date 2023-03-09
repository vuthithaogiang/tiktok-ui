import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://images.unsplash.com/photo-1602918955248-d1bbfcbfae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zmxhc2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                    alt=""
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>nguynvana</strong>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Nguyen Van A</p>
            </div>

            <p className={cx('analystics')}>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Likes</span>
            </p>
        </div>
    );
}

export default AccountPreview;
