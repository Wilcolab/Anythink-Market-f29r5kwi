FROM node:18-alpine

WORKDIR /usr/src/app

# install dependencies
COPY package.json package-lock.json yarn.lock* ./
RUN yarn install --frozen-lockfile --network-timeout 100000 || yarn install

# copy app source
COPY . .

EXPOSE 8001

CMD ["yarn", "start"]