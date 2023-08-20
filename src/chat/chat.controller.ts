import { Controller, Get, Render, Res } from "@nestjs/common";
import { ChatService } from "./chat.service";

@Controller()
export class ChatController {
 constructor(private readonly appService: ChatService) {}
 
    @Get('/chat')
    @Render('index')
    Home() {
        return;
    }
 
    @Get('/api/chat')
    async Chat(@Res() res) {
        const messages = await this.appService.getMessages();
        res.json(messages);
    }
}