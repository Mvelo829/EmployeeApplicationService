import React, { use, useEffect } from 'react';
import { Select } from 'antd';
import { useRefList } from '@/app/services/providers/refListProvider';
import { Value } from 'sass';
import { RefListDto } from '@/app/services/api';


type RefListItemProps = {
    handleChange: (value: string) => void;
    placeholder?: string;
    width?: any;
    selectedValue?: string;
    refList?: RefListDto;
};

const RefListDropdown: React.FC<RefListItemProps> = ({ handleChange, placeholder, width,selectedValue,refList }) => {
    console.log("refList",selectedValue)
    return (
        <Select
            showSearch
            style={{
                width: width,
                backgroundColor: '#878282', 
                color: 'white',
            }}
            placeholder={placeholder}
            optionFilterProp="children"
            onChange={handleChange}
            filterSort={(optionA, optionB) =>
                optionA.label.toLowerCase().localeCompare(optionB.label.toLowerCase())
            }
            defaultValue= {`${selectedValue}`}
            options={refList?.refListItems?.map(item => ({
                label: item.itemName,
                value: item.value
            }))}
        />
    )
}

export default RefListDropdown;