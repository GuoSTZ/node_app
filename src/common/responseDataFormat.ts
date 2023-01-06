interface ResponseDataFormat {
  code?: number;
  data?: Object;
  message?: string;
}

const responseDataFormat = (res: ResponseDataFormat): ResponseDataFormat => {
  const {code = 0, data = {}, message = "success"} = res;
  return {
    code,
    data,
    message
  }
}

export default responseDataFormat;
export { ResponseDataFormat };