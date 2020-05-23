import React from 'react';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface props {}

class GlobalSearch extends React.Component<props> {
	constructor(props: Readonly<props>) {
		super(props);
	}

	render() {
		return (
			<div className="global-search">
				<Input suffix={<SearchOutlined />} placeholder="Search on GraphQL" />
			</div>
		);
	}
}

export default GlobalSearch;
