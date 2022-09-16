import { Types } from "./Types";
export class Reward {
    IdReward : number = 0;
    NameReward : string = "";
    IdType: Types = new Types();  
    StartDate: Date = new Date();
    EndDate: Date = new Date();
    Code: String = "";
    Description: String = "";
  }