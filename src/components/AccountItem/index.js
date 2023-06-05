import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/5c98890331f20987545f2483aacf443d.jpeg?x-expires=1686146400&x-signature=%2Bf2zPbkvoxwipv0pjMR0XkaUGy0%3D"
                alt="profile"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>tiger050794</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} size="1x" color="gray" />
                </h4>
                <span className={cx('username')}>Son Tung M-TP</span>
            </div>
        </div>
    );
}

export default AccountItem;
