import Button from '~/components/Button/Button';
import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5c98890331f20987545f2483aacf443d.jpeg?x-expires=1687269600&x-signature=G0OFtzDbmMHeIxBHG5v4dZPLWKw%3D"
                    alt="avatar"
                />
                <Button className={cx('follow-btn')} primary>
                    Follow
                </Button>
            </div>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>tiger050794</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Son Tung M-TP</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>4.7M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>39M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
