import axios from "axios";

export default ({
  url = "/",
  method = "GET",
  params = {},
  data = {},
  headers = {},
}) =>
  axios({
    url,
    method,
    params,
    data,
    headers,
  });
