import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Entity } from "typeorm";

@Entity()
export class todoDto {
    @ApiProperty({ description: 'title' })
    @IsString()
    title!: string;

    @ApiProperty({ description: 'desc' })
    @IsString()
    desc!: string;
}