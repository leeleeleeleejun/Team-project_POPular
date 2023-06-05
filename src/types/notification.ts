export const enum NotificationTypes {
  follow = 'follow',
  comment = 'comment',
  ad = 'ad',
}

export type Content = any;

export interface Notification {
  type: NotificationTypes;
  content: Content;
  checked: boolean;
}
