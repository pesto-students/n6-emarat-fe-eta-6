import { useState, FormEvent } from 'react';
import { ConfirmationResult } from 'firebase/auth';
import { toast } from 'react-toastify';
import { apiRequest } from 'config/apiRequest';
import { stripNonNumbers } from 'lib/utils';
import { sendOtp, confirmOtp } from 'lib/firebaseAuth';
import Button from 'features/shared/components/Button';
import { FaLongArrowAltLeft, FaUser, FaUserCog } from 'react-icons/fa';

type MockLoginRole = 'admin' | 'resident';

export default function LoginForm() {
	const [mobile, setMobile] = useState<string>('');
	const [feedbackText, setfeedbackText] = useState<string>('');
	const [otpSentResult, setOtpSentResult] = useState<ConfirmationResult>();
	const [otpInProgress, setOtpInProgress] = useState<boolean>(false);
	const [mockVisible, setMockVisible] = useState<boolean>(false);
	const [mockInProgress, setMockInProgress] = useState<MockLoginRole>();
	const [otp, setOtp] = useState<string>('');
	const [sumbitBtnText, setSumbitBtnText] = useState<string>('Send OTP');

	const mobileHandler = (e: FormEvent<HTMLInputElement>) => {
		setMobile(stripNonNumbers(e.currentTarget.value));
	};

	const otpHandler = (e: FormEvent<HTMLInputElement>) => {
		setOtp(stripNonNumbers(e.currentTarget.value));
	};

	const otpVerify = async () => {
		if (!otpSentResult) return;

		setSumbitBtnText('Verifying');
		setOtpInProgress(true);

		const isOtpVerified = await confirmOtp(otpSentResult, otp);

		if (isOtpVerified) {
			setSumbitBtnText('Logging In');
			await apiRequest({ apiUrl: 'login' });
		} else {
			setOtpInProgress(false);
			setOtp('');
			setfeedbackText('Invalid OTP entered.');
		}
	};

	const otpSend = async () => {
		setSumbitBtnText('Sending OTP');
		setOtpInProgress(true);

		const isRegisterdUser = await apiRequest({
			apiUrl: 'isRegisteredUser',
			data: { phone: mobile },
		});
		const { meta = {} } = isRegisterdUser;
		if (!meta.success) {
			setOtpInProgress(false);
			setSumbitBtnText('Send OTP');
			return;
		}

		const otpSentResultResult = await sendOtp(
			'recaptcha-container',
			`+91${mobile}`
		);

		setOtpInProgress(false);
		toast.success('OTP Sent!');

		if (otpSentResultResult) {
			setOtpSentResult(otpSentResultResult);
			setSumbitBtnText('Verify');
		} else {
			setfeedbackText('Could not send OTP.');
		}
	};

	// Returns true if has error
	const validate = (): boolean => {
		let error = false;

		if (mobile.length !== 10) {
			setfeedbackText('Mobile number must be 10 digits long.');
			error = true;
		}
		return error;
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setfeedbackText('');

		if (validate()) return;

		// If otp already send the verify else send
		if (otpSentResult) {
			otpVerify();
		} else {
			otpSend();
		}
	};

	const handleMockLogin = async (role: MockLoginRole) => {
		setMockInProgress(role);
		await apiRequest({ apiUrl: 'mockLogin', data: { role } });
	};

	return (
		<div className="shadow-around px-7 py-10 rounded-3xl w-full">
			<div>
				<h3 className="text-4xl font-regular">Login</h3>
				{mockVisible ? (
					<div className="flex flex-col mt-7 space-y-6">
						<Button
							type="submit"
							color="emarat-secondary"
							className="mr-3"
							loading={mockInProgress === 'admin'}
							disabled={mockInProgress !== undefined}
							onClick={() => handleMockLogin('admin')}
						>
							<span className="mr-2">Login As Admin</span>
							{mockInProgress !== 'admin' && (
								<FaUserCog className="text-xl -mt-1" />
							)}
						</Button>

						<Button
							type="submit"
							color="emarat-accent"
							className="mr-3"
							loading={mockInProgress === 'resident'}
							disabled={mockInProgress !== undefined}
							onClick={() => handleMockLogin('resident')}
						>
							<span className="mr-2">Login As Resident</span>
							{mockInProgress !== 'resident' && (
								<FaUser className="text-lg -mt-1" />
							)}
						</Button>

						<button
							type="button"
							className="flex items-center text-lg hover:text-emarat-accent-hover disabled:text-gray-900 disabled:opacity-70 disabled:cursor-not-allowed"
							onClick={() => setMockVisible(false)}
							disabled={mockInProgress !== undefined}
						>
							<FaLongArrowAltLeft />
							<span className="pl-1">Go back</span>
						</button>
					</div>
				) : (
					<>
						<p className="mt-2 text-gray-400">
							Login to your Emarat account
						</p>
						<form onSubmit={handleSubmit}>
							{otpSentResult ? (
								<input
									type="text"
									className="block mt-6 border py-3 px-4 border-gray-200 rounded-lg w-full outline-none"
									placeholder="Enter OTP"
									onInput={otpHandler}
									value={otp}
									maxLength={6}
								/>
							) : (
								<input
									type="text"
									className="block mt-6 border py-3 px-4 border-gray-200 rounded-lg w-full outline-none"
									placeholder="Mobile Number"
									onInput={mobileHandler}
									value={mobile}
									maxLength={10}
								/>
							)}
							<div className="mt-1 mb-6 pl-1 text-xs text-red-500">
								{feedbackText}
							</div>

							<Button
								type="submit"
								color="emarat-accent"
								className="mr-3"
								pilled={true}
								loading={otpInProgress}
							>
								{sumbitBtnText}
							</Button>

							{!otpSentResult && (
								<Button
									type="button"
									color="emarat-secondary"
									pilled={true}
									disabled={otpInProgress}
									onClick={() => setMockVisible(true)}
								>
									Guest Login
								</Button>
							)}
						</form>
					</>
				)}
			</div>
		</div>
	);
}
