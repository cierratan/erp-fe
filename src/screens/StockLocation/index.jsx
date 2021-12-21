import React, { useEffect, useState } from 'react';
import { Table, Button, Space, Select, Form, Input, message } from 'antd';
import { useHistory } from 'react-router-dom';

import { StyledDiv } from './styled';
import env from '../../env';

function StockLocation() {
  const history = useHistory();
  const { Column } = Table;
  const [countries, setCountries] = useState([]);
  const [locations, setLocations] = useState([]);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });
  const [loading, setLoading] = useState(false);
  const [filterSearch, setFilterSearch] = useState({});
  const [filterCountryCode, setFilterCountryCode] = useState({});
  const [filterDescription, setFilterDescription] = useState({});
  let optionCountries = getOptionCountries(countries);

  useEffect(() => {
    let data = getCountries();
    data.then(result => {
      if (result.status && result.status !== 200 || result.status !== 201) {
        message.error(result.error);
      }
      setCountries(result);
      optionCountries = getOptionCountries(countries);
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    let data = getItems(filterSearch);
    data.then(result => {
      if (result.status && result.status !== 200 || result.status !== 201) {
        message.error(result.error);
      }
      const myData = result.rows;
      result.rows.forEach((element, index) => {
        myData[index]["key"] = index;
      });
      setLocations(myData);
      setLoading(false);
    });
  }, [filterSearch]);

  const changeCountryCode = value => {
    setFilterCountryCode({
      "field": "countryCode",
      "operator": "EQUALS",
      "value": value
    });
  };

  const changeDescription = event => {
    if (event.target.value) {
      setFilterDescription({
        "field": "description",
        "operator": "LIKE",
        "value": event.target.value
      });
    }
  };

  const clickFilter = () => {
    let filters = [];
    if (JSON.stringify(filterCountryCode) !== '{}') {
      filters.push(filterCountryCode);
    }

    if (JSON.stringify(filterDescription) !== '{}') {
      filters.push(filterDescription);
    }

    setFilterSearch({
      "filters": filters,
      "limit": pagination.pageSize,
      "page": (pagination.current - 1)
    });
  };

  const handleTableChange = pagination => {
    console.log('pag', pagination);
    clickFilter();
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const filter = (
    <Form className='filter'>
      <Form.Item
        label="Country"
        name="countryCode"
      // style={ { width: 400 } }
      >
        <Select
          // mode="multiple"
          showSearch
          // allowClear
          style={ { width: 200 } }
          placeholder="Please select"
          onChange={ changeCountryCode }
          filterOption={ (input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          { optionCountries }
        </Select>
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
      // style={ { width: 400 } }
      >
        <Input
          style={ { width: 200 } }
          placeholder="input here"
          onBlur={ changeDescription }
        />
      </Form.Item>
      <Form.Item>
        <Button onClick={ clickFilter } size='large'>Filter</Button>
      </Form.Item>
    </Form>
  );

  return (
    <StyledDiv>
      <h2 style={ { fontSize: '180%', color: 'darkblue', marginBottom: '3%' } }>Stock Location</h2>
      { filter }
      <div style={ { textAlign: 'right' } }>
        <Button onClick={ () => history.push('/stock-locations/create') } type="primary" style={ { marginBottom: 16 } }>
          Add a row
        </Button>
      </div>
      <Table
        dataSource={ locations }
        pagination={ pagination }
        onChange={ handleTableChange }
        loading={ loading }
      >
        <Column title="Location" dataIndex="loc" key="loc" />
        <Column title="Description" dataIndex="description" key="description" />
        <Column title="Address" dataIndex="address1" key="address1" />
        <Column title="Country Code" dataIndex="countryCode" key="countryCode" />
        <Column title="PIC" dataIndex="personInCharge" key="personInCharge" />
        <Column
          title="Action"
          key="action"
          render={ (text, record) => {
            return (
              <Space size="middle">
                <a onClick={ () => history.push(`/stock-locations/${ record.loc }`) }>View</a>
                <a onClick={ () => history.push(`/stock-locations/${ record.loc }?edit=true`) }>Edit</a>
              </Space>
            );
          } }
        />
      </Table>
    </StyledDiv>
  );
}


async function getCountries() {
  return await fetch("http://sun17.sunright.com/lov/countries").then(res => res.json());
}

async function getItems(filterSearch) {
  return await fetch(`http://sun17.sunright.com/companies/${ env.companyCode }/plants/${ env.plantNo }/locations/search`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(filterSearch),
    })
    .then(res => res.json())
    .catch(err => {
      console.log('err :>> ', err);
      message.error(JSON.stringify(err));
    });
}

function getOptionCountries(countries) {
  const { Option } = Select;
  let optionCountries = [];
  for (const country of countries) {
    optionCountries.push(<Option key={ country.countryCode } value={ country.countryCode } >{ country.description }</Option>);
  }
  return optionCountries;
}

export default StockLocation;
