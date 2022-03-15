FROM  node:16-alpine  as BUILD_IMAGE

WORKDIR /app

# Resolve node_modules for caching
COPY ./package.json ./
COPY ./yarn.lock ./
RUN yarn install --production=true --frozen-lockfile

# Copy all for build and release cache if package.json update
COPY . .
RUN yarn build
#------------------------------------------------------------------------------------

# Create new namespace for final Docker Image
FROM  node:16-alpine 

# Only copy your source code without system file
COPY --from=BUILD_IMAGE /app /app

WORKDIR /app

#ENV STRAPI_LOG_LEVEL=debug

CMD [ "yarn", "start" ]
