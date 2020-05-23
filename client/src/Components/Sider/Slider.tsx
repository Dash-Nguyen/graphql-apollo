import React from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

interface prop {
	routers: any;
}
const { SubMenu } = Menu;
class Sider extends React.Component<prop> {
	constructor(prop: Readonly<prop>) {
		super(prop);
	}

	render() {
		const { routers } = this.props;
		return (
			<div>
				{routers.map((route: any) => {
					const { path, name, exact } = route;
					return (
						<Menu key={route.path}>
							<Menu.Item key={route.path}>
								<NavLink activeClassName="nav__item--active" exact={exact} to={path}>
									{name}
								</NavLink>
							</Menu.Item>
						</Menu>
					);
				})}
			</div>
		);
	}
}

export default Sider;
