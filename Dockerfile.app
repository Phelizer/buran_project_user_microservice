FROM node:20

COPY . .
EXPOSE 5000
RUN yarn
CMD ["yarn", "start:watch"]