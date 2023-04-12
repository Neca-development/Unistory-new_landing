import { useRef, useState, useEffect } from "react";

export function useInterval(
	callback: () => void,
	delay: number,
	deps: any[] = []
) {
	const savedCallback = useRef<Function>(() => null);
	const [intervalDelay, setIntervalDelay] = useState(delay);

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (typeof intervalDelay === "number" && intervalDelay > 0) {
			let id = setInterval(tick, intervalDelay);
			return () => clearInterval(id);
		}
	}, [intervalDelay, ...deps]);

	// Update the interval delay when it changes.
	useEffect(() => {
		setIntervalDelay(delay);
	}, [delay]);

	return setIntervalDelay;
}
