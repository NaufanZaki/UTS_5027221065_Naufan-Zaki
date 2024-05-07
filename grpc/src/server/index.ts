import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import { ProtoGrpcType } from '../proto/notion'
import { NotionServiceHandlers } from '../proto/notionClonePackage/NotionService'
import { Empty } from '../proto/notionClonePackage/Empty'
import { Pages } from '../proto/notionClonePackage/Pages'
import { Page } from '../proto/notionClonePackage/Page'
import { databaseConnection } from './service/db.service'
import path from 'path'
import { NotionServerService } from './service/notionService.service'
import { Response } from '../proto/notionClonePackage/Response'
import { PageWithID } from '../proto/notionClonePackage/PageWithID'
import { PageID } from '../proto/notionClonePackage/PageID'

const PROTO_PATH: string = "../../../proto/notion.proto";
const PORT: number = 5001;

const options: protoLoader.Options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const protoBuf: protoLoader.PackageDefinition = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH), options);
const grpcObj: ProtoGrpcType = grpc.loadPackageDefinition(protoBuf) as unknown as ProtoGrpcType;
const notionService = grpcObj.notionClonePackage;

const main = () => {
    databaseConnection().then(() => {
        const server = getServer();
        server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
            (err: Error | null, port: number) => {
                if (err) {
                    console.error(err.message);
                    return;
                }
                console.log(`Server started on port ${port}`);

                server.start();
            }
        );
    });
};

const getServer = () => {
    const server: grpc.Server = new grpc.Server();
    server.addService(notionService.NotionService.service, {
        'GetAllPages': (call: grpc.ServerUnaryCall<Empty, Pages>, callback: grpc.sendUnaryData<Pages>) => {
            console.log('Server success get all Pages');
            NotionServerService.getAllPages().then((pages: Pages | undefined) => {
                callback(null, pages);
            });
        },
        'GetPageByID': (call: grpc.ServerUnaryCall<PageID, Page>, callback: grpc.sendUnaryData<Page>) => {
            const pageId = call.request;
            console.log(`Server success get Page with ID ${pageId.id}`);
            NotionServerService.getPageByID(pageId).then((page: Page | undefined) => {
                callback(null, page);
            });
        },
        'AddPage': (call: grpc.ServerUnaryCall<Page, Response>, callback: grpc.sendUnaryData<Response>) => {
            const page = call.request;
            console.log('Server success Add Page');
            NotionServerService.addPage(page).then((res: Response | undefined) => {
                callback(null, res);
            });
        },
        'UpdatePage': (call: grpc.ServerUnaryCall<PageWithID, Response>, callback: grpc.sendUnaryData<Response>) => {
            const pageWithID = call.request;
            console.log(`Server success Update Page with ID ${pageWithID.pageId?.id}`);
            NotionServerService.updatePage(pageWithID).then((res: Response | undefined) => {
                callback(null, res);
            });
        },
        'DeletePage': (call: grpc.ServerUnaryCall<PageID, Response>, callback: grpc.sendUnaryData<Response>) => {
            const pageId = call.request;
            console.log(`Server success Delete Page with ID ${pageId.id}`);
            NotionServerService.deletePage(pageId).then((res: Response | undefined) => {
                callback(null, res);
            });
        }
    } as NotionServiceHandlers);
    return server;
};

main();