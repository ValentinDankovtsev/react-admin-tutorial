import { fetchUtils } from "react-admin";
import { stringify } from "query-string";
import axios from "axios";

const apiUrl = "http://192.168.88.190:7005/api/v1";
const httpClient = fetchUtils.fetchJson;
console.log(httpClient, "httpClient");

// http://192.168.88.190:7005/api/v1/user?CurrentPage=1&PerPage=1

// GET http://path.to.my.api/posts?sort=["title","ASC"]&range=[0, 4]&filter={"author_id":12}

// HTTP/1.1 200 OK
// Content-Type: application/json
// Content-Range: posts 0-4/27
// [
//     { "id": 126, "title": "allo?", "author_id": 12 },
//     { "id": 127, "title": "bien le bonjour", "author_id": 12 },
//     { "id": 124, "title": "good day sunshine", "author_id": 12 },
//     { "id": 123, "title": "hello, world", "author_id": 12 },
//     { "id": 125, "title": "howdy partner", "author_id": 12 }
// ]

// export const instance = await axios.create({

//   baseURL: "http://192.168.88.190:7005/api/v1/",
//   headers: {
//     token: "rYVPYiAjtZYdUNGuxGeNrR6Rb6GkhfXC",
//   },
// });

const getListData = async (resource) => {
  const params = {
    CurrentPage: 1,
    PerPage: 20,
  };
  const headers = {
    token: localStorage.getItem("Token"),
  };

  const list = await axios.get(`${apiUrl}/${resource}`, {
    params,
    headers,
  });

  const list1 = list.data.List;

  for (var i = 0; i < list1.length; i++) {
    var o = list1[i];
    o.id = o.Id;
    delete o.Id;
  }

  return {
    data: list1,
    total: 10,
  };
};

const getManyReference = async (resource, params) => {
  const localParams = {
    CurrentPage: 1,
    PerPage: 20,
  };
  const headers = {
    token: localStorage.getItem("Token"),
  };
  const list = await axios.get(
    `${apiUrl}/${resource}?Search=${params.id}&SearchBy[]=${params.target}`,
    {
      params: localParams,
      headers,
    }
  );

  const roles = await axios.get(
    `${apiUrl}/${resource}?Search=${params.id}&SearchBy[]=${params.target}`,
    {
      params: localParams,
      headers,
    }
  );

  const list1 = list.data.List;
  
  for (var i = 0; i < list1.length; i++) {
    var o = list1[i];
    o.id = o.Id;
    delete o.Id;
  }
  console.log(list1, "list1");
  return {
    data: list1,
    total: 10,
  };
};

const getMany = async (resource, params) => {
  const localParams = {
    CurrentPage: 1,
    PerPage: 20,
  };
  const headers = {
    token: localStorage.getItem("Token"),
  };

  let queryMap = ""

  for (var i = 0; i < params.ids.length; i++) {
    var data1 = params.ids[i];
    queryMap += `&Ids[]=${data1}`

  }

  console.log(queryMap, "data")

  const list = await axios.get(
    `${apiUrl}/${resource}?${queryMap}`,
    {
      params: localParams,
      headers,
    }
  );


  const list1 = list.data.List;
  
  for (var i = 0; i < list1.length; i++) {
    var o = list1[i];
    o.id = o.Id;
    delete o.Id;
  }
  console.log(list1, "list1");
  return {
    data: list1,
    total: 10,
  };
};

const getOne = async (resource, params) => {
  const headers = {
    token: localStorage.getItem("Token"),
  };
  console.log("1231dscff")
  const list = await axios.get(
    `${apiUrl}/${resource}/${params.id}`,
    {
      headers,
    }
  );

  return {
    data: list.data.List,
  };
};

const create = async (resource, params) => {
  const headers = {
    Token: localStorage.getItem("Token"),
  };

  console.log(params.data, "data params")

  const list = await axios.post(`${apiUrl}/${resource}`, params.data, {
    headers,
  });

  const list1 = list.data.List;

  return {
    data: list1,
    id: 10,
  };
};

const update = async (resource, params) => {
  const headers = {
    Token: localStorage.getItem("Token"),
  };

  console.log(params.data, "data params")

  const list = await axios.put(`${apiUrl}/${resource}`, params.data, {
    headers,
  });

  const list1 = list.data.List;

  return {
    data: list1,
    id: 10,
  };
};



export const dataProv = {
  getList: getListData,
  getOne,
  getManyReference,
  getMany,
  getTest: () => {
    return new Promise((resolve, reject) => {
      return resolve({ data: [{ id: "1" }, { id: "2" }] });
    });
  },
  create,
  update
};
