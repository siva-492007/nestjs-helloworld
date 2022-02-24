import { Module } from '@nestjs/common';
import {HelloWorld} from "./HelloWorld/hello.module";

@Module({
  imports: [HelloWorld],
})
export class AppModule {}
