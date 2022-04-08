import React, {useState} from 'react'
import { PageHeader, Button } from 'antd';
import { LinkOutlined } from '@ant-design/icons';

const Header = () => {
  const [headData, setHeadData] = useState('0 ~ 30 days, 1%, 31 ~ 60 days 2%, 60 ~ 90 days, 5%');
  const [reward, setReward] = useState(1207);

  return (
    <div>
      <PageHeader
    className="site-page-header"
    subTitle={headData}
    extra={[
      <Button key="1" size="large" type="primary" icon={<LinkOutlined />}>
        Connect Wallet
      </Button>,
      <Button type="primary" key="2" size='large' style={{ background: "green", borderColor: "green" }}>
      {`Reward Per Day: ${reward}`}
    </Button>
    ]}
    />
    <br/>
    </div>
  )
}

export default Header