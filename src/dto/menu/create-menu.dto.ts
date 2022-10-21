import { IsArray, IsNumber } from "class-validator";


export class CreateMenuDto {}

export class getMenubyCategoryIdListDto{

    @IsArray()
    @IsNumber({}, {each:true})
    CategoryIdList: number[]
}
