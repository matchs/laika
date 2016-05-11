FROM golang:1.6-alpine

RUN apk add --update --no-cache git mysql-client nodejs

RUN npm install -g gulp bower

RUN mkdir -p /go/src/github.com/MEDIGO/laika
WORKDIR /go/src/github.com/MEDIGO/laika

COPY package.json /go/src/github.com/MEDIGO/laika/
RUN npm install

COPY bower.json /go/src/github.com/MEDIGO/laika/
RUN bower --allow-root install

COPY . /go/src/github.com/MEDIGO/laika

RUN go build .

CMD [“laika”]
