import React, { useState } from 'react';
import { Table, Button, Space, AutoComplete, Form } from 'antd';

function Inm00001() {
  
  const { Column } = Table;
  const mockVal = (str, repeat= 1) => ({
    value: str.repeat(repeat),
  });

  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);
  const onSearch = searchText => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  const onSelect = data => {
    console.log('onSelect', data);
  };
  const onChange = data => {
    setValue(data);
  };

  const filter = (
    <>
      <Form.Item
        label="Item No"
        name="itemNo"
      >
        <AutoComplete
          options={options}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={onSearch}
          placeholder="input here"
        />
      </Form.Item>
      <Form.Item
        label="Part No"
        name="partNo"
      >
        <AutoComplete
          value={value}
          options={options}
          style={{ width: 200 }}
          onSelect={onSelect}
          onSearch={onSearch}
          onChange={onChange}
          placeholder="input here"
        />
      </Form.Item>
      <Form.Item>
        <Button size='large'>Filter</Button>
      </Form.Item>
    </>
  );

  return (
    <div>
      <h2 style={{ fontSize:'180%', color:'darkblue', marginBottom:'3%' }}>Item Master Maintenance</h2>
      {filter}
      <div style={{textAlign:'right' }}>
        <Button type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button>
      </div>
      <Table dataSource={getItem()}>
      <Column title="Item No" dataIndex="itemNo" key="itemNo" />
      <Column title="Part No" dataIndex="partNo" key="partNo" />
      <Column title="Manufacturer" dataIndex="manufacturer" key="manufacturer" />
      <Column title="UOM" dataIndex="uom" key="uom" />
      <Column title="Board Size" dataIndex="boardSize" key="boardSize" />
      <Column title="Leadtime" dataIndex="leadtime" key="leadtime" />
      <Column title="Requestor" dataIndex="requestor" key="urequestorom" />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <a>View</a>
            <a>Edit</a>
            <a>Delete</a>
          </Space>
        )}
      />
    </Table>
  </div>
  );
}

function getItem() {
  return [
    {
      key : 1,
      itemNo : "Item0001",
      partNo : "Part0001",
      manufacturer : "manufacturer 00005",
      uom: "mm",
      boardSize: "12",
      leadtime: "40",
      requestor: "Ramdani"
    },
    {
      key : 2,
      itemNo : "Item0002",
      partNo : "Part0002",
      manufacturer : "manufacturer 00005",
      uom: "mm",
      boardSize: "12",
      leadtime: "40",
      requestor: "Ramdani"
    },
    {
      key : 3,
      itemNo : "Item0003",
      partNo : "Part0003",
      manufacturer : "manufacturer 00005",
      uom: "mm",
      boardSize: "12",
      leadtime: "40",
      requestor: "Ramdani"
    },
    {
      key : 4,
      itemNo : "Item0004",
      partNo : "Part0004",
      manufacturer : "manufacturer 00005",
      uom: "mm",
      boardSize: "12",
      leadtime: "40",
      requestor: "Ramdani"
    },
    {
      key : 5,
      itemNo : "Item0005",
      partNo : "Part0005",
      manufacturer : "manufacturer 00005",
      uom: "mm",
      boardSize: "12",
      leadtime: "40",
      requestor: "Ramdani"
    },
    {
      key : 6,
      itemNo : "Item0006",
      partNo : "Part0006",
      manufacturer : "manufacturer 00006",
      uom: "mm",
      boardSize: "12",
      leadtime: "40",
      requestor: "Ramdani"
    },
    {
      key : 7,
      itemNo : "Item0007",
      partNo : "Part0007",
      manufacturer : "manufacturer 00007",
      uom: "mm",
      boardSize: "12",
      leadtime: "40",
      requestor: "Ramdani"
    },
    {
      key : 8,
      itemNo : "Item0008",
      partNo : "Part0008",
      manufacturer : "manufacturer 00008",
      uom: "mm",
      boardSize: "12",
      leadtime: "40",
      requestor: "Ramdani"
    },
    {
      key : 9,
      itemNo : "Item0009",
      partNo : "Part0009",
      manufacturer : "manufacturer 00009",
      uom: "mm",
      boardSize: "12",
      leadtime: "40",
      requestor: "Ramdani"
    },
    {
      key : 10,
      itemNo : "Item0010",
      partNo : "Part0010",
      manufacturer : "manufacturer 00010",
      uom: "mm",
      boardSize: "12",
      leadtime: "40",
      requestor: "Ramdani"
    }
  ]
}

export default Inm00001;
