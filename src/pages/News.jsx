import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/CryptoNewsApi';
import { useGetCryptosQuery } from '../services/CryptoApi';
import Loading from '../components/Loading';

const { Text } = Typography;
const { Option } = Select;
const demoImage =
  'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

function News({ simplified }) {
  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');

  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory,
    count: simplified ? 6 : 12,
  });

  const { data } = useGetCryptosQuery(100);

  if (!cryptoNews?.value) return <Loading />;

  return (
    <Row gutter={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="select crypto"
            optionFilterPop="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) =>
              option.childresn.toLowerCase().indexOf(input.toLowerCase())
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((coin) => (
              <Option value={coin.name}> {coin.name}</Option>
            ))}
          </Select>
        </Col>
      )}

      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <h3 className="news-title" level={4}>
                  {news.name}{' '}
                </h3>
                <img
                  src={news?.image?.thumbnail?.contentUrl || demoImage}
                  alt="newsimage"
                  className="news-image"
                />
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <div>
                  <Avatar
                    src={
                      news.provider[0]?.image?.thumbnail?.contentUrl ||
                      demoImage
                    }
                    alt="news"
                  />
                  <Text>
                    {' '}
                    {moment(news.datePublished).startOf('ss').fromNow()}
                  </Text>
                </div>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default News;
