ARG IMAGE="node"
ARG IMAGE_VERSION="8-stretch"

FROM ${IMAGE}:${IMAGE_VERSION}

LABEL maintainer="https://github.com/DhruboB"

# Declaring all variables and hard coded values
ARG FINISH_MSG="Finished installing dependencies"
ARG FILES_TO_COPY="package.json webpack.common.js webpack.dev-proxy.js webpack.dev-standalone.js webpack.prod.js"
ARG ARG_NODE_ENV="production"
ARG ARG_PORT="3000"
ARG ARG_PUBLIC_URL="/"
ARG WORKDIRECTORY="/app"

# Setting environment variables
ENV NODE_ENV=${ARG_NODE_ENV}} \
    PORT=${ARG_PORT}} \
    PUBLIC_URL=${ARG_PUBLIC_URL}

# Change working directory
WORKDIR ${WORKDIRECTORY}

# Update packages and install dependency packages for services
RUN apt-get update \
    && apt-get dist-upgrade -y \
    && apt-get clean \
    && echo ${FINISH_MSG}}

# Install npm production(default) packages
COPY package.json webpack.common.js webpack.dev-proxy.js webpack.dev-standalone.js webpack.prod.js ${WORKDIRECTORY}/
RUN cd ${WORKDIRECTORY}; npm install --${ARG_NODE_ENV}
COPY /client /app/client/
RUN npm install --only=dev; npm run build; npm prune --${ARG_NODE_ENV}

COPY . ${WORKDIRECTORY}

EXPOSE ${ARG_PORT}

CMD ["npm", "start"]