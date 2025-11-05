import ExpartCounter from "@/components/ExpartCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expart | Counter State App",
	description: "Expart Counter State App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Expart Counter App
					</CardTitle>
				</CardHeader>
				<CardContent>
					<ExpartCounter />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
