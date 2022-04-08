import React, {useState} from 'react';
import { Typography } from 'antd';
import { List} from 'antd';

const RewardList = () => {
  const [titleData, settitleData] = useState([
    {
      title: 'Total Pending Token',
      value: 120350,
    },
    {
      title: 'Total Pending Reward',
      value: 2605,
    },
    {
      title: 'Total Claimed Reward',
      value:500
    },
  ]);
  
  return (
    <>
    <div className='ui center aligned container'>
       <List
    itemLayout="horizontal"
    dataSource={titleData}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          title={<Typography.Title level={4}>{`${item.title}: ${item.value}`}</Typography.Title>}
        />
      </List.Item>
    )}
  />
      <div className="ui buttons" bis_skin_checked="1">
        <button className="ui  big red button">Claim All</button>
        <div className="or" bis_skin_checked="1"></div>
        <button className="ui big  red button">Withdraw All</button>
      </div>
    </div>
    <br />
    </>
  )
}

export default RewardList