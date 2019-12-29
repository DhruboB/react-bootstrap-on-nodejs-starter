#!/bin/bash

# TODO Script needs to be enhanced based on various logic

DEV_CONFIG_PATH=server/config/dev.json

# Gets a value from the dev.json . python2 is used, you can also use jq instead.
getFileMetadataPath() {
  cat ${DEV_CONFIG_PATH} | python2 -c "import sys, json; print json.load(sys.stdin)['$1']"
}

DOCKER_IMG_NAME=$(getFileMetadataPath 'docker_img_name')
DOCKER_IMG_VERSION=$(getFileMetadataPath 'docker_img_version')
CONTAINER_EXPOSE_PORT=$(getFileMetadataPath 'container_expose_port')
CONTAINER_NAME=$(getFileMetadataPath 'container_name')
APP_PORT=$(getFileMetadataPath 'port')

docker run -p ${APP_PORT}:${CONTAINER_EXPOSE_PORT}} --name ${CONTAINER_NAME} ${DOCKER_IMG_NAME}:latest &

echo "container is launched at http://localhost:${APP_PORT}
TO see container log use command docker logs ${CONTAINER_NAME}"