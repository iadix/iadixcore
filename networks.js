var Put = require('bufferput');
var buffertools = require('buffertools');
var hex = function(hex) {
  return new Buffer(hex, 'hex');
};

exports.livenet = {
  name: 'livenet',
  magic: hex('CAFEBED9'),
  addressVersion: 25,
  privKeyVersion: 128,
  P2SHVersion: 85,
  hkeyPublicVersion: 0x0488b21e,
  hkeyPrivateVersion: 0x0488ade4,
  genesisBlock: {
    hash: hex('88FC41F604A19515CD30D33175FD4DE7A8F0D18DB75D57A5D3C86C16BA0A0000'),
    merkle_root: hex('0CAA19056C7AC42D1F1F23A0C5BCA407C91D26482B2335B2BAD3CF4C9DE9CDF1'),
    height: 0,
    nonce: 579883,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1466419085,
    bits: 504365055,
  },
  dnsSeeds: [
    'coin.iadix.com',
  ],
  defaultClientPort: 16714
};

exports.mainnet = exports.livenet;

exports.testnet = {
  name: 'testnet',
  magic: hex('0b110907'),
  addressVersion: 0x6f,
  privKeyVersion: 239,
  P2SHVersion: 196,
  hkeyPublicVersion: 0x043587cf,
  hkeyPrivateVersion: 0x04358394,
  genesisBlock: {
    hash: hex('43497FD7F826957108F4A30FD9CEC3AEBA79972084E90EAD01EA330900000000'),
    merkle_root: hex('3BA3EDFD7A7B12B27AC72C3E67768F617FC81BC3888A51323A9FB8AA4B1E5E4A'),
    height: 0,
    nonce: 414098458,
    version: 1,
    prev_hash: buffertools.fill(new Buffer(32), 0),
    timestamp: 1296688602,
    bits: 486604799,
  },
  dnsSeeds: [
    'testnet-seed.bitcoin.petertodd.org',
    'testnet-seed.bluematt.me'
  ],
  defaultClientPort: 18333
};
