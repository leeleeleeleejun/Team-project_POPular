import { BoardTypes } from './board';
import { Comment } from './comment';
import { Store } from './store';
import { User } from './user';

export const enum NotificationType {
  Follow = 'Follow',
  Comment = 'Comment',
  Recomment = 'Comment',
  Ad = 'Store',
}

export interface Notification {
  _id: string;
  type: NotificationType;
  board?: BoardTypes;
  user_id: string;
  content_user?: User | null;
  content_comment?: Comment | null;
  content_store?: Store | null;
  checked: boolean;
}
