import { Injectable, NotFoundException, StreamableFile } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as path from 'path';
import { FileCategory, FileEntity } from 'src/Entites/File-Entites/file.entity';
import { Repository } from 'typeorm';
import * as fs from 'fs'


@Injectable()
export class FileService {
    constructor(
        @InjectRepository(FileEntity)
        private fileRepo: Repository<FileEntity>
    ) { }

    private detectCategory(mimetype: string): FileCategory {
        if (mimetype.startsWith('image/')) return FileCategory.IMAGE
        if (mimetype.startsWith('video/') || mimetype.startsWith('audio/'))
            return FileCategory.MEDIA

        const documentTypes = [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'application/vnd.ms-excel',
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'text/plain',
        ]

        if (documentTypes.includes(mimetype)) return FileCategory.DOCUMENT

        return FileCategory.OTHERS
    }

    async saveFile(file: Express.Multer.File, userId: string) {
        console.log(userId)
        try {
            const fileEntity = this.fileRepo.create({
                fileName: file.originalname,
                mimetype: file.mimetype,
                size: file.size,
                url: path.join(file.destination, file.filename),
                category: this.detectCategory(file.mimetype),
                owner: { id: Number(userId) }
            })

            return this.fileRepo.save(fileEntity)

        } catch (error) {
            console.log("Error While Uploading!", error)
        }
    }

    async getFilesByCategory(userId: string, category: FileCategory) {
        return this.fileRepo.find({
            where: {
                owner: { id: Number(userId) },
                category
            }
        })
    }

    async deleteFile(fileId: string, userId: string) {
        const file = await this.fileRepo.findOne({
            where: {
                id: Number(fileId),
                owner: { id: Number(userId) }
            }
        })

        console.log("Deleting file with:", { fileId, userId }); 

        if (!file) {
            throw new NotFoundException('File Not Found!')
        }

        try {
            const filePath = path.isAbsolute(file.url)
                ? file.url
                : path.join(process.cwd(), file.url);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath)
            }
        } catch (error) {
            console.error('Error deleting file from storage:', error);
        }

        await this.fileRepo.remove(file)
        return {
            message: "File Deleted Successfully!",
            id: fileId
        }
    }

    async getFiles(userId: number) {
        const files = await this.fileRepo.find({
            where: {
                owner: { id: Number(userId) }
            }
        })

        if (!files) {
            throw new NotFoundException("Files Not Found!")
        }

        if (files.length === 0) {
            throw new NotFoundException("Files Not Found!")
        }


        return {
            message: "The Files Are!",
            files
        }
    }


    async DownloadFile(fileId: string, userId: string): Promise<{ stream: StreamableFile, mimetype: string, filename: string }> {
        const file = await this.fileRepo.findOne({
            where: {
                id: Number(fileId),
                owner: { id: Number(userId) }
            }
        })

        if (!file) {
            throw new NotFoundException("File Not Found!")
        }



        const filePath = path.resolve(file.url)

        if (!fs.existsSync(filePath)) {
            throw new NotFoundException("File Not Found In Local Storage!")
        }

        const fileStream = fs.createReadStream(filePath)

        return {
            stream: new StreamableFile(fileStream),
            mimetype: file.mimetype,
            filename: file.fileName
        }
    }

    async getTotalStorage(userId: number) {
        const files = await this.fileRepo.find({
            where: {
                owner: {
                    id: userId
                }
            }
        })

        const totalSize = files.reduce((acc, f) => acc + f.size, 0)

        return {
            totalSize
        }
    }

}
