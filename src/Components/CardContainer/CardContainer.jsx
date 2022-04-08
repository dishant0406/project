import React, {useEffect, useState} from 'react';


const CardContainer = () => {
  const [cardhtml, setCardHtml] = useState([]);
  const [data, setData] = useState([
    {
      id: 1,
      tokens: 350,
      time: '2022/2/31',
      days: 30,
      claimed: 0,
      reward: 105
    },
    {
      id: 2,
      tokens: 20000,
      time: '2022/3/30',
      days: 10,
      claimed: 500,
      reward: 1500
    },
    {
      id: 3,
      tokens: 100000,
      time: '2022/3/31',
      days: 1,
      claimed: 0,
      reward: 1000
    },
    {
      id: 4,
      tokens: 20000,
      time: '2022/3/20',
      days: 10,
      claimed: 500,
      reward: 1500
    },
    {
      id: 5,
      tokens: 100000,
      time: '2022/3/31',
      days: 1,
      claimed: 0,
      reward: 1000
    },
    {
      id: 6,
      tokens: 350,
      time: '2022/2/31',
      days: 30,
      claimed: 0,
      reward: 105
    }
  ]);

  useEffect(() => {
    const cardDetail = data.map(item=>{
      return <div key={item.id} className="ui red centered card" bis_skin_checked="1">
      <div className="content" bis_skin_checked="1">
        <div className="header" bis_skin_checked="1">
          {`${item.tokens} Tokens`}
        </div>
        <div className="ui sub header" bis_skin_checked="1">
          {`Stacked Time: ${item.time}`}
        </div>
        <div className="ui sub header" bis_skin_checked="1">
          {`${item.days} Days Passed`}
        </div>
        <div className="ui sub header" bis_skin_checked="1">
          {`Claimed: ${item.claimed} Tokens`}
        </div>
        <div className="ui sub header" bis_skin_checked="1">
          {`Reward: ${item.reward} Tokens`}
        </div>
      </div>
      <div className="extra content" bis_skin_checked="1">
        <div className="ui two buttons" bis_skin_checked="1">
          <div className="ui basic green button" bis_skin_checked="1">Claim</div>
          <div className="ui basic red button" bis_skin_checked="1">Withdraw</div>
        </div>
      </div>
    </div>
    })

    setCardHtml(cardDetail);
    
  }, [data])
  
  return (
    <div>
    <div className="ui cards">
      {cardhtml}
    </div>
    </div>
  )
}

export default CardContainer