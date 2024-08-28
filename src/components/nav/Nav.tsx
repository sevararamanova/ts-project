
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import like from '../../images/Like.png';
import logo from '../../images/Logo.png';
import notification from '../../images/Notification.png';
import profil from '../../images/Profil.png';
import settings from '../../images/Settings.png';
import './nav.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

function Nav() {
  const likedCount = useSelector((state: RootState) => state.likedCards.likedCards.length);

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__content">
          <img src={logo} alt="Logo" className="navbar__logo" />

          <Input
            placeholder="Search something here"
            prefix={<SearchOutlined className="navbar__search-icon"/>}
            className="navbar__search-input"
          />

          <div className="navbar__links">
            <Link to="/likedPage" className="navbar__link">
              <img src={like} alt="Likes" className="navbar__icon" />
              {likedCount > 0 && <span className="like-count">{likedCount}</span>}
            </Link>
            <Link to="/notifications" className="navbar__link">
              <img src={notification} alt="Notifications" className="navbar__icon" />
            </Link>
            <Link to="/settings" className="navbar__link">
              <img src={settings} alt="Settings" className="navbar__icon" />
            </Link>
            <Link to="/profile" className="navbar__link">
              <img src={profil} alt="Profile" className="navbar__icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
