// 用户状态枚举
const enum UserStatusEnum {
  ACTIVE = 1,
  DEACTIVATE = 0
}

// 角色枚举
const enum RoleEnum {
  ADMIN = 'admin',
  USER = 'user'
}
const enum RoleNameEnum {
  'admin' = '超级管理员',
  'user' = '普通用户',
}

export { UserStatusEnum, RoleEnum, RoleNameEnum};
