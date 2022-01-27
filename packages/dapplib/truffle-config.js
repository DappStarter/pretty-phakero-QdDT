require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea nasty fringe trophy name return pave coin grace nature slot gift'; 
let testAccounts = [
"0x50fc4068106be566cb0dd57061ba55339471b9f960099b35134afbc20da6fecc",
"0x24d33428e44429789558aabccad424dc334d507c0d17ea5e409dc6a3d06c5680",
"0xad6e248215f494e9fb429e171b73669b8271d2e18da8eec5c2e6d4d379a69fce",
"0x64597e1d2c00f6fd2bf9ed0c30782876fd2fe0dcec261ae8bfaa687beaf6a5df",
"0x5a69d5ac9e1de569b117e36f282c45f1d463d758471d94ee7ff78900070b4d9a",
"0x79ff2981f919f6a235b9a9e2547eaffafdda3e719a4dc57148a2a679be7ea796",
"0x030ef19bb75939002e3d06f58c6fa2273420a953588ffbe491b714e3855c2b8b",
"0x3037101f8d9cab865d847586e6ad745aebc69ddb98fd1d94b10e158d3246b4c4",
"0x35d63210536cbe25273d200c44941e6f19c26536967a631287fa3e5f180392a5",
"0x8dcbfdfb8d17f86376e8806522302fa5ef48ae2932573dc669fe6dd67d3bcaef"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


