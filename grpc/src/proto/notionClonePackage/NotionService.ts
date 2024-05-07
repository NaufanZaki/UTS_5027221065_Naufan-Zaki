// Original file: ../proto/notion.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Empty as _notionClonePackage_Empty, Empty__Output as _notionClonePackage_Empty__Output } from '../notionClonePackage/Empty';
import type { Page as _notionClonePackage_Page, Page__Output as _notionClonePackage_Page__Output } from '../notionClonePackage/Page';
import type { PageID as _notionClonePackage_PageID, PageID__Output as _notionClonePackage_PageID__Output } from '../notionClonePackage/PageID';
import type { PageWithID as _notionClonePackage_PageWithID, PageWithID__Output as _notionClonePackage_PageWithID__Output } from '../notionClonePackage/PageWithID';
import type { Pages as _notionClonePackage_Pages, Pages__Output as _notionClonePackage_Pages__Output } from '../notionClonePackage/Pages';
import type { Response as _notionClonePackage_Response, Response__Output as _notionClonePackage_Response__Output } from '../notionClonePackage/Response';

export interface NotionServiceClient extends grpc.Client {
  AddPage(argument: _notionClonePackage_Page, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  AddPage(argument: _notionClonePackage_Page, metadata: grpc.Metadata, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  AddPage(argument: _notionClonePackage_Page, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  AddPage(argument: _notionClonePackage_Page, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  addPage(argument: _notionClonePackage_Page, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  addPage(argument: _notionClonePackage_Page, metadata: grpc.Metadata, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  addPage(argument: _notionClonePackage_Page, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  addPage(argument: _notionClonePackage_Page, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  
  DeletePage(argument: _notionClonePackage_PageID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  DeletePage(argument: _notionClonePackage_PageID, metadata: grpc.Metadata, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  DeletePage(argument: _notionClonePackage_PageID, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  DeletePage(argument: _notionClonePackage_PageID, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  deletePage(argument: _notionClonePackage_PageID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  deletePage(argument: _notionClonePackage_PageID, metadata: grpc.Metadata, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  deletePage(argument: _notionClonePackage_PageID, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  deletePage(argument: _notionClonePackage_PageID, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  
  GetAllPages(argument: _notionClonePackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Pages__Output>): grpc.ClientUnaryCall;
  GetAllPages(argument: _notionClonePackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_notionClonePackage_Pages__Output>): grpc.ClientUnaryCall;
  GetAllPages(argument: _notionClonePackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Pages__Output>): grpc.ClientUnaryCall;
  GetAllPages(argument: _notionClonePackage_Empty, callback: grpc.requestCallback<_notionClonePackage_Pages__Output>): grpc.ClientUnaryCall;
  getAllPages(argument: _notionClonePackage_Empty, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Pages__Output>): grpc.ClientUnaryCall;
  getAllPages(argument: _notionClonePackage_Empty, metadata: grpc.Metadata, callback: grpc.requestCallback<_notionClonePackage_Pages__Output>): grpc.ClientUnaryCall;
  getAllPages(argument: _notionClonePackage_Empty, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Pages__Output>): grpc.ClientUnaryCall;
  getAllPages(argument: _notionClonePackage_Empty, callback: grpc.requestCallback<_notionClonePackage_Pages__Output>): grpc.ClientUnaryCall;
  
  GetPageByID(argument: _notionClonePackage_PageID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Page__Output>): grpc.ClientUnaryCall;
  GetPageByID(argument: _notionClonePackage_PageID, metadata: grpc.Metadata, callback: grpc.requestCallback<_notionClonePackage_Page__Output>): grpc.ClientUnaryCall;
  GetPageByID(argument: _notionClonePackage_PageID, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Page__Output>): grpc.ClientUnaryCall;
  GetPageByID(argument: _notionClonePackage_PageID, callback: grpc.requestCallback<_notionClonePackage_Page__Output>): grpc.ClientUnaryCall;
  getPageById(argument: _notionClonePackage_PageID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Page__Output>): grpc.ClientUnaryCall;
  getPageById(argument: _notionClonePackage_PageID, metadata: grpc.Metadata, callback: grpc.requestCallback<_notionClonePackage_Page__Output>): grpc.ClientUnaryCall;
  getPageById(argument: _notionClonePackage_PageID, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Page__Output>): grpc.ClientUnaryCall;
  getPageById(argument: _notionClonePackage_PageID, callback: grpc.requestCallback<_notionClonePackage_Page__Output>): grpc.ClientUnaryCall;
  
  UpdatePage(argument: _notionClonePackage_PageWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  UpdatePage(argument: _notionClonePackage_PageWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  UpdatePage(argument: _notionClonePackage_PageWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  UpdatePage(argument: _notionClonePackage_PageWithID, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  updatePage(argument: _notionClonePackage_PageWithID, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  updatePage(argument: _notionClonePackage_PageWithID, metadata: grpc.Metadata, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  updatePage(argument: _notionClonePackage_PageWithID, options: grpc.CallOptions, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  updatePage(argument: _notionClonePackage_PageWithID, callback: grpc.requestCallback<_notionClonePackage_Response__Output>): grpc.ClientUnaryCall;
  
}

export interface NotionServiceHandlers extends grpc.UntypedServiceImplementation {
  AddPage: grpc.handleUnaryCall<_notionClonePackage_Page__Output, _notionClonePackage_Response>;
  
  DeletePage: grpc.handleUnaryCall<_notionClonePackage_PageID__Output, _notionClonePackage_Response>;
  
  GetAllPages: grpc.handleUnaryCall<_notionClonePackage_Empty__Output, _notionClonePackage_Pages>;
  
  GetPageByID: grpc.handleUnaryCall<_notionClonePackage_PageID__Output, _notionClonePackage_Page>;
  
  UpdatePage: grpc.handleUnaryCall<_notionClonePackage_PageWithID__Output, _notionClonePackage_Response>;
  
}

export interface NotionServiceDefinition extends grpc.ServiceDefinition {
  AddPage: MethodDefinition<_notionClonePackage_Page, _notionClonePackage_Response, _notionClonePackage_Page__Output, _notionClonePackage_Response__Output>
  DeletePage: MethodDefinition<_notionClonePackage_PageID, _notionClonePackage_Response, _notionClonePackage_PageID__Output, _notionClonePackage_Response__Output>
  GetAllPages: MethodDefinition<_notionClonePackage_Empty, _notionClonePackage_Pages, _notionClonePackage_Empty__Output, _notionClonePackage_Pages__Output>
  GetPageByID: MethodDefinition<_notionClonePackage_PageID, _notionClonePackage_Page, _notionClonePackage_PageID__Output, _notionClonePackage_Page__Output>
  UpdatePage: MethodDefinition<_notionClonePackage_PageWithID, _notionClonePackage_Response, _notionClonePackage_PageWithID__Output, _notionClonePackage_Response__Output>
}
