
let debug				= false;

function log ( msg, ...args ) {
    let datetime			= (new Date()).toISOString();
    console.log(`${datetime} [ src/index. ]  INFO: ${msg}`, ...args );
}


function xor_digest ( bytes, length ) {
    let digest				= new Uint8Array(length);
    let digested			= 0;

    while ( digested < bytes.length ) {
	let chunk			= bytes.slice( digested, digested + length );
	digested		       += length;

	for (let i=0; i < length; i++ ) {
	    if ( chunk[i] === undefined )
		break;

	    digest[i]		       ^= chunk[i];
	}
    }
    return digest;
}



let base_exports = {
    xor_digest,
    logging () {
	debug				= true;
    },
};

module.exports = {
    bindNative() {
	if ( String.prototype.xorDigest !== undefined )
	    throw new Error(`Uint8Array.xorDigest is already defined as type: ${typeof Uint8Array.xorDigest}`);

	Object.defineProperty(Uint8Array.prototype, "xorDigest", {
	    "value": function ( n ) {
		return new xor_digest( this, n );
	    },
	    "enumerable": false,
	    "writable": false,
	});

	return base_exports;
    },
    ...base_exports
};
