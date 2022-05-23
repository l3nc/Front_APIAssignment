import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Avatar } from 'antd';
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Axios } from 'axios';

const { Meta } = Card;

function DogCard() {
  //   Axios.get('http://127.0.0.1:3001/api/v1/dogs');
  //   then.return(

  <Card
    style={{ width: 300 }}
    cover={
      <img
        alt='example'
        src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
      />
    }
    actions={[
      <SettingOutlined key='setting' />,
      <EditOutlined key='edit' />,
      <EllipsisOutlined key='ellipsis' />,
    ]}
  >
    <Meta
      avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
      title='Card title'
      description='This is the description'
    />
  </Card>;
}

export default DogCard;
