import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        {/* <div className="search">
          <input type="text" placeholder="Search ..."/>
          <SearchIcon />
        </div> */}
        <div className="items">
          {/* <div className="item">
              <LanguageIcon className="icon"/>
              English
          </div> */}
          {/* <div className="item">
              <FullscreenExitIcon className="icon"/>
          </div> */}
          {/* <div className="item">
              <NotificationsNoneOutlinedIcon className="icon"/>
              <div className="counter">1</div>
          </div>
          <div className="item">
              <ChatBubbleOutlineOutlinedIcon className="icon"/>
              <div className="counter">2</div>
          </div> */}
          {/* <div className="item">
              < FormatListBulletedOutlinedIcon className="icon"/>
          </div> */}
          {/* <div className="item">
              < AccountCircleIcon />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar
