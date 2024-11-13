import { RoleEnum, RoleNameEnum } from '@/types/common';

const useUserRole = (roleId: string | string[]) => {
  const userRole = roleId === RoleEnum.ADMIN ? RoleEnum.ADMIN : RoleEnum.USER;
  const isAdmin = userRole === RoleEnum.ADMIN;
  const roleName = isAdmin ? RoleNameEnum['admin'] : RoleNameEnum['user'];

  return { isAdmin, roleName };
};

export { useUserRole };
