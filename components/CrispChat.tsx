"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("e54745f8-4b63-4051-a5b2-762b67454fe7");
	}, []);

	return null;
};
