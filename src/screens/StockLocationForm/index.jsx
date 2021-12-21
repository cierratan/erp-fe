import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Checkbox, AutoComplete } from 'antd';
import moment from 'moment';

import { StyledDiv } from './styled';

const StockLocationForm = (props) => {
  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [userName, setUserName] = useState('username');
  const [company, setCompany] = useState('company name');
  const [loginDate, setLoginDate] = useState(moment().format("YYYY-MM-DD HH:mm:ss"));
  const [code, setCode] = useState('INM00001');

  return (
    <StyledDiv>
      <div className="header">
        <h2>FORM_ID</h2>
        <h2>Stock Locations</h2>
      </div>
      <div className="formWrapper">
        <Form form={ form } name="control-hooks">
          <div className="group">
            <Form.Item
              name="Loc"
              label="Loc"
              rules={ [
                {
                  required: true,
                },
              ] }
            >
              <Input placeholder='Type loc here...' />
            </Form.Item>

            <Form.Item
              name="Descripction"
              label="Descripction"
              rules={ [
                {
                  required: true,
                },
              ] }
            >
              <Input placeholder='Type descripction here...' />
            </Form.Item>

            <Form.Item
              name="Address"
              label="Address"
              rules={ [
                {
                  required: true,
                },
              ] }
            >
              <TextArea placeholder='Type address here...' rows={ 4 } />
            </Form.Item>

            <Form.Item
              name="Postal Code"
              label="Postal Code"
              rules={ [
                {
                  required: true,
                },
              ] }
            >
              <Input placeholder='Type postal code here...' />
            </Form.Item>

            <Form.Item
              name="Country Name"
              label="Country Name"
              rules={ [
                {
                  required: true,
                },
              ] }
            >
              <AutoComplete
                // options={ options }
                // onSelect={ onSelect }
                // onSearch={ onSearch }
                placeholder="Type country name here..."
              />
            </Form.Item>

            <Form.Item
              name="City Code"
              label="City Code"
              rules={ [
                {
                  required: true,
                },
              ] }
            >
              <Input placeholder='Type city code here...' />
            </Form.Item>

            <Form.Item
              name="Telephone No"
              label="Telephone No"
              rules={ [
                {
                  required: true,
                },
              ] }
            >
              <Input placeholder='Type telephone number here...' />
            </Form.Item>

            <Form.Item
              name="Fax No"
              label="Fax No"
              rules={ [
                {
                  required: true,
                },
              ] }
            >
              <Input placeholder='Type fax number here...' />
            </Form.Item>

            <Form.Item
              name="Person In Charge"
              label="Person In Charge"
              rules={ [
                {
                  required: true,
                },
              ] }
            >
              <Input placeholder='Type Person In Charge here...' />
            </Form.Item>

            <Form.Item
              name="Remarks"
              label="Remarks"
              rules={ [
                {
                  required: true,
                },
              ] }
            >
              <Input placeholder='Type remarks here...' />
            </Form.Item>

          </div>

          <div className="submit">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Create Stock Locations
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </StyledDiv >
  );
};

export default StockLocationForm;
