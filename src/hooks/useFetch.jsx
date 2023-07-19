import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const useFetch = ({ url, action: { method, data } }) => {
	const [loading, setLoading] = useState(true);
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const ref = useRef();

	return null;
};

export default useFetch;
