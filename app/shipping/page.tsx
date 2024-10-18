import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const shippingMethods = [
  {
    name: "Standard Shipping",
    description: "Delivery in 5-7 business days",
    price: 5.99
  },
  {
    name: "Express Shipping",
    description: "Delivery in 2-3 business days",
    price: 12.99
  },
  {
    name: "Next Day Delivery",
    description: "Delivery on the next business day",
    price: 19.99
  }
]

export default function ShippingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Shipping Information</h1>
      <p className="mb-6">We offer several shipping options to meet your needs. Please review the available methods below:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {shippingMethods.map((method, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{method.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{method.description}</p>
              <p className="font-bold mt-2">${method.price.toFixed(2)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-8 mb-4">Shipping Policy</h2>
      <p className="mb-4">
        We process and ship orders Monday through Friday, excluding holidays. Orders placed after 2 PM EST will be processed the following business day.
      </p>
      <p className="mb-4">
        International shipping is available for most countries. Additional customs fees and taxes may apply and are the responsibility of the recipient.
      </p>
      <p>
        For any questions regarding shipping, please contact our customer service team.
      </p>
    </div>
  )
}