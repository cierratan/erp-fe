import Config from './Config';

export default {
  url: Config.url,
  param: {
    login: '/v1/auths/login',
    loginSocmed: '/v1/auths/login-social-media',
    register: '/v1/auths/register-member',
    resendVerify: '/v1/auths/register-member/resend-email-verification',
    forgotPassword: '/v1/auths/forgot-password',
    passwordUpdate: '/v1/members/update-password/',
    questions: '/v1/questions',
    answers: '/v1/answers',
    games: '/v1/categories',
    upload: '/v1/upload-image',
    uploadVideo: '/v1/upload-video',
    member: '/v1/members',
    reputation: '/v1/reputations',
    products: '/v1/products',
    notification: '/v1/notifications',
    bank: '/v1/banks',
    featuredTag: '/v1/categories-tags',
    transactions: '/v1/transactions',
    report: '/v1/tickets',
    settings: '/v1/admins/settings',
    requestGame: '/v1/request-games'
  }
};
