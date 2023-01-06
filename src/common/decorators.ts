// 装饰器好像通常是用在post请求中

import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const Name = createParamDecorator((data: unknown, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest(); // 拿到请求
  return request.body.name;
})