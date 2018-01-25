/**
 * 
 */

class CppToJava {

	static clone( o ) {
		let output, v, key;
		output = Array.isArray(o) ? [] : {};
		for ( key in o ) {
			v = o[key];
			output[key] = ( typeof v === "object" ) ? this.clone( v ) : v;
		};
		return output;
	};

};
