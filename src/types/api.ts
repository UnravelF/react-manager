// 借口类型定义
export interface Result<T = any> {
  code: number;
  data: T;
  msg: string;
}

export namespace LoginRequest {
  export interface params {
    userName: string;
    userPwd: string;
  }
}
