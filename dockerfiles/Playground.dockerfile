FROM node:16-alpine
RUN apk add --no-cache git sqlite
WORKDIR /proj

RUN git clone --depth=1 https://github.com/zkopru-network/zkopru

WORKDIR /proj/zkopru

# install build tools temporarily
RUN apk add --no-cache --virtual .gyp \
        python3 \
        python2 \
        make \
        g++ \
        chromium \
        && npm install -g truffle ganache-cli --unsafe-perm=true --allow-root \
        && yarn \
        && yarn install \
        && npx lerna run build --scope=@zkopru/cli \
        && apk del .gyp

WORKDIR /proj/zkopru/packages/cli

RUN  ganache-cli --db=/proj/data -i 20200406 -p 5000 --gasLimit 12000000 --deterministic --host 0.0.0.0 & \
        sleep 5 && cd /proj/zkopru/packages/contracts && truffle migrate --network testnet

COPY ./packages/circuits/keys /proj/zkopru/packages/cli/keys

CMD  ganache-cli --db=/proj/data -i 20200406 -p 5000 --gasLimit 12000000 --deterministic --host 0.0.0.0 > /dev/null & \
        sleep 1;\
        node /proj/zkopru/packages/cli/dist/apps/coordinator/cli.js \
        --daemon --config /proj/zkopru/packages/cli/coordinator.playground.json > /dev/null & \
        sleep 2;\
        node /proj/zkopru/packages/cli/dist/apps/wallet/cli.js \
        --config /proj/zkopru/packages/cli/wallet.playground.json
