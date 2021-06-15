const path				= require('path');
const log				= require('@whi/stdlog')(path.basename( __filename ), {
    level: process.env.LOG_LEVEL || 'fatal',
});

const expect				= require('chai').expect;
const { xor_digest, logging }		= require('../../src/index.js').bindNative();

if ( process.env.LOG_LEVEL )
    logging();


function basic_tests () {
    it("should get 4 byte xor digest", async () => {
	let input			= new Uint8Array([
	    207,  39,   6,  42, 162,   2,  95, 176,
	     73, 215,  86, 158, 133, 121,  16, 209,
	    230, 217, 119, 208,  52, 155,  79,  31,
	    250, 159,  28, 212, 252, 178, 226, 227
	]);
	let result			= xor_digest( input, 4 );

	expect( result			).to.have.length( 4 );
	expect( result			).to.deep.equal(new Uint8Array([ 117, 228, 217, 45 ]));
    });

    it("should use native binding", async () => {
	let input			= new Uint8Array([
	    207,  39,   6,  42, 162,   2,  95, 176,
	     73, 215,  86, 158, 133, 121,  16, 209,
	    230, 217, 119, 208,  52, 155,  79,  31,
	    250, 159,  28, 212, 252, 178, 226, 227
	]);
	let result			= input.xorDigest( 4 );

	expect( result			).to.have.length( 4 );
	expect( result			).to.deep.equal(new Uint8Array([ 117, 228, 217, 45 ]));
    });
}

describe("XOR Digest", () => {

    describe("Basic", basic_tests );

});
