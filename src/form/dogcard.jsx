import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Avatar, Spin } from 'antd';
import { EditOutlined, LoadingOutlined } from '@ant-design/icons';
import { Axios } from 'axios';

const { Meta } = Card;

function DogCard() {
  const [dogs, setDogs] = useState(null);
  const [loading, setLoading] = useState(true);

  return (
    <Card
      style={{ width: 300 }}
      cover={<img alt='' src='' />}
      actions={[<EditOutlined key='edit' />]}
    >
      <Meta
        avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
        title='Dog Name'
        description='This is Dog description'
      />
    </Card>
  );
}

export default DogCard;
