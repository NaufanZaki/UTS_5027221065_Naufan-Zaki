import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../proto/notion';
import path from 'path';
import express, { Request, Response } from 'express';
import { Page } from '../proto/notionClonePackage/Page';
import { PageID } from '../proto/notionClonePackage/PageID';
import cors from 'cors'

const PROTO_PATH: string = "../../../proto/notion.proto";
const PORT: number = 5001;
const portClient: number = 3002;

const options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
};

const protoBuf = protoLoader.loadSync(path.resolve(__dirname, PROTO_PATH), options);
const grpcObj = grpc.loadPackageDefinition(protoBuf) as unknown as ProtoGrpcType;

const client = new grpcObj.notionClonePackage.NotionService(
    `0.0.0.0:${PORT}`, grpc.credentials.createInsecure()
);

const deadline = new Date();
deadline.setSeconds(deadline.getSeconds() + 5);
client.waitForReady(deadline, (err: any) => {
    if (err) {
        console.error(err);
        return;
    }
    onClientReady();
});

const onClientReady = () => {
    console.log(`Server running on port ${PORT} & Client running on port ${portClient}`);
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.get('/pages', (req: Request, res: Response) => {
        client.GetAllPages({}, (err: any, _res: any) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(_res);
        });
    });

    app.get('/pages/:id', (req: Request, res: Response) => {
        const pageID: PageID = { id: req.params.id };
        client.GetPageByID(pageID, (err: any, _res: any) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(_res);
        });
    });

    app.post('/pages', (req: Request, res: Response) => {
        const page: Page = req.body;
        client.AddPage(page, (err: any, _res: any) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(_res);
        });
    });

    app.put('/pages/:id', (req: Request, res: Response) => {
        const pageWithID = {
            pageId: { id: req.params.id },
            page: req.body
        };
        client.UpdatePage(pageWithID, (err: any, _res: any) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(_res);
        });
    });

    app.delete('/pages/:id', (req: Request, res: Response) => {
        const pageID: PageID = { id: req.params.id };
        client.DeletePage(pageID, (err: any, _res: any) => {
            if (err) {
                console.error(err);
                return;
            }
            res.send(_res);
        });
    });

    app.listen(portClient, () => {
        console.log("Express is started");
    });
};