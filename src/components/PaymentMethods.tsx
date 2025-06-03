import { CreditCard, Smartphone, Building2 } from 'lucide-react'

export function PaymentMethods() {
  const paymentMethods = [
    {
      name: 'QRIS',
      icon: Smartphone,
      description: 'Scan & Pay'
    },
    {
      name: 'Virtual Account',
      icon: CreditCard,
      description: 'All Banks'
    },
    {
      name: 'Bank Transfer',
      icon: Building2,
      description: 'Manual Transfer'
    }
  ]

  return (
    <div className="mt-6 animate-fade-in">
      <p className="text-center text-sm text-gray-600 mb-4 font-medium">
        💳 Metode Pembayaran Tersedia
      </p>

      <div className="grid grid-cols-3 gap-3">
        {paymentMethods.map((method) => {
          const IconComponent = method.icon
          return (
            <div
              key={method.name}
              className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center hover-lift"
            >
              <div className="flex justify-center mb-2">
                <IconComponent className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-xs font-semibold text-gray-800 mb-1">
                {method.name}
              </p>
              <p className="text-xs text-gray-500">
                {method.description}
              </p>
            </div>
          )
        })}
      </div>

      <div className="text-center mt-4">
        <p className="text-xs text-gray-500">
          🔒 Pembayaran 100% Aman & Terpercaya
        </p>
      </div>
    </div>
  )
}
