import React from 'react';
import { Table, Row, Col, Button, Badge } from 'antd';
import { GET_ALL_EMPLOYEE } from '../../Graphql/Employee';
import { Query, QueryResult } from 'react-apollo';
import EmployeeModel from './../../Models/Employee';
import { getColums } from './columsCofig';
import './style.scss';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import EmployeeDetail from '../../Components/EmployeeDetail/EmployeeDetail';

@observer
class Employee extends React.Component {
	@observable isOnAddEdit: boolean = false;

	onCompleted = (data: any) => {
		// console.log(data);
	};

	@action
	handleView = () => {
		this.isOnAddEdit = true;
	};

	render() {
		return (
			<Query query={GET_ALL_EMPLOYEE} onCompleted={this.onCompleted}>
				{({ loading, error, data }: QueryResult) => {
					let employees = [];
					if (data) {
						const { getAllUser: employeeData = [] } = data;
						employees = employeeData.map((employee: any) => new EmployeeModel(employee));
					}
					console.log(employees);

					return (
						<div className="container__wrap container__employee">
							<h3 className="container__header">
								<Row justify="space-between">
									<Col>
										<span>Employee</span>
										<Badge
											style={{ marginLeft: '10px', backgroundColor: '#1877f2' }}
											count={employees.length}
										/>
									</Col>
									<Col>
										<Button shape="round">Add New</Button>
									</Col>
								</Row>
							</h3>
							<div className="container__content">
								<Table columns={getColums(this.handleView)} loading={loading} dataSource={employees} />
							</div>

							{this.isOnAddEdit && <EmployeeDetail />}
						</div>
					);
				}}
			</Query>
		);
	}
}

export default Employee;
