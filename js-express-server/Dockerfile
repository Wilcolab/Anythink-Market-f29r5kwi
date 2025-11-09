FROM node:18-alpine

WORKDIR /usr/src/app

# copy manifests first for cached installs
COPY package.json yarn.lock* package-lock.json* ./

# install with yarn if available, fallback to npm
RUN if [ -f yarn.lock ]; then \
      yarn install --frozen-lockfile --network-timeout 100000; \
    else \
      npm install; \
    fi

COPY . .

EXPOSE 8001

CMD ["yarn", "start"]