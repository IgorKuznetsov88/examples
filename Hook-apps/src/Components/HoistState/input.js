import React from 'react';

const Input = props => (
	<input type="number" value={props.value}
		onChange={e => props.liftValue(e.target.value)} />
)

export default Input;