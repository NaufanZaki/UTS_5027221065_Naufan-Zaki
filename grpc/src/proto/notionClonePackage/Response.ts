// Original file: ../proto/notion.proto

import type { Page as _notionClonePackage_Page, Page__Output as _notionClonePackage_Page__Output } from '../notionClonePackage/Page';

export interface Response {
  'responseMsg'?: (string);
  'code'?: (number);
  'pageId'?: (string);
  'pages'?: (_notionClonePackage_Page | null);
}

export interface Response__Output {
  'responseMsg'?: (string);
  'code'?: (number);
  'pageId'?: (string);
  'pages'?: (_notionClonePackage_Page__Output);
}
