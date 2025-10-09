import { Controller, Delete, Get, Param, Post, Req, Res, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer'
import { JwtAuthGuard } from 'src/auth/guards/jwt-guard-';
import { FileService } from './file.service';
import { FileCategory } from 'src/Entites/File-Entites/file.entity';
import { Response } from 'express';

@Controller('file')
export class FileController {
    constructor(
        private fileService: FileService
    ) { }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',
                filename: (req, file, cb) => {
                    const uniqueName = `${Date.now()}-${file.originalname}`
                    cb(null, uniqueName)
                }
            })
        })
    )

    @UseGuards(JwtAuthGuard)
    async uploadFile(@UploadedFile() file: Express.Multer.File, @Req() req) {
        const userId = req.user?.id
        return this.fileService.saveFile(file, userId)
    }

    @Delete('/delete/:id')
    @UseGuards(JwtAuthGuard)
    async DeleteFile(@Param('id') id: string, @Req() req) {
        const userId = req.user?.id
        return this.fileService.deleteFile(id, userId)
    }

    @Get('/getFiles')
    @UseGuards(JwtAuthGuard)
    async getFiles(@Req() req){
        const userId = req.user?.id
        return this.fileService.getFiles(Number(userId))
        }

    @Get('category/:category')
    @UseGuards(JwtAuthGuard)
    async getFilesByCategory(@Param('category') category: FileCategory, @Req() req) {
        const userId = req.user?.id
        return this.fileService.getFilesByCategory(userId, category)
    }

    @Get('/total')
    @UseGuards(JwtAuthGuard)
    async getTotalStorage(@Req() req){
        const userId = req.user?.id
        return this.fileService.getTotalStorage(userId)
    }
    
    @Get(':id/download')
    @UseGuards(JwtAuthGuard)
    async downloadFile(@Param('id') id: string, @Req() req, @Res() res: Response) {
        const userId = req.user?.id || 'anonymous';
        const { stream, filename, mimetype } = await this.fileService.DownloadFile(id, userId);

        res.setHeader('Content-Type', mimetype)
        res.setHeader('Content-Disposition', `attachment; filename=${filename}`)
        
        stream.getStream().pipe(res)
    }

      
}
