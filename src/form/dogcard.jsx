import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Avatar, Spin } from 'antd';
import { EditOutlined, LoadingOutlined } from '@ant-design/icons';
import axios from 'axios';

const { Meta } = Card;

// function DogCard() {
//   const [dogs, setDogs] = useState(null);
//   const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('127.0.0.1:3001/api/v1/dogs').then();
  });
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img alt='' src='' />}
        actions={[<EditOutlined key='edit' />]}
      >
        <Meta
          avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
          title={dogs}
          description={dogs}
        />
      </Card>
    </div>
  );
}

export default DogCard;
