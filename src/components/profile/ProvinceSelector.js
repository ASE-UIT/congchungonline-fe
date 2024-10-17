import React, { useState, useEffect } from 'react';
import LabeledTextField from '../modals/LabeledTextField';
import { Box } from '@mui/material';
import { ArrowDropDown } from '@mui/icons-material';
import { getProvinces, getDistrictsByProvinceCode, getWardsByDistrictCode } from 'vn-provinces';

const ProvinceSelector = ({ city, district, ward, onCityChange, onDistrictChange, onWardChange }) => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const fetchCities = () => {
      const provinces = getProvinces().map((province) => ({
        value: province.code,
        label: province.name,
      }));
      setCities(provinces);
    };
    fetchCities();
  }, []);

  useEffect(() => {
    if (city) {
      const selectedCity = cities.find((c) => c.label === city);
      if (selectedCity) {
        const districtsList = getDistrictsByProvinceCode(selectedCity.value).map((district) => ({
          value: district.code,
          label: district.name,
        }));
        setDistricts(districtsList);
        setWards([]); // Reset wards when city changes
      }
    }
  }, [city, cities]);

  useEffect(() => {
    if (district) {
      const selectedDistrict = districts.find((d) => d.label === district);
      if (selectedDistrict) {
        const wardsList = getWardsByDistrictCode(selectedDistrict.value).map((ward) => ({
          value: ward.code,
          label: ward.name,
        }));
        setWards(wardsList);
      }
    }
  }, [district, districts]);

  return (
    <Box sx={{
      display: 'flex',
      gap: '16px',
      flexDirection: { xs: 'column', sm: 'row' },
      flexWrap: { xs: 'wrap', md: 'nowrap' },
    }}>
      <LabeledTextField
        label="Tỉnh/Thành phố"
        value={city || ''}
        onChange={onCityChange}
        adornment={<ArrowDropDown />}
        options={cities}
      />
      <LabeledTextField
        label="Quận/Huyện"
        value={district || ''}
        onChange={onDistrictChange}
        adornment={<ArrowDropDown />}
        options={districts}
        disabled={!city}
      />
      <LabeledTextField
        label="Xã/Phường/Thị trấn"
        value={ward || ''}
        onChange={onWardChange}
        adornment={<ArrowDropDown />}
        options={wards}
        disabled={!district}
      />
    </Box>
  );
};

export default ProvinceSelector;
