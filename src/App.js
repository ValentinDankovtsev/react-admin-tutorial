import * as React from "react";
import jsonServerProvider from "ra-data-json-server";
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  fetchUtils,
} from "react-admin";
import UserList from "./components/User/UserList.jsx";
import { PostList, PostEdit, PostCreate } from "./posts";
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import simpleRestProvider from "ra-data-simple-rest";
import FinanceList from "./components/FinanceList";
import FinanceCreate from "./components/FinanceCreate";
import FinanceEdit from "./components/FinanceEdit";
import axios from "axios";
import UsersList from "./components/Payments/UsersList";
import { dataProv } from "./dataProvider";
import RoleList from "./components/User/RoleList.jsx";
import UserRoleList from "./components/User/UserRoleLisr.jsx";
import UserCreate from "./components/User/UserCreate.jsx";
import UserRoleCreate from "./components/User/UserRoleCreate.jsx";
import RoleCreate from "./components/User/RoleCreate.jsx";
import UserEdit from "./components/User/UserEdit.jsx";
// const dataProvider = jsonServerProvider('localhost:3000');
// console.log(dataProvider.getList(),'dataProvider' )
// const dataProvider1=jsonServerProvider("http://192.168.88.190:8080")
// console.log(dataProvider1)

const dataProvider = dataProv.getList("user");
console.log(dataProvider, "dataProvider");

const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProv}
    // dataProvider={simpleRestProvider("http://192.168.88.190:7005/")}

    authProvider={authProvider}
  >
    <Resource name="user" create={UserCreate} edit={UserEdit} list={UserList} />
    <Resource name="role" create={RoleCreate} list={RoleList} />
    {/* <Resource list={FinanceList} name="finance" /> */}
    <Resource name="userRole" create={UserRoleCreate} list={UserRoleList} />

    {/* <Resource name="userCashBox" />
    
    <Resource name="cash" />
    <Resource
      name="finance"
      list={FinanceList}
      create={FinanceCreate}
      edit={FinanceEdit}
    /> */}
  </Admin>
);

export default App;

// 194.177.21.214:7005/api/v1/cashbox?CurrentPage=1&PerPage=500
