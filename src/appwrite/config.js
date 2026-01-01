import conf from "../conf/conf"
import { Client,ID,Account,Storage,Databases } from "appwrite"



export class Service {
    client = new Client();
    detabases;
    bucket;

    constructor() {
        this.client
        .setEndpoint(conf.appwrite_Url)
        .setProject(conf.appwrite_ProjectId);
        this.detabases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({titel, slug, content, featuredIMG , status, userID}){
        try {
            return await this.detabases.createDocument(conf.appwrite_DetabaseId,conf.appwrite_CollectionId,slug,{
                titel,
                content,
                featuredIMG,
                status,
                userID,
            })
        } catch (error) {
            console.log(error);
            
        }
    }

    async updatePost({}) {
        
    }



} 
const service = new Service()
export default service