FROM scaleway/ubuntu:trusty
MAINTAINER Ulrik Einarson <torvalde@gmail.com>



# Prepare rootfs for image-builder.
#   This script prevent aptitude to run services when installed
RUN /usr/local/sbin/builder-enter


# Install packages
RUN apt-get -q update && \
    apt-get -y -qq upgrade && \
    apt-get install -y -qq cowsay


# Add local files from the patches directory
COPY ./patches/ /


# Clean rootfs from image-builder.
#   Revert the builder-enter script
RUN /usr/local/sbin/builder-leave

COPY nginx.conf /etc/nginx/nginx.conf

COPY placeholder /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]