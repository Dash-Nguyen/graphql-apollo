import Home from '../Containers/Home/Home';
import Employee from '../Containers/Employee/Employee';

const routers = [
	{
		path: '/',
		component: Employee,
		name: 'Home',
		exact: false
	},

	{
		path: '/employee',
		component: Employee,
		name: 'Employee',
		exact: true
	}
];

export default routers;
