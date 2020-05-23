import React from 'react';
import { Layout, Menu } from 'antd';
import { observer } from 'mobx-react';
import 'antd/dist/antd.css';
import { ApolloProvider } from '@apollo/react-hooks';

import MySider from './Components/Sider/Slider';
import HeadeWrap from './Components/Header/HeaderWrap';
import { Dialog } from './Components/Dialog';
import './style.scss';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import ApolloClient, { gql } from 'apollo-boost';
import routers from './routers';
import apoloClientConfig from './config';

const { Header, Content, Sider } = Layout;

interface prop {}

const { uri } = apoloClientConfig;
const client = new ApolloClient({
	uri: uri
});

@observer
class App extends React.Component<prop> {
	constructor(prop: Readonly<prop>) {
		super(prop);
	}

	render() {
		const shownRouters = routers;
		return (
			<Layout className="app-container">
				<ApolloProvider client={client}>
					<Header className="app-header">
						<HeadeWrap />
					</Header>
					<Layout className="app-content">
						<Router>
							{/* <Sider collapsible className="app-sider">
								<MySider routers={shownRouters} />
							</Sider> */}
							<Content>
								<Switch>
									{shownRouters.map((route) => {
										return (
											<Route
												path={route.path}
												component={route.component}
												exact={route.exact}
												key={route.path}
											/>
										);
									})}
									<Redirect to="" />
								</Switch>
							</Content>
						</Router>
					</Layout>
				</ApolloProvider>
				<Dialog />
			</Layout>
		);
	}
}

export default App;
