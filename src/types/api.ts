// 接口类型定义
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

export namespace LoginUserInfo {
  export interface UserInfoProps {
    createId: number;
    deptId: string;
    userName: string;
    deptName: string;
    role: number;
    roleList: string;
    state: number;
    userEmail: string;
    userId: number;
    _id: string;
  }
}

export namespace DashboardPorps {
  export interface ReportData {
    frameData: frameItem[];
  }
  export interface frameItem {
    frameName: string;
    frameMessage: string;
  }
}
