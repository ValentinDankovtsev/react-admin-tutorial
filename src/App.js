import * as React from "react";
import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin';
import { UserList } from './users';
import { PostList, PostEdit, PostCreate } from './posts'
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Dashboard from './Dashboard';
import authProvider from './authProvider';
import simpleRestProvider from 'ra-data-simple-rest';
import FinanceList from './components/FinanceList';
import FinanceCreate from './components/FinanceCreate';
import FinanceEdit from './components/FinanceEdit';
import axios from "axios";

const dataProvider = jsonServerProvider('194.177.21.214:7005/api/v1/cashbox?CurrentPage=1&PerPage=500');
console.log(dataProvider.getList(),'dataProvider' )



const App = () => (
  <Admin dashboard={Dashboard} dataProvider={jsonServerProvider('http://localhost:3000')} authProvider={authProvider}>
    <Resource name="finance" list={FinanceList} create={FinanceCreate} edit={FinanceEdit} />
  </Admin>
);

export default App;

// 194.177.21.214:7005/api/v1/cashbox?CurrentPage=1&PerPage=500