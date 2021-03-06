import { Button, Image, Space, Spin } from 'antd';
import placeholderImg from 'assets/images/placeholder.svg';
import { useOrientation } from 'config/hooks';
import AmenityTypeTag from 'features/amenities/AmenityTypeTag';
import PieChartComponent from 'features/dashboard/PieChartComponent';
import SpinContainer from 'features/shared/components/styledComponents/SpinContainer';
import { COLOR_CODES, MONTHS_LONG, MONTHS_SHORT } from 'lib/constants';
import { transformCloudinaryImage } from 'lib/utils';
import type { AmenityType } from 'features/amenities/Types';

type PaymentsComponentType = {
	loading: boolean;
	displayRazorpay: () => Promise<void>;
	paymentInfo: {
		pay: number;
		paymentMonth: string;
		isFirstPayment?: boolean;
		onboardingDate?: number;
		daysInMonth?: number;
		amenities: AmenityType[];
	};
};

export default function PaymentsComponent(props: PaymentsComponentType) {
	const { loading, displayRazorpay, paymentInfo } = props;
	const { isMobileSize } = useOrientation();
	const {
		pay,
		paymentMonth = '',
		isFirstPayment,
		onboardingDate,
		daysInMonth,
		amenities = [],
	} = paymentInfo;

	const [month, year] = paymentMonth.split('_');
	const monthShort = MONTHS_SHORT[+month];

	const pieChartData = amenities.map((amenity, index) => ({
		...amenity,
		value: amenity.fee,
		color: COLOR_CODES[index],
	}));

	const totalMonthlyFee = amenities.reduce(
		(total, { fee }: { fee: number }) => total + fee,
		0
	);

	return loading ? (
		<SpinContainer>
			<Spin tip="loading..." />
		</SpinContainer>
	) : (
		<>
			<div className="mb-4">
				<Space size="large">
					<p className="sm:text-lg">Total Payment ₹{pay}</p>
					<Button
						type="primary"
						disabled={!pay}
						onClick={displayRazorpay}
					>
						Pay Now
					</Button>
				</Space>
				{Boolean(pay) && (
					<p className="mt-4 font-light">
						Payment for {MONTHS_LONG[+month]} {year}
					</p>
				)}
				{isFirstPayment && (
					<p className="font-light text-sm">
						{`${onboardingDate} ${monthShort} - ${daysInMonth} ${monthShort}`}
					</p>
				)}
				{!pay && (
					<p className="font-semibold text-green-500">
						All dues are paid.
					</p>
				)}
			</div>

			<div className="pt-6 border-t-2">
				Fare Breakdown per Month
				<span className="block font-semibold text-xs text-blue-500 bg-blue-100 w-max">
					Note: Basic Amenities are included by default.
				</span>
				<div className="sm:flex">
					<div className="sm:w-2/5 my-4">
						{amenities.map(({ icon, name, fee, _id, type }) => (
							<div key={_id} className="w-3/4 my-4">
								<div className="flex justify-between items-start">
									<Image
										width={35}
										height={35}
										preview={false}
										src={
											transformCloudinaryImage(
												icon,
												'WIDTH_50'
											) || placeholderImg
										}
										fallback={placeholderImg}
										alt="amenity icon"
									/>

									<span className="capitalize">{name}</span>
									<Space
										size={isMobileSize ? 'middle' : 'large'}
									>
										<span>₹{fee}</span>
										<AmenityTypeTag type={type} fix />
									</Space>
								</div>
							</div>
						))}
						<span className="font-semibold">
							Total Monthly Fee: ₹{totalMonthlyFee}
						</span>
					</div>
					<div className="-ml-5 sm:-mt-6 sm:ml-20">
						<PieChartComponent
							data={pieChartData}
							title=""
							isPayment
							innerContent={`Total ₹${totalMonthlyFee}`}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
