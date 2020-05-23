import React from 'react';
import { getDateString } from '../../utils';

const colums = [
	{
		title: 'Name',
		dataIndex: 'name',
		key: 'name'
	},
	{
		title: 'Email',
		dataIndex: 'email',
		key: 'email'
	},
	{
		title: 'Phone',
		dataIndex: 'phoneNumber',
		key: 'phoneNumber'
	},
	{
		title: 'Address',
		dataIndex: 'address',
		key: 'address'
	},
	{
		title: 'Created Date',
		dataIndex: 'createDate',
		key: 'createDate',
		render: (recored: any) => {
			return getDateString(recored);
		}
	}
];

export const getColums = (handleViewEmployee: any): any[] => {
	return colums.map((col: any) => {
		if (col.dataIndex === 'name') {
			col.render = (data: any, record: any) => {
				return (
					<div onClick={handleViewEmployee} className="highlight-name">
						{data}
					</div>
				);
			};
			return col;
		}
		return col;
	});
};

export default colums;
