import React, { useState } from 'react';
import { Menu, Avatar } from 'antd';
import { Link } from 'react-router-dom';

import {
  HomeOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from '@ant-design/icons';
import icon from '../assets/cryptocurrency.png';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <h3 className="logo">
          <Link to="/">Crypto Universe</Link>
        </h3>
        <button
          className="nav-menu-button"
          onClick={() => {
            console.log(open);
            setOpen((prev) => !prev);
          }}
        >
          <MenuOutlined style={{ color: '#fff', fontSize: '1.5rem' }} />
        </button>
      </div>

      <Menu theme="dark" className="nav-menu-desktop">
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies">Cryptocurrencies</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news">News</Link>
        </Menu.Item>
      </Menu>

      <Menu
        theme="dark"
        className={open ? 'nav-menu-opened' : 'nav-menu-closed'}
      >
        <Menu.Item icon={<HomeOutlined />}>
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined />}>
          <Link to="/cryptocurrencies" onClick={() => setOpen(false)}>
            Cryptocurrencies
          </Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined />}>
          <Link to="/news" onClick={() => setOpen(false)}>
            News
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
