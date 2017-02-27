FROM alpine:3.4

EXPOSE 5000
WORKDIR /www
ENTRYPOINT ["nginx", "-c",  "/nginx.conf"]

RUN apk add --no-cache nginx
ADD nginx.conf /

ADD placeholder /www