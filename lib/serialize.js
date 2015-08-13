'use strict';

/**
* FUNCTION: serialize()
*	Serializes positive infinity for dynamic code evaluation.
*
* @returns {String} serialized value
*/
function serialize() {
	return 'Number.POSITIVE_INFINITY';
} // end FUNCTION serialize()


// EXPORTS //

module.exports = serialize;
