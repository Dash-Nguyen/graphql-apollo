import React from 'react';
import Modal from 'antd/lib/modal/Modal';

interface Props {}

class EmployeeDetail extends React.Component<Props> {
	constructor(props: Readonly<Props>) {
		super(props);
	}

	handleOk: any;
	handleCancel: any;

	render() {
		return (
			<Modal title="Basic Modal" visible={true} onOk={this.handleOk} onCancel={this.handleCancel}>
				<p>EmployeeDetail</p>
			</Modal>
		);
	}
}

export default EmployeeDetail;
