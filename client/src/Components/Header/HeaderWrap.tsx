import React from 'react';
import { Col, Row } from 'antd';

import GlobalSearch from './GlobalSearch';
import logoUrl from '../../assets/img/graphql.png';

import './style.scss';

interface props {}

class HeaderWrap extends React.Component<props> {
	constructor(props: Readonly<props>) {
		super(props);
	}

	render() {
		return (
			<div className="header-wrap">
				<div className="header-wrap__logo">
					<img src={logoUrl} alt="" />
				</div>
				<Row className="header-wrap__content">
					<Col span={8}>
						<GlobalSearch />
					</Col>
					<Col span={8} />
					<Col span={8} />
				</Row>
			</div>
		);
	}
}

export default HeaderWrap;
