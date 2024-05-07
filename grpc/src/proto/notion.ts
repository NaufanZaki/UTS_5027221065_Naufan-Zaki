import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { NotionServiceClient as _notionClonePackage_NotionServiceClient, NotionServiceDefinition as _notionClonePackage_NotionServiceDefinition } from './notionClonePackage/NotionService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  notionClonePackage: {
    Empty: MessageTypeDefinition
    NotionService: SubtypeConstructor<typeof grpc.Client, _notionClonePackage_NotionServiceClient> & { service: _notionClonePackage_NotionServiceDefinition }
    Page: MessageTypeDefinition
    PageID: MessageTypeDefinition
    PageWithID: MessageTypeDefinition
    Pages: MessageTypeDefinition
    Response: MessageTypeDefinition
  }
}

