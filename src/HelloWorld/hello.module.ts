import {Module} from "@nestjs/common";
import {HelloWorldController} from "./hello.controller";
import {HelloWorldService} from "./hello.service";

@Module({
    controllers: [HelloWorldController],
    providers: [HelloWorldService]
})

export class HelloWorld {}
