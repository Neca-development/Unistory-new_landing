import { useRef, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { useMounted } from "@shared/lib/hooks/useMounted";

interface PortalProps {
	children: ReactNode;
}

export const Portal = (props: PortalProps) => {
	const ref = useRef<Element | null>(null);
	const mounted = useMounted()

	useEffect(() => {
		ref.current = document.querySelector<HTMLElement>("#portal");
	}, []);

	return mounted && ref.current
		? createPortal(props.children, ref.current)
		: null;
};
