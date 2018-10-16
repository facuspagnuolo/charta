module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*", // Match any network id,
            gas: 6712390,
            gasPrice: 1,
        },
        local: {
            host: 'localhost',
            port: 8545,
            network_id: '*',
            gas: 6000000,
            gasPrice: 2e9, // 2 Gwei
        },
        ropsten: {
            host: 'localhost',
            port: 8565,
            network_id: 3,
            gas: 500000,
            gasPrice: 10e9, // 10 Gwei
        },
        rinkeby: {
            host: 'localhost',
            port: 8565,
            network_id: 4,
            gas: 500000,
            gasPrice: 10e9, // 10 Gwei
        },
        kovan: {
            host: 'localhost',
            port: 8555,
            network_id: 42,
            gas: 500000,
            gasPrice: 10e9, // 10 Gwei
        },
        live: {
            host: "localhost",
            port: 8547,
            network_id: "1",
            from: "0xd4915e172a195f5f3e343a4196e8bda3fc94aee8",
            gas: 4000000,
            gasPrice: 22000000000, // 15 GWei, as per https://ethgasstation.info/
        },
    },
    test_directory: "transpiled/test",
    migrations_directory: "migrations",
};
