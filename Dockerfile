FROM jekyll/jekyll:4.2.2

COPY Gemfile* /srv/jekyll/

WORKDIR /srv/jekyll

RUN apk update \
 && apk add build-base\
            curl \
            gcc \
            libc-dev libffi-dev libgcrypt-dev libxml2-dev libxslt-dev \
            make \
            ruby-dev \
            zlib-dev

RUN bundle install

EXPOSE 4000
