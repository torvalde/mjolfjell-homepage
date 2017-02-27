FROM nginx
MAINTAINER Ulrik Einarson <torvalde@gmail.com>

# forward request and error logs to docker log collector
RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

#EXPOSE 80

COPY nginx.conf /etc/nginx/nginx.conf

COPY placeholder /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]