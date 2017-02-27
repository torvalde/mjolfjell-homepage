NAME =			mjolfjell
VERSION =		0.0.1
VERSION_ALIASES =	0.0 1 latest
TITLE =			Mjolfjell homepage
DESCRIPTION =		An image with cowsay
SOURCE_URL =		https://github.com/torvalde/mjolfjell-homepage
VENDOR_URL =		http://mjolfjell.no

IMAGE_VOLUME_SIZE =	50G
IMAGE_BOOTSCRIPT =	stable
IMAGE_NAME =		Mjolfjell (v0.0.1 BETA)


## Image tools  (https://github.com/scaleway/image-tools)
all:	docker-rules.mk
docker-rules.mk:
	wget -qO - http://j.mp/scw-builder | bash
-include docker-rules.mk