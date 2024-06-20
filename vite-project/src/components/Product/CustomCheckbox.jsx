import React from 'react'
import { Checkbox } from '@mui/material';
import { styled } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/Check';

const CustomCheckbox = styled((props) => (
    <Checkbox
        {...props}
        icon={<span className="icon" />}
        checkedIcon={<CheckIcon className="icon-checked" />}
    />
))(({ theme }) => ({
    '& .MuiSvgIcon-root': {
        fontSize: 20,
    },
    '& .icon': {
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 3,
        border: '1px solid rgba(0, 0, 0, 0.23)',
        transition: 'background-color 2000ms ease-in-out, transform 2000ms ease-in-out',
        transform: 'scale(1)',
    },
    '& .icon-checked': {
        color: 'purple',
        backgroundColor: '#fff',
        borderRadius: 3,
        transform: 'scale(1.1)',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        transition: ' transform 2000ms ease-in-out',
    },
    '&.Mui-checked .icon': {
        backgroundColor: '#fff',
        transform: 'scale(1.1)',
    },
    '&.Mui-checked .icon-checked': {
        transform: 'scale(1)',
    },
}));

export default CustomCheckbox;
