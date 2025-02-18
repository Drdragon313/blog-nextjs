import Sidenav from "@/app/ui/components/sidenav";
export default function AppLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-white">
			<div className="w-full flex-none md:w-64">
				<Sidenav />
			</div>
			<div className="flex-grow p-2 text-black md:overflow-y-auto md:p-2">
				{children}
			</div>
		</div>
	);
}
