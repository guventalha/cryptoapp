import React from 'react';
import './App.css';
import { Layout, Typography, Space } from 'antd';
import {
  Navbar,
  HomePage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from './components';
import { Link, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cryptocurrencies" element={<Cryptocurrencies />} />
              <Route path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route path="/news" element={<News />} />
            </Routes>
            <div className="footer">
              <Typography.Title
                level={5}
                style={{ color: 'white', textAlign: 'center' }}
              >
                Crypto Universe <br />
                All rights reserved
              </Typography.Title>
              <Space>
                <Link to="/">Home</Link>
                <Link to="/exchanges">Exchanges</Link>
                <Link to="/news">News</Link>
              </Space>
            </div>
          </div>
        </Layout>
      </div>
    </div>
  );
}

export default App;
