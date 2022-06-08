require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom kiwi swallow food town remember noise erosion hover define army gasp'; 
let testAccounts = [
"0x7561be9d5a985f015d7587716a9038598916fa97d69ecf9eb6ca52740f1594af",
"0xd108827723a1ee1d426effbf5f26719d31106de227abee937d1c9c277255d5f2",
"0x206ad48526460a34cb6e051c1b75349be1f9aca83ab74ac4854dff3cbf95e05f",
"0xfaae7e83449ee09c4382c4e8b4f3a6c4c5f12f49bff24d1fae36eea3e3256e7c",
"0xadece981ce08e56016cbeaa5d33b91c56efc90d689348a09bcdf6c50b264eb29",
"0xa74de5a76e84682cb5df4be06103cdf84490cc55e58bff9f6229269d5295f4c6",
"0xbaf1122d315707f01776e13568e4bbcbcf5576e2097b0dc895a97389565945e4",
"0xc12863bddc93a044f1e7d748e9503176a1314b0e3121994dd4e6ea8d4bb033a5",
"0x2e879d80a7e6de0cbf9752551c439de134ae784dbde3cedfe75d9493945ec7d7",
"0x112094ee61504799824649ececf90ed47b5e64f3f7a6fe850f6620492403b9ae"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

