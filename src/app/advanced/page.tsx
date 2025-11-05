import AdvancedCounter from "@/components/AdvancedCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";

const page = () => {
	return (
		<div>
			<section className="grid h-[95dvh] place-items-center">
				<Card className="w-xs">
					<CardHeader>
						<CardTitle className="grid place-items-center text-2xl">
							Advanced Counter App
						</CardTitle>
					</CardHeader>
					<CardContent>
						<AdvancedCounter />
					</CardContent>
				</Card>
			</section>
		</div>
	);
};

export default page;
