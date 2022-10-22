import { IsArray, IsNumber, IsString } from "class-validator";


export class CreateMenuDto {}

export class getMenubyCategoryIdListDto{

    @IsArray()
    @IsNumber({}, {each:true})
    CategoryIdList: number[]
}


export class getMenubyCategoryIdListAnonymousDto{

    @IsArray()
    @IsNumber({}, {each:true})
    CategoryIdList: number[]

    @IsArray()
    @IsString({each:true})
    receive: string[]
}