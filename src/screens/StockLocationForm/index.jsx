import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Select, Checkbox, AutoComplete, message } from 'antd';
import moment from 'moment';
import { useHistory, useParams, useLocation } from 'react-router-dom';

import { StyledDiv } from './styled';
import env from '../../env';
import { Images } from '../../constant';

const StockLocationForm = (props) => {
  const history = useHistory();
  const { id } = useParams();
  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  const [form] = Form.useForm();
  const { TextArea } = Input;
  const [userName, setUserName] = useState('username');
  const [company, setCompany] = useState('company name');
  const [loginDate, setLoginDate] = useState(moment().format("YYYY-MM-DD HH:mm:ss"));
  const [code, setCode] = useState('INM00001');
  const [countriesData, setCountriesData] = useState([]);
  const [countriesOpt, setCountriesOpt] = useState([]);
  const [loadingPage, setLoadingPage] = useState(id ? true : false);
  const [isEdit, setIsEdit] = useState(query.get("edit") ? query.get('edit') === 'true' : false);
  const [isDisabled, setIsDisabled] = useState(id && !isEdit ? true : false);

  const [loc, setLoc] = useState('');
  const [description, setDescription] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [address3, setAddress3] = useState('');
  const [address4, setAddress4] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [countryName, setCountryName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [regionCode, setRegionCode] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [cityCode, setCityCode] = useState('');
  const [telNum, setTelNum] = useState('');
  const [faxNum, setFaxNum] = useState('');
  const [pic, setPic] = useState('');
  const [remarks, setRemarks] = useState('');
  const [version, setVersion] = useState(0);
  const [companyCode, setCompanyCode] = useState(env.companyCode);
  const [plantNumber, setPlantNumber] = useState(env.plantNo);

  useEffect(() => {
    const data = getCountries();
    data.then(res => {
      setCountriesData(res);
      let temp = [];
      res.forEach(el => {
        temp.push({
          value: el.description,
          // code: el.code
        });
      });
      setCountriesOpt(temp);
      if (id) {
        const data = getStockLoc(id);
        data.then(result => {
          if (result.status && result.status !== 200 || result.status !== 201) {
            message.error(result.error);
          }
          result.address1 && setAddress1(result.address1);
          result.address2 && setAddress2(result.address2);
          result.address3 && setAddress3(result.address3);
          result.address4 && setAddress4(result.address4);
          result.cityCode && setCityCode(result.cityCode);
          result.companyCode && setCompanyCode(result.companyCode);
          result.countryCode && setCountryCode(result.countryCode);
          if (result.countryCode) {
            res.forEach(el => {
              if (el.countryCode === result.countryCode) {
                setCountryName(el.description);
              }
            });
          }
          result.description && setDescription(result.description);
          result.faxNo && setFaxNum(result.faxNo);
          result.loc && setLoc(result.loc);
          result.pcode && setPostalCode(result.pcode);
          result.personInCharge && setPic(result.personInCharge);
          result.plantNo && setPlantNumber(result.plantNo);
          result.regionCode && setRegionCode(result.regionCode);
          result.remarks && setRemarks(result.remarks);
          result.stateCode && setStateCode(result.stateCode);
          result.telNo && setTelNum(result.telNo);
          result.version && setVersion(result.version);
          let obj = {
            "address1": address1,
            "address2": address2,
            "address3": address3,
            "address4": address4,
            "cityCode": cityCode,
            "companyCode": companyCode,
            "countryCode": countryCode,
            "description": description,
            "faxNo": faxNum,
            "loc": loc,
            "pcode": postalCode,
            "personInCharge": pic,
            "plantNo": plantNumber,
            "regionCode": regionCode,
            "remarks": remarks,
            "stateCode": stateCode,
            "telNo": telNum,
            "version": version,
          };
          setLoadingPage(false);
        });
      }
    });
  }, []);

  const onSelectCountry = (data) => {
    countriesData.forEach(el => {
      if (el.description === data) {
        setCountryCode(el.countryCode);
        setCountryName(el.description);
      }
    });
  };

  const submit = async () => {
    try {
      if (!isEdit) {
        const values = await form.validateFields();
        console.log('Success:', values);
      }
      let obj = {
        "address1": address1,
        "address2": address2,
        "address3": address3,
        "address4": address4,
        "cityCode": cityCode,
        "companyCode": companyCode,
        "countryCode": countryCode,
        "description": description,
        "faxNo": faxNum,
        "loc": loc,
        "pcode": postalCode,
        "personInCharge": pic,
        "plantNo": plantNumber,
        "regionCode": regionCode,
        "remarks": remarks,
        "stateCode": stateCode,
        "telNo": telNum,
        "version": version,
      };
      console.log('obj :>> ', obj);
      createStockLoc(obj);
      history.push('/stock-locations');
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }

  };

  return (
    <StyledDiv>
      <div className="header">
        <h2>{ id ? id : 'FORM_ID' }</h2>
        <h2>Stock Locations</h2>
      </div>
      <div className="formWrapper">
        {
          loadingPage
            ?
            <div className="loading">
              <img src={ Images.loading } alt="" />
            </div>
            :
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
                  <Input disabled={ isDisabled } defaultValue={ loc } value={ loc } onChange={ e => setLoc(e.target.value) } placeholder='Type loc here...' />
                </Form.Item>

                <Form.Item
                  name="Descripction"
                  label="Descripction"
                >
                  <Input disabled={ isDisabled } defaultValue={ description } value={ description } onChange={ e => setDescription(e.target.value) } placeholder='Type descripction here...' />
                </Form.Item>

                <Form.Item
                  name="Address 1"
                  label="Address 1"
                >
                  <Input disabled={ isDisabled } defaultValue={ address1 } value={ address1 } onChange={ e => setAddress1(e.target.value) } placeholder='Type address here...' />
                </Form.Item>

                <Form.Item
                  name="Address 2"
                  label="Address 2"
                >
                  <Input disabled={ isDisabled } defaultValue={ address2 } value={ address2 } onChange={ e => setAddress2(e.target.value) } placeholder='Type address here...' />
                </Form.Item>

                <Form.Item
                  name="Address 3"
                  label="Address 3"
                >
                  <Input disabled={ isDisabled } defaultValue={ address3 } value={ address3 } onChange={ e => setAddress3(e.target.value) } placeholder='Type address here...' />
                </Form.Item>

                <Form.Item
                  name="Address 4"
                  label="Address 4"
                >
                  <Input disabled={ isDisabled } defaultValue={ address4 } value={ address4 } onChange={ e => setAddress4(e.target.value) } placeholder='Type address here...' />
                </Form.Item>

                <Form.Item
                  name="Postal Code"
                  label="Postal Code"
                >
                  <Input disabled={ isDisabled } defaultValue={ postalCode } value={ postalCode } onChange={ e => setPostalCode(e.target.value) } placeholder='Type postal code here...' />
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
                    disabled={ isDisabled }
                    defaultValue={ countryName }
                    value={ countryName }
                    options={ countriesOpt }
                    onSelect={ onSelectCountry }
                    placeholder="Type country name here..."
                    filterOption={ (inputValue, option) =>
                      option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                    }
                  />
                </Form.Item>

                <Form.Item
                  name="Region Code"
                  label="Region Code"
                >
                  <Input disabled={ isDisabled } defaultValue={ regionCode } value={ regionCode } onChange={ e => setRegionCode(e.target.value) } placeholder='Type region code here...' />
                </Form.Item>

                <Form.Item
                  name="State Code"
                  label="State Code"
                >
                  <Input disabled={ isDisabled } defaultValue={ stateCode } value={ stateCode } onChange={ e => setStateCode(e.target.value) } placeholder='Type state code here...' />
                </Form.Item>

                <Form.Item
                  name="City Code"
                  label="City Code"
                >
                  <Input disabled={ isDisabled } defaultValue={ cityCode } value={ cityCode } onChange={ e => setCityCode(e.target.value) } placeholder='Type city code here...' />
                </Form.Item>

                <Form.Item
                  name="Telephone No"
                  label="Telephone No"
                >
                  <Input disabled={ isDisabled } defaultValue={ telNum } value={ telNum } onChange={ e => setTelNum(e.target.value) } placeholder='Type telephone number here...' />
                </Form.Item>

                <Form.Item
                  name="Fax No"
                  label="Fax No"
                >
                  <Input disabled={ isDisabled } defaultValue={ faxNum } value={ faxNum } onChange={ e => setFaxNum(e.target.value) } placeholder='Type fax number here...' />
                </Form.Item>

                <Form.Item
                  name="Person In Charge"
                  label="Person In Charge"
                >
                  <Input disabled={ isDisabled } defaultValue={ pic } value={ pic } onChange={ e => setPic(e.target.value) } placeholder='Type Person In Charge here...' />
                </Form.Item>

                <Form.Item
                  name="Remarks"
                  label="Remarks"
                >
                  <Input disabled={ isDisabled } defaultValue={ remarks } value={ remarks } onChange={ e => setRemarks(e.target.value) } placeholder='Type remarks here...' />
                </Form.Item>

              </div>

              {
                !id || isEdit &&
                <div className="submit">
                  <Form.Item>
                    <Button onClick={ submit } type="primary" htmlType="submit">
                      {
                        isEdit
                          ?
                          "Edit Stock Locations"
                          :
                          "Create Stock Locations"
                      }
                    </Button>
                  </Form.Item>
                </div>
              }
            </Form>
        }
      </div>
    </StyledDiv >
  );
};

async function getCountries() {
  return await fetch("http://sun17.sunright.com/lov/countries").then(res => res.json());
}

async function createStockLoc(data) {
  return await fetch(`http://sun17.sunright.com/companies/${ env.companyCode }/plants/${ env.plantNo }/locations`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(res => {
      return res.json();
    })
    .then(res => {
      console.log('res :>> ', res);
    })
    .catch(err => {
      console.log('err :>> ', err);
      message.error(JSON.stringify(err));
    })
    ;
}

async function getStockLoc(id) {
  return await fetch(`http://sun17.sunright.com/companies/${ env.companyCode }/plants/${ env.plantNo }/locations/${ id }`)
    .then(res => res.json())
    .catch(err => console.log('err :>> ', err));
}


export default StockLocationForm;
