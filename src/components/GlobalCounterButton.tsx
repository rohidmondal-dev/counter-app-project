"use client";
import { counterAtom } from "@/lib/atom";
import { useAtom } from "jotai";
import { CircleMinusIcon, CirclePlusIcon } from "lucide-react";
import { Button } from "./shadcnui/button";

const GlobalCounterButton = () => {
	const [count, setCount] = useAtom(counterAtom);

	const plusOne = () => {
		if (count <= 99) {
			setCount(count + 1);
		}
	};

	const minusOne = () => {
		if (count >= 1) {
			setCount(count - 1);
		}
	};

	const plusTen = () => {
		if (count <= 90) {
			setCount(count + 10);
		}
	};

	const minusTen = () => {
		if (count >= 10) {
			setCount(count - 10);
		}
	};
	return (
		<>
			<div className="grid grid-cols-2 gap-4">
				<Button
					onClick={minusOne}
					disabled={count < 1}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinusIcon /> Minus 1
				</Button>

				<Button
					onClick={plusOne}
					disabled={count > 99}
					className="cursor-pointer">
					<CirclePlusIcon /> Plus 1
				</Button>

				<Button
					onClick={minusTen}
					disabled={count < 10}
					variant={"destructive"}
					className="cursor-pointer">
					<CircleMinusIcon /> Minus 10
				</Button>

				<Button
					onClick={plusTen}
					disabled={count > 90}
					className="cursor-pointer">
					<CirclePlusIcon /> Plus 10
				</Button>
			</div>
		</>
	);
};

export default GlobalCounterButton;
