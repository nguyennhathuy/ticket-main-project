import { Ship, User, Users, Armchair, CreditCard } from 'lucide-react';

const steps = [
  { label: 'Tuyến', icon: Ship, status: 'completed' },
  { label: 'Người đặt vé', icon: User, status: 'completed' },
  { label: 'Hành khách', icon: Users, status: 'completed' },
  { label: 'Chọn ghế ngồi', icon: Armchair, status: 'completed' },
  { label: 'Thanh toán', icon: CreditCard, status: 'current' },
] as const;

export function ProgressBar() {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={step.label} className="flex items-center">
            <div className={`flex flex-col items-center ${
              index < steps.length - 1 ? 'w-40' : ''
            }`}>
              <div className={`
                flex h-12 w-12 items-center justify-center rounded-full
                ${step.status === 'completed' ? 'bg-blue-600' : 
                  step.status === 'current' ? 'bg-blue-500' : 'bg-gray-300'}
              `}>
                <step.icon className={`w-6 h-6 ${
                  step.status === 'upcoming' ? 'text-gray-500' : 'text-white'
                }`} />
              </div>
              <span className={`mt-2 text-sm font-medium ${
                step.status === 'upcoming' ? 'text-gray-500' : 
                step.status === 'current' ? 'text-blue-500' : 'text-blue-600'
              }`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`h-0.5 w-full ${
                step.status === 'completed' ? 'bg-blue-600' : 'bg-gray-300'
              }`} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}