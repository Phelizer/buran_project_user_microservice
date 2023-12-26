FROM node:20

COPY . .
EXPOSE 5000
RUN yarn install --production=false
CMD ["yarn", "start:watch"]