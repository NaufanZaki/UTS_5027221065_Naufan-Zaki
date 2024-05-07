import { Page } from "../../proto/notionClonePackage/Page";
import { Pages } from "../../proto/notionClonePackage/Pages";
import { Response } from "../../proto/notionClonePackage/Response";
import { PageID } from "../../proto/notionClonePackage/PageID";
import { collections } from "./db.service";
import { ObjectId } from "mongodb";
import { PageWithID } from "../../proto/notionClonePackage/PageWithID";

export class NotionServerService {
    static async getAllPages(): Promise<Pages | undefined> {
        try {
            const pagesDocs = await collections.notions?.find().toArray();
            const pagesData = (pagesDocs as unknown) as Page[];
            let pages: Pages = {
                pages: pagesData,
            };
            return pages;
        } catch (err) {
            console.error("Error in getAllPages : \n", err);
        }
    }

    static async getPageByID(pageID: PageID): Promise<Page | undefined> {
        try {
            const pageDoc = await collections.notions?.findOne({ _id: new ObjectId(pageID.id) });
            if (pageDoc) {
                const pageData = (pageDoc as unknown) as Page;
                return pageData;
            }
        } catch (err) {
            console.error("Error in getPageByID : \n", err);
        }
    }

    static async addPage(page: Page): Promise<Response | undefined> {
        try {
            const res = await collections.notions?.insertOne(page);
            if (res) {
                const _res: Response = {
                    responseMsg: "Success creating new page",
                    code: 201,
                    pages: page
                };
                return _res;
            } else {
                const _res: Response = {
                    responseMsg: "Error when creating new page",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in addPage : \n", err);
        }
    }

    static async updatePage(pageWithID: PageWithID): Promise<Response | undefined> {
        try {
            const res = await collections.notions?.updateOne(
                { _id: new ObjectId(pageWithID.pageId?.id) },
                { $set: pageWithID.page }
            );
            if (res) {
                const _res: Response = {
                    code: 200,
                    responseMsg: "Success updating page",
                };
                return _res;
            } else {
                const _res: Response = {
                    responseMsg: "Error when updating page",
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in updatePage : \n", err);
        }
    }

    static async deletePage(pageID: PageID): Promise<Response | undefined> {
        try {
            const res = await collections.notions?.deleteOne({ _id: new ObjectId(pageID.id) });
            if (res) {
                const _res: Response = {
                    responseMsg: "Success deleting page",
                };
                return _res;
            } else {
                const _res: Response = {
                    code: 200,
                    responseMsg: "Error when deleting page",
                    pages: res
                };
                return _res;
            }
        } catch (err) {
            console.error("Error in deletePage : \n", err);
        }
    }
}
