import { Injectable } from "@nestjs/common";
import { diskStorage } from 'multer'

@Injectable()
export class CommonService{
    
}

var imgName = ''


const filter = (req: any, file: any, cb: any) => {
    if (file.mimetype === 'application/json') {
        cb(null, 'data.json')
    }
    if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg'|| file.mimetype === 'image/jpeg') {
        imgName = Date.now() + "-" + file.originalname
        cb(null, imgName)
    }
}


export const getImgName = () => {
    let img = imgName
    imgName = ''
    return img
}

export const upload = {
    storage: diskStorage({
        destination: (req: any, file: any, cb: any) => {
           if (file.mimetype === 'application/json') {
              cb(null, './public/files')
        }
       if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
           cb(null, './images')
        }
    },
        filename: filter
    })   
}