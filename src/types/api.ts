// 接口类型定义
export interface Result<T = any> {
  code: number;
  data: T;
  msg: string;
}

export interface ResultData<T = any> {
  list: T[];
  page: {
    pageNum: number;
    pageSize: number;
    total: number | 0;
  };
}

export interface SearchParams {
  username: string;
  roleId: number;
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
    key: string;
    createTime: string
  }
}

export namespace DashboardPorps {
  export interface ReportData {
    frameData: FrameItem[];
  }
  export interface FrameItem {
    frameName: string;
    frameMessage: string;
  }
  export interface LineData {
    label: string[];
    articleCount: number[];
    visitsCount: number[];
  }
  export interface PieData {
    cityData: PieDataProps[];
    ageData: PieDataProps[];
  }
  export interface PieDataProps {
    value: number;
    name: string;
  }
  export interface RadarData {
    indicator: IndicatorProp[];
    seriesValue: RadarSeriesData[];
  }
  export interface IndicatorProp {
    name: string;
    max: number;
  }
  export interface RadarSeriesData {
    value: number[];
    name: string;
  }
}
