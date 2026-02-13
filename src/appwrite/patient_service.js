
import conf from "../conf/conf";
import { Client,Databases,ID } from "appwrite";

export class PatientService {
    client = new Client();
    databases;


    constructor(){
        this.client
        .setEndpoint(conf.appwrite_Url)
        .setProject(conf.appwrite_ProjectId);

        this.databases = new Databases(this.client);
    }


    async SEND_PT_DATA({name, age, gender, bloodgroup, addharno, contactno, address, altnumber, datetime}) {
        try{
            const res = await this.databases.createDocument(detabase_id, detabasecollection_ID , ID.unique(),
        {
            name,
            age,gender, bloodgroup, addharno, contactno, address, altnumber, datetime

        });
        return res;
        }

        catch(error){
            console.log("SEND_PT_DATA ERROE :", error);
            throw error;    
        }
    }


    async GET_DATA(){
        try {
            const res = await this.databases.listDocuments(
                databases_id,databasecollectionid,
            );
            return res.documents;    
        } 
        
        catch (error) {
            console.log("GET_DATA FAILD :", error);
            throw error;
        }
    }


    // UPDATE
    async UPDATE_PT_DATA(documentid,data){
        try {
            const res = await  this.databases.updateDocument(
                db_id,collection_id,
                documentID,
                data
            );
            return res;
        } 
        catch (error) {
            console.log("UPDATE_PT_DATA ERROR : ", error);
            throw error;
        }
    }

    //  GET SINGALE DATA 
        async GET_SINGALE_PT_DATA(){
            
        }    









}

const patientservice = new PatientService();
export default patientservice;