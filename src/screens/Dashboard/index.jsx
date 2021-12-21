import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { MdInventory } from 'react-icons/md';
import { AiFillFileText } from 'react-icons/ai';
import { RiHandCoinLine } from 'react-icons/ri';
import { GiPayMoney } from 'react-icons/gi';

import { StyledDiv } from './styled';

const Dashboard = (props) => {

  const history = useHistory();

  const [menus, setMenus] = useState([
    {
      title: 'Inventory',
      link: '/?menu=inventory',
      isActive: true,
      icon: <MdInventory size={ 80 } />
    },
    {
      title: '',
      link: '',
      isActive: false,
      // icon: <AiFillFileText size={ 80 } />
    },
    {
      title: '',
      link: '',
      isActive: false,
      // icon: <RiHandCoinLine size={ 80 } />
    },
    {
      title: '',
      link: '',
      isActive: false,
      // icon: <GiPayMoney size={ 80 } />
    },
    {
      title: '',
      link: '',
      isActive: false
    },
    {
      title: '',
      link: '',
      isActive: false
    },
    {
      title: '',
      link: '',
      isActive: false
    },
    {
      title: '',
      link: '',
      isActive: false
    },
    {
      title: '',
      link: '',
      isActive: false
    },
    {
      title: '',
      link: '',
      isActive: false
    },
    {
      title: '',
      link: '',
      isActive: false
    },
    {
      title: '',
      link: '',
      isActive: false
    },

  ]);

  const getGreetingTime = (m) => {
    var g = null; //return g

    if (!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.

    var split_afternoon = 12; //24hr time to split the afternoon
    var split_evening = 17; //24hr time to split the evening
    var currentHour = parseFloat(m.format("HH"));

    if (currentHour >= split_afternoon && currentHour <= split_evening) {
      g = "afternoon";
    } else if (currentHour >= split_evening) {
      g = "evening";
    } else {
      g = "morning";
    }

    return 'Good ' + g + ', ';
  };

  return (
    <StyledDiv>
      {/* <div className="hi">
        <h4>{ getGreetingTime(moment()) }</h4>
        <h3>username</h3>
      </div> */}
      <div className="card-wrapper">
        {
          menus.map((menu, menuIdx) => {
            return (
              <Card
                onClick={ () => menu.link ? history.push(menu.link) : {} }
                hoverable={ menu.isActive }
                className={ `menuCard ${ !menu.isActive && 'disabled' }` }
              >
                {
                  menu.icon &&
                  menu.icon
                }
                <p>{ menu.title }</p>
              </Card>
            );
          })
        }

      </div>

    </StyledDiv>
  );
};

export default Dashboard;
