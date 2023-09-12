import { Optional } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  name?: string;

  @Prop({
    unique: true
  })
  login: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);