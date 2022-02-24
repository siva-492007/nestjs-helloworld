import {Controller, Get} from "@nestjs/common";
import {HelloWorldService} from "./hello.service";

@Controller()
export class HelloWorldController {
    constructor(private helloWorldService: HelloWorldService) {}
    @Get('/')
    helloWorld(){
        return this.helloWorldService.helloWorld()
    }



}
