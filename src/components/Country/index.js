import React from "react";
import "antd/dist/antd.css";
import { Select } from "antd";
const { Option } = Select;

function CountrySelect({ countries, history }) {
  const onChange = (value) => {
    value = value.toLowerCase();
    if (history) {
      history.push(`/country/${value}`);
    }
  };
  const renderCountrySelect = () => {
    if (!countries) return null;
    return countries.map((country, index) => {
      return (
        <Option key={index} value={country.country}>
          {country.country}
        </Option>
      );
    });
  };

  return (
    <div>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Select a person"
        optionFilterProp="children"
        onChange={onChange}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        {renderCountrySelect()}
      </Select>
    </div>
  );
}
export default CountrySelect;
