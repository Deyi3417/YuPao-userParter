/**
 * 用户类别
 */

export type UserType = {
    id: number;
    username: string;
    userAccount: string;
    avatarUrl: string;
    gender: number;
    phone: string;
    email: string;
    userStatus: number;
    userRole: number;
    planetCode: string;
    createTime: Date;
    // string 类型的数组
    tags: string[];

}