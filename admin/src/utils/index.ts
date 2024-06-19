import { MenuProps } from "antd";

export const APP_CONFIG = {
    apiBaseUrl: "https://localhost:44311",
  };

export const Filteritems = [
    {
        label: 'Skill',
        key: '1',
    },
    {
        label: 'Date of birth',
        key: '2',
    },
    {
        label: 'All',
        key: '3',
    },
];

export const ApplyFilterItems = [
    {
        label: 'Apply',
        key: '1',
    },
    {
        label: 'Clear',
        key: '2',
    }
];





export const  generateGUID = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


export const formatDateTime = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };


