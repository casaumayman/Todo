import { ArgumentsHost, Catch, ExceptionFilter, HttpStatus } from "@nestjs/common";
import { Request, Response } from 'express';

@Catch(Error)
export class AllErrorFilter implements ExceptionFilter {
    catch(error: Error, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        response
            .status(HttpStatus.BAD_REQUEST)
            .json({
                message: error.message
            })
    }
}