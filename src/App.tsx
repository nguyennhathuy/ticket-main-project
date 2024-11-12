import React from 'react';
import { ProgressBar } from './components/ProgressBar';
import { BookerInfo } from './components/BookerInfo';
import { TripSummary } from './components/TripSummary';
import { PaymentMethod, PaymentType } from './components/PaymentMethod';
import { Timer } from './components/Timer';
import { ArrowLeft } from 'lucide-react';

const MOCK_BOOKER_INFO = {
  fullName: 'Nguyễn Văn A',
  email: 'nguyenvan_a@gmail.com',
  phone: '(0297) 3980 111',
};

const MOCK_INVOICE_INFO = {
  buyerName: 'Hà Nguyệt Nhi',
  company: 'CÔNG TY CỔ PHẦN TÀU CAO TỐC SUPERDONG-KIÊN GIANG',
  taxId: '1700556108',
  address: '187 Nguyễn Trung Trực, Khu phố 5, Phường Dương Đông, Thành phố Phú Quốc, Kiên Giang',
};

const MOCK_PASSENGERS = [
  {
    id: 1,
    fullName: 'Nguyễn A',
    idNumber: '111111111111',
    ship: 'SuperDong II',
    date: '20/11/2024',
    time: '07:30',
    price: 169855,
  },
  {
    id: 2,
    fullName: 'Trần B',
    idNumber: '222222222222',
    ship: 'SuperDong II',
    date: '20/11/2024',
    time: '07:30',
    price: 169855,
  },
  {
    id: 3,
    fullName: 'Lê C',
    idNumber: '333333333333',
    ship: 'SuperDong II',
    date: '20/11/2024',
    time: '07:30',
    price: 169855,
  },
];

function App() {
  const [paymentMethod, setPaymentMethod] = React.useState<PaymentType>(null);
  const [errors, setErrors] = React.useState<string[]>([]);
  const [showTimeoutModal, setShowTimeoutModal] = React.useState(false);

  const handleTimeout = () => {
    setShowTimeoutModal(true);
  };

  const handlePayment = () => {
    if (!paymentMethod) {
      setErrors(['Vui lòng chọn phương thức thanh toán']);
      return;
    }
    // Process payment
    console.log('Processing payment with method:', paymentMethod);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ProgressBar />

        {errors.length > 0 && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <ul className="list-disc list-inside">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-6">
          <BookerInfo
            bookerInfo={MOCK_BOOKER_INFO}
            invoiceInfo={MOCK_INVOICE_INFO}
          />

          <TripSummary passengers={MOCK_PASSENGERS} />

          <PaymentMethod
            selectedMethod={paymentMethod}
            onMethodSelect={setPaymentMethod}
          />

          <div className="flex justify-between">
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Quay lại
            </button>

            <button
              type="button"
              onClick={handlePayment}
              disabled={!paymentMethod}
              className={`
                px-6 py-3 rounded-md text-base font-medium
                ${paymentMethod
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
              `}
            >
              Thanh toán
            </button>
          </div>
        </div>

        <Timer initialMinutes={10} onTimeout={handleTimeout} />

        {showTimeoutModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md">
              <h3 className="text-lg font-semibold mb-4">
                Thời gian giữ chỗ đã hết
              </h3>
              <p className="text-gray-600 mb-6">
                Vui lòng đặt vé lại.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Đặt vé lại
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;