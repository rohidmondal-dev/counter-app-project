import GlobalCounter from "@/components/GlobalCounter";
import GlobalCounterButton from "@/components/GlobalCounterButton";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";

const page = () => {
	return (
		<>
			<section className="grid h-[80dvh] place-items-center">
				<Card className="w-xs">
					<CardHeader>
						<CardTitle className="grid place-items-center text-2xl">
							Atomic Counter App
						</CardTitle>
					</CardHeader>
					<CardContent>
						<div className="space-y-8">
							<GlobalCounter />

							<GlobalCounterButton />
						</div>
					</CardContent>
				</Card>
			</section>
		</>
	);
};

export default page;
