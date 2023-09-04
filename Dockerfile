FROM node:slim

WORKDIR backend

RUN npm install -g pnpm

COPY . /backend/

RUN pnpm i

RUN pnpm build

EXPOSE 1446

CMD ["pnpm", "start"]